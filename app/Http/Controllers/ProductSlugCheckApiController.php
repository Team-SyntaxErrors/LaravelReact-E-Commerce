<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Response;

class ProductSlugCheckApiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  string $slug Getting Product Slug.
     * @return \Illuminate\Http\Response
     */
    public function __invoke(string $slug)
    {
        $slug = Product::whereProductSlug($slug)->first();
        if ($slug) {
            return $this->successResponse(
                $slug,
                "Slug found",
                Response::HTTP_OK
            );
        } else {
            return $this->successResponse(
                [],
                "Slug found",
                Response::HTTP_NO_CONTENT
            );
        }
    }
}
