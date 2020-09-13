<?php

namespace App\Http\Controllers;

use App\Category;
use App\Helpers\Helper;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
     * @param  \App\Http\Requests\CategoryRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        // dd($request->all());
        $category_model = new Category();
        $requested_data = $request->all();
        if ($request->category_icon) {
            $position = strpos($request->category_icon, ";");
            $sub_str = substr($request->category_icon, 0, $position);
            $extension = explode("/", $sub_str);
            $allowed = Helper::ImageExtension($extension[1]);
            if ($allowed == "Allowed") {
                $upload_path = "backend_assets/images/category_icon/" . time() . "." . $extension[1];
                $image_upload = Image::make($request->category_icon)->resize(300, 300);
                $image_upload->save($upload_path);
                $requested_data = Arr::set($requested_data, "category_icon", $upload_path);
                $category_slug = Str::slug($request->category_name, '-');
                $requested_data = Arr::set($requested_data, "category_slug", $category_slug);
                $category_model->fill($requested_data)->save();
                $status = 201;
                $response = [
                    "status" => $status,
                    "data"   => new CategoryResource($category_model),
                ];
            } else {
                $status = 400;
                $response = [
                    'errors' => ['project_logo_ext' => $allowed],
                    'status' => 400,
                ];
            }
        }
        return response()->json($response, $status);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CategoryRequest  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
