<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'categories';

    /**
     * Table primary key
     *
     * @var string
     */
    protected $primaryKey = 'category_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = ['menu_id', 'category_name', 'category_slug', 'category_icon', 'status'];

    /**
     * Search function
     *
     * @param mixed $query Initial Query to add condition.
     * @param mixed $q     Token for search in table.
     * @return array
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('category_name', 'LIKE', '%' . $q . '%');
    }

    /**
     * The relation between category and menu table
     *
     * @return object
     */
    public function menus()
    {
        return $this->belongsTo('App\Menu', 'menu_id');
    }

    /**
     * The relation between category and subCategory table
     *
     * @return array
     */
    public function subcategories()
    {
        return $this->hasMany('App\SubCategory', 'category_id');
    }
}
