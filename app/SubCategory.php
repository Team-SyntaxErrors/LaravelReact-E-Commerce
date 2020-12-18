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
     * Undocumented function
     *
     * @param $query
     * @param $q
     * @return void
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('sub_category_name', 'LIKE', '%' . $q . '%');
    }

    /**
     * The relation between subCategory and menu table
     *
     * @return void
     */
    public function menus()
    {
        return $this->belongsTo('App\Menu', 'menu_id');
    }

    /**
     * The relation between subCategory and category table
     *
     * @return void
     */
    public function categories()
    {
        return $this->belongsTo('App\Category', 'category_id');
    }
}
