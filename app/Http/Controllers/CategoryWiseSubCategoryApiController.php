<?php

namespace App\Http\Controllers;

use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CategoryWiseSubCategoryApiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param integer $id Category id.
     * @return \Illuminate\Http\Response
     */
    public function __invoke(int $id)
    {
        try {
            $subcategory = SubCategory::where('category_id', $id)->get();
            return $this->successResponse($subcategory, 'category wise sub-category', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
