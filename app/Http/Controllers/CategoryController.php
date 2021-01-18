<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Illuminate\Http\Request $request For getting search & pagination data.
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $category = Category::with("menus")->Search($request->q)->paginate($request->row);
        return $this->successResponse($category, "Category Get Successfully", Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return void
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CategoryRequest $request For getting validated data form data.
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        try {
            $category_model = new Category();
            $requested_data = $request->all();
            if ($request->category_icon) {
                $upload_path    = $this->verifyStore($request, 'category_icon', 'category_icon');
                $requested_data = Arr::set($requested_data, "category_icon", $upload_path);
                $category_slug  = Str::slug($request->category_name, '-');
                $requested_data = Arr::set($requested_data, "category_slug", $category_slug);
                $category_model->fill($requested_data)->save();
            }
            return $this->successResponse($category_model, "Category Saved Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category $category For instantiating object using id.
     * @return void
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category $category For instantiating object using id.
     * @return void
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\CategoryRequest $request For getting validated Form data.
     * @param  integer                           $id      For getting id to instantiating object.
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, int $id)
    {
        try {
            $category_model = Category::findOrFail($id);
            $requested_data = $request->all();
            if ($request->category_icon != $category_model->category_icon) {
                if (File::exists($category_model->category_icon)) {
                    File::delete($category_model->category_icon);
                }
                $upload_path    = $this->verifyStore($request, 'category_icon', 'category_icon');
                $requested_data = Arr::set($requested_data, "category_icon", $upload_path);
            }
            $category_slug  = Str::slug($request->category_name, '-');
            $requested_data = Arr::set($requested_data, "category_slug", $category_slug);
            $category_model->fill($requested_data)->save();
            return $this->successResponse($category_model, "Category Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id Getting id of delete data.
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        try {
            $category = Category::findOrFail($id);
            if (File::exists($category->category_icon)) {
                File::delete($category->category_icon);
            }
            $category->delete();
            return $this->successResponse(null, "Category Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Status Changing Function.
     *
     * @param integer $id Getting id to change status.
     * @return \Illuminate\Http\Response
     */
    public function status(int $id)
    {
        try {
            $category = Category::findOrFail($id);
            if ($category->status == 1):
                $category->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else:
                $category->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($category, "Category Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
