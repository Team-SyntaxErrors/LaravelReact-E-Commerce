<?php

namespace App\Http\Controllers;

use App\Menu;

class RelativeController extends Controller
{
    public function all_menu_get()
    {
        $menu = Menu::all();
        return response()->json($menu, 201);
    }
}
