<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductSlugCheckApiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  string $slug Getting Product Slug.
     * @return \Illuminate\Http\Response
     */
    public function __invoke($slug)
    {
        $slug = Product::whereProductSlug('product_slug', $slug)->first();
        if ($slug) {
            return response()->json($slug, 200);
        }
        return response()->json([], 204);
    }
}
