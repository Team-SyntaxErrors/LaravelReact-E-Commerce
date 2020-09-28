<?php

namespace App\Http\Controllers;

use App\Category;
use App\Menu;
use App\SubCategory;

class RelativeController extends Controller
{
    public function all_menu_get()
    {
        $menu = Menu::all();
        return response()->json($menu, 201);
    }

    public function all_category_get($id)
    {
        $category = Category::where('menu_id', $id)->get();
        return response()->json($category, 201);
    }

    public function all_subcategory_get()
    {
        $subcategory = SubCategory::all();
        return response()->json($subcategory, 201);
    }
}
