<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'brands';

    /**
     * Table primary key
     *
     * @var string
     */
    protected $primaryKey = 'brand_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = [
        'brand_name',
        'contact_person',
        'phone_number',
        'brand_address',
        'brand_logo',
        'brand_description',
        'status'];

    /**
     * Search function
     *
     * @param mixed $query Initial Query to add condition.
     * @param mixed $q     Token for search in table.
     * @return array
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('brand_name', 'LIKE', '%' . $q . '%')
            ->orWhere('brand_address', 'LIKE', '%' . $q . '%')
            ->orWhere('contact_person', 'LIKE', '%' . $q . '%')
            ->orWhere('phone_number', 'LIKE', '%' . $q . '%');
    }
}
