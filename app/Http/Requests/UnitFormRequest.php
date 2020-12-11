<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UnitFormRequest extends FormRequest
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
        $unitId = $this->route('unit');
        return [
            'unit_name' => 'required|unique:units,unit_name,'.$unitId.',unit_id',
            'short_name' => 'required|unique:units,short_name,'.$unitId.',unit_id',
            'status' => 'required',
        ];
    }
}
