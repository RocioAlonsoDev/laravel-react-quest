<?php
 
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreQuestRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation(){
        $this->merge([
            'creator_id' => $this->user()->id
        ]);
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
            'max_users' => 'nullable|integer',
            'status' => 'nullable|boolean'
        ];
    }
}
