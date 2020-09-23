<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    protected $table = 'sub_categories';
    protected $primaryKey = 'sub_category_id';
    protected $fillable = ["category_id", "menu_id", "sub_category_name", "sub_category_slug", "sub_category_icon", "status"];

    public function scopeSearch($query, $q)
    {
        return $query->where('sub_category_name', 'LIKE', '%' . $q . '%');
    }

    public function menus()
    {
        return $this->belongsTo('App\Menu', 'menu_id');
    }

    public function categories()
    {
        return $this->belongsTo('App\Category', 'category_id');
    }
}
