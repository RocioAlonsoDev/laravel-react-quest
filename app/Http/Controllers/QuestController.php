<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuestResource;
use App\Models\Quest;
use App\Http\Requests\StoreQuestRequest;
use App\Http\Requests\UpdateQuestRequest;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;


class QuestController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        return QuestResource::collection(
            Quest::where('creator_id',$user->id)
            ->orderBy('created_at','desc')
            ->paginate(10)
        );
    }

    public function store(StoreQuestRequest $request)
    {
        $data = $request->validated();

        if (isset($data['banner_img'])) {
            $relativePath = $this->saveImage($data['banner_img']);
            $data['banner_img'] = $relativePath;
        }

        $quest = Quest::create($data);

        return new QuestResource($quest);
    }

    public function show(Quest $quest,Request $request)
    {
        $user = $request->user();
        if ($user->id !== $quest->creator_id) {
            return abort(403, 'Unauthorized action');
        }
        return new QuestResource($quest);
    }

    public function update(UpdateQuestRequest $request, Quest $quest)
    {
        $data = $request->validated();

        if (isset($data['banner_img'])) {
            $relativePath = $this->saveImage($data['banner_img']);
            $data['banner_img'] = $relativePath;

            if ($quest->banner_img) {
                $absolutePath = public_path($quest->banner_img);
                File::delete($absolutePath);
            }
        }

        $quest->update($data);

        return new QuestResource($quest);
    }

    public function destroy(Quest $quest,Request $request)
    {
        $user = $request->user();
        if ($user->id !== $quest->creator_id) {
            return abort(403, 'Unauthorized action.');
        }

        $survey->delete();

        if ($quest->banner_img) {
            $absolutePath = public_path($quest->banner_img);
            File::delete($absolutePath);
        }

        return response('', 204);
    }

    private function saveImage($image)
    {
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {

            $image = substr($image, strpos($image, ',') + 1);

            $type = strtolower($type[1]); // jpg, png, gif

            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
