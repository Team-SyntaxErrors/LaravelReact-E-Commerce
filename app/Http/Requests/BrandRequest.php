<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BrandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return boolean
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
        $brand = $this->route('brand');
        return [
            'brand_name'     => "required|unique:brands,brand_name," . $brand . ",brand_id",
            'contact_person' => 'required',
            'phone_number'   => 'required',
        ];
    }
}
