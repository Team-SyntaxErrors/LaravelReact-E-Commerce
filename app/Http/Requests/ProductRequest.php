<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
        return [
            "product_name"=>"required",
            "product_slug"=> [
                "required",
                Rule::unique('products', 'product_slug')->ignore($this->product, 'product_id'),
            ],
            "product_sku"=>"required",
            "category_id"=>"required",
            "subcategory_id"=>"required",
            "brand_id"=>"required",
            "unit_id"=>"required",
            "product_alert_qty"=>"required",
            "purchase_price"=>"required",
            "sell_price"=>"required",
        ];
    }
}
