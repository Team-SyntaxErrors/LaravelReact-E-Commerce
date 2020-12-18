<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'sub_categories';

    /**
     * table primary key
     *
     * @var string
     */
    protected $primaryKey = 'sub_category_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = ['category_id', 'menu_id', 'sub_category_name', 'sub_category_slug', 'sub_category_icon', 'status'];

    /**
     * Search function
     *
     * @param mixed $query Initial Query to add condition.
     * @param mixed $q     Token for search in table.
     * @return array
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('sub_category_name', 'LIKE', '%' . $q . '%');
    }

    /**
     * The relation between subCategory and menu table
     *
     * @return object
     */
    public function menus()
    {
        return $this->belongsTo('App\Menu', 'menu_id');
    }

    /**
     * The relation between subCategory and category table
     *
     * @return object
     */
    public function categories()
    {
        return $this->belongsTo('App\Category', 'category_id');
    }
}
