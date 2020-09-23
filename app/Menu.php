<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';
    protected $primaryKey = 'menu_id';
    protected $fillable = ["menu_name", "menu_slug", "menu_icon", "status"];

    public function scopeSearch($query, $q)
    {
        return $query->where('menu_name', 'LIKE', '%' . $q . '%');
    }

    public function categories()
    {
        return $this->hasMany("App\Category", 'menu_id');
    }

    public function subcategories()
    {
        return $this->hasMany("App\SubCategory", 'menu_id');
    }
}
