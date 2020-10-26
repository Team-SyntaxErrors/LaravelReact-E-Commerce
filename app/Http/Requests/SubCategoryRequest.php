<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubCategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $sub_category = $this->route("sub_category");
        return [
            "menu_id"           => "required",
            "category_id"       => "required",
            "sub_category_name" => "required|unique:sub_categories,sub_category_name," . $sub_category . ",sub_category_id",
            // "sub_category_icon" => "required",
        ];
    }
}
