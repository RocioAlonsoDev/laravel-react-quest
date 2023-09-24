<?php
 
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateQuestRequest extends FormRequest
{

    public function authorize(): bool
    {
        $quest = $this->route('quest');
        if($this->user()->id !== $quest->creator_id){
            return false;
        }
        return true;
    }

    public function rules(): array
    {
        return [
            'creator_id' => 'exists:users,id',
            'title' => 'required|string|max:1000',
            'description' => 'nullable|string',
            'banner_img' => 'nullable|string',
            'requisites' => 'nullable|string',
            'date' => 'nullable|date|after:today',
            'location' => 'required|string',
            'max-users' => 'nullable|integer'
        ];
    }
}
