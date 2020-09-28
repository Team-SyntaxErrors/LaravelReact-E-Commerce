<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubCategoryRequest;
use App\Http\Resources\SubCategoryResource;
use App\SubCategory;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Str;

class SubCategoryController extends Controller
{
    use ImageUpload;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $subcategory = SubCategory::with('categories', 'menus')->Search($request->q)->paginate($request->row);
        return response()->json($subcategory, 200);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SubCategoryRequest $request)
    {
        $sub_category = new SubCategory();
        $requested_data = $request->all();
        if ($request->sub_category_icon) {
            $upload_path = $this->VerifyStore($request, 'sub_category_icon', 'sub_category_icon');
            $requested_data = Arr::set($requested_data, "sub_category_icon", $upload_path);
            $sub_category_slug = Str::slug($request->sub_category_name, '-');
            $requested_data = Arr::set($requested_data, "sub_category_slug", $sub_category_slug);
            $sub_category->fill($requested_data)->save();
            $status = 201;
            $response = [
                "status" => $status,
                "data"   => new SubCategoryResource($sub_category),
            ];
        }
        return response()->json($response, $status);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SubCategoryRequest $request, $id)
    {
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
        $status = 201;
        $response = [
            "status" => $status,
            "data"   => new SubCategoryResource($sub_category),
        ];
        return response()->json($response, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $subcategory = SubCategory::findOrFail($id);
        if (File::exists($subcategory->sub_category_icon)) {
            File::delete($subcategory->sub_category_icon);
        }
        $subcategory->delete();
        return response()->json(null, 204);
    }

    public function status($id)
    {
        $subcategory = SubCategory::findOrFail($id);
        if ($subcategory->status == 0) {
            $subcategory->status = 1;
        } else {
            $subcategory->status = 0;
        }
        $subcategory->save();
        $status = 200;
        $response = ['status' => $status, 'message' => "Sub Category Status Changed Successfully"];
        return response()->json($response, $status);
    }
}
