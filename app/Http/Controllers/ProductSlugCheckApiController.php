<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductSlugCheckApiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $slug = Product::where('product_slug', $request->slug)->exists();
        if ($slug) {
            return response()->json("Found Slug", 200);
        } else {
            return response()->json("No Slug", 201);
        }
    }
}
