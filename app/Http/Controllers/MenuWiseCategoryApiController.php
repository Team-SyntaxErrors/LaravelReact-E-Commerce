<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MenuWiseCategoryApiController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param integer $id Menu id.
     * @return \Illuminate\Http\Response
     */
    public function __invoke(int $id)
    {
        try {
            $category = Category::where('menu_id', $id)->get();
            return $this->successResponse($category, 'menu wise category fetched successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
