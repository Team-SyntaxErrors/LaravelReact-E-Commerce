<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategoryRequest;
use App\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class SubCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $subcategory = SubCategory::with('categories', 'menus')->Search($request->q)->paginate($request->row);
        return $this->successResponse($subcategory, "SubCategory Get Successfully", Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubCategoryRequest $request)
    {
        try {
            $sub_category = new SubCategory();
            $requested_data = $request->all();
            if ($request->sub_category_icon) {
                $upload_path = $this->VerifyStore($request, 'sub_category_icon', 'sub_category_icon');
                $requested_data = Arr::set($requested_data, "sub_category_icon", $upload_path);
                $sub_category_slug = Str::slug($request->sub_category_name, '-');
                $requested_data = Arr::set($requested_data, "sub_category_slug", $sub_category_slug);
                $sub_category->fill($requested_data)->save();
            }

            return $this->successResponse($sub_category, "Sub Category Saved Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  integer                  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SubCategoryRequest $request, $id)
    {
        try {
            $sub_category = SubCategory::findOrFail($id);
            $requested_data = $request->all();
            if ($request->sub_category_icon != $sub_category->sub_category_icon) {
                if (File::exists($sub_category->sub_category_icon)) {
                    File::delete($sub_category->sub_category_icon);
                }
                $upload_path = $this->VerifyStore($request, 'sub_category_icon', 'sub_category_icon');
                $requested_data = Arr::set($requested_data, "sub_category_icon", $upload_path);
            }
            $sub_category_slug = Str::slug($request->sub_category_name, '-');
            $requested_data = Arr::set($requested_data, "sub_category_slug", $sub_category_slug);
            $sub_category->fill($requested_data)->save();
            return $this->successResponse($sub_category, "Sub Category Successfully Updated", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $subcategory = SubCategory::findOrFail($id);
            if (File::exists($subcategory->sub_category_icon)) {
                File::delete($subcategory->sub_category_icon);
            }
            $subcategory->delete();
            return $this->successResponse(null, "Sub Category Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function status($id)
    {
        try {
            $subcategory = SubCategory::findOrFail($id);
            if ($subcategory->status == 1) :
                $subcategory->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else :
                $subcategory->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($subcategory, "Sub Category Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
