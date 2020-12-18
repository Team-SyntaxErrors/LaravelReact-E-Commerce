<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    /**
     * Table name
     *
     * @var string
     */
    protected $table = 'menus';

    /**
     * table primary key
     *
     * @var string
     */
    protected $primaryKey = 'menu_id';

    /**
     * Table other fields name
     *
     * @var array
     */
    protected $fillable = ['menu_name', 'menu_slug', 'menu_icon', 'status'];

    /**
     * Undocumented function
     *
     * @param mixed $query Initial Query to add condition.
     * @param mixed $q     Token for search in table.
     * @return array
     */
    public function scopeSearch($query, $q)
    {
        return $query->where('menu_name', 'LIKE', '%' . $q . '%');
    }

    /**
     * The relation between menu and category table
     *
     * @return array
     */
    public function categories()
    {
        return $this->hasMany("App\Category", 'menu_id');
    }

    /**
     * The relation between menu and subCategory table
     *
     * @return array
     */
    public function subcategories()
    {
        return $this->hasMany("App\SubCategory", 'menu_id');
    }
}
