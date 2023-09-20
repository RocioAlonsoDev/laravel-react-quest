<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\URL;

class SurveyResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'banner_img' => $this->banner_img ? URL::to($this->banner_img) : null,
            'requisites' => $this->requisites,
            'date' => $this->date->format('Y-m-d H:i:s'),
            'location' => $this->location,
            'max_users' => $this->max_users,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->format('Y-m-d H:i:s'),
            'expire_date' => (new \DateTime($this->expire_date))->format('Y-m-d')
        ];
    }
}

?>