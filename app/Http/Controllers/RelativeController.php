<?php

namespace App\Http\Controllers;

use App\Category;
use App\Menu;

class RelativeController extends Controller
{
    public function all_menu_get()
    {
        $menu = Menu::all();
        return response()->json($menu, 201);
    }

    public function all_category_get()
    {
        $category = Category::all();
        return response()->json($category, 201);
    }
}
