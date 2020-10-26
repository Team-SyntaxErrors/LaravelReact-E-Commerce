<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    protected $primaryKey = 'brand_id';
    protected $fillable = ["brand_name", "contact_person", "phone_number", "brand_address", "brand_logo", "brand_description", "status"];

    public function scopeSearch($query, $q)
    {
        return $query->where('brand_name', 'LIKE', '%' . $q . '%')
            ->where('brand_address', 'LIKE', '%' . $q . '%')
            ->where('contact_person', 'LIKE', '%' . $q . '%')
            ->where('phone_number', 'LIKE', '%' . $q . '%');
    }
}
