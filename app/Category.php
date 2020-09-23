<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $primaryKey = 'category_id';
    protected $fillable = ["menu_id", "category_name", "category_slug", "category_icon", "status"];

    public function scopeSearch($query, $q)
    {
        return $query->where('category_name', 'LIKE', '%' . $q . '%');
    }

    public function menus()
    {
        return $this->belongsTo('App\Menu', 'menu_id');
    }

    public function subcategories()
    {
        return $this->hasMany('App\SubCategory', 'category_id');
    }
}
