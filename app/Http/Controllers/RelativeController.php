<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Category;
use App\Menu;
use App\SubCategory;
use App\Unit;

class RelativeController extends Controller
{
    public function all_menu_get()
    {
        $menu = Menu::all();
        return response()->json($menu, 200);
    }

    public function menu_category_get($id)
    {
        $category = Category::where('menu_id', $id)->get();
        return response()->json($category, 200);
    }

    public function all_category_get()
    {
        $category = Category::all();
        return response()->json($category, 200);
    }

    public function category_subcategory_get($id)
    {
        $subcategory = SubCategory::where('category_id', $id)->get();
        return response()->json($subcategory, 200);
    }

    public function all_subcategory_get()
    {
        $subcategory = SubCategory::all();
        return response()->json($subcategory, 200);
    }

    public function all_brand_get()
    {
        $brand = Brand::all();
        return response()->json($brand, 200);
    }

    public function all_unit_get()
    {
        $unit = Unit::all();
        return response()->json($unit, 200);
    }
}
