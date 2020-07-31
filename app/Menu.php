<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $table = 'menus';
    protected $primaryKey = 'menu_id';
    protected $fillable = ["menu_name", "menu_slug", "menu_icon", "status"];
}
