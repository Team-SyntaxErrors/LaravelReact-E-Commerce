<?php

namespace App\Http\Controllers;

use App\Brand;
use App\Http\Requests\BrandRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param \Illuminate\Http\Request $request For search & paginate data.
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $brand = Brand::Search($request->q)->paginate($request->row);
        return $this->successResponse($brand, "Brand Get Successfully", Response::HTTP_OK);
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
     * @param  App\Http\Requests\BrandRequest $request For getting Validated form data.
     * @return \Illuminate\Http\Response
     */
    public function store(BrandRequest $request)
    {
        try {
            $brand = new Brand();
            $requested_data = $request->all();
            if ($request->brand_logo) {
                $upload_path = $this->verifyStore($request, 'brand_logo', 'brand_logo');
                $requested_data = Arr::set($requested_data, "brand_logo", $upload_path);
            }
            $brand->fill($requested_data)->save();
            return $this->successResponse($brand, "Brand Saved Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  integer $id Getting id.
     * @return void
     */
    public function show(int $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  integer $id Getting id for edit query.
     * @return void
     */
    public function edit(int $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  App\Http\Requests\BrandRequest $request Getting validated form data.
     * @param  integer                        $id      Getting id for retrieving data from database.
     * @return \Illuminate\Http\Response
     */
    public function update(BrandRequest $request, int $id)
    {
        try {
            $brand = Brand::findOrFail($id);
            $requested_data = $request->all();
            if ($request->brand_logo != $brand->brand_logo) {
                if (File::exists($brand->brand_logo)) {
                    File::delete($brand->brand_logo);
                }
                $upload_path = $this->verifyStore($request, 'brand_logo', 'brand_logo');
                $requested_data = Arr::set($requested_data, "brand_logo", $upload_path);
            }
            $brand->fill($requested_data)->save();
            return $this->successResponse($brand, "Brand Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id Getting id for retrieving data.
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        try {
            $brand = Brand::findOrFail($id);
            if (File::exists($brand->brand_logo)) {
                File::delete($brand->category_icon);
            }
            $brand->delete();
            return $this->successResponse(null, "Brand Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @param integer $id For finding data from database.
     * @return \Illuminate\Http\Response
     */
    public function status(int $id)
    {
        try {
            $brand = Brand::findOrFail($id);
            if ($brand->status == 1) :
                $brand->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else :
                $brand->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($brand, "Brand Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
