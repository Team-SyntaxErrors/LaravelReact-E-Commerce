<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Traits\ImageUpload;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    use ImageUpload;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $category = Category::with("menus")->Search($request->q)->paginate($request->row);
        return response()->json($category, 201);
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
        $category_model = new Category();
        $requested_data = $request->all();
        if ($request->category_icon) {
            $upload_path = $this->VerifyStore($request, 'category_icon', 'category_icon');
            $requested_data = Arr::set($requested_data, "category_icon", $upload_path);
            $category_slug = Str::slug($request->category_name, '-');
            $requested_data = Arr::set($requested_data, "category_slug", $category_slug);
            $category_model->fill($requested_data)->save();
            $status = 201;
            $response = [
                "status" => $status,
                "data"   => new CategoryResource($category_model),
            ];

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
    public function update(CategoryRequest $request, $id)
    {
        // dd($request->all());
        $category_model = Category::findOrFail($id);
        $requested_data = $request->all();
        if ($request->category_icon != $category_model->category_icon) {
            if (File::exists($category_model->category_icon)) {
                File::delete($category_model->category_icon);
            }
            $upload_path = $this->VerifyStore($request, 'category_icon', 'category_icon');
            $requested_data = Arr::set($requested_data, "category_icon", $upload_path);
        }
        $category_slug = Str::slug($request->category_name, '-');
        $requested_data = Arr::set($requested_data, "category_slug", $category_slug);
        $category_model->fill($requested_data)->save();
        $status = 201;
        $response = [
            "status" => $status,
            "data"   => new CategoryResource($category_model),
        ];
        return response()->json($response, $status);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        if (File::exists($category->category_icon)) {
            File::delete($category->category_icon);
        }
        $category->delete();
        return response()->json(null, 204);
    }
}
