<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Product;
use App\ProductTag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  Illuminate\Http\Request $request Getting search & pagination data.
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $product = Product::with("images")
            ->with('tags')
            ->with('categories')
            ->with('subCategories')
            ->with('brands')
            ->with('units')
            ->Search($request->q)
            ->paginate($request->row);
        return $this->successResponse(
            $product,
            "Product Get Successfully",
            Response::HTTP_OK
        );
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
     * @param  ProductRequest $request Getting validated form data.
     * @param  Product        $product Dependency injection of product model.
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request, Product $product)
    {
        try {
            $requested = $request->all();

            //if there is any tag founded 1 will be stored in product_has_tag field
            if ($request->tags[0]) {
                $requested['product_has_tag'] = 1;
            } else {
                $requested['product_has_tag'] = 0;
            }

            $product->fill($requested)->save();

            //Product Tags inserting in product_tags table
            if ($request->tags[0]) {
                $data = [];
                foreach ($request->tags as $key => $value) {
                    $data[] = [
                        'product_id' => $product->product_id,
                        'tags'       => $value,
                    ];
                }
                ProductTag::insert($data);
            }

            return $this->successResponse(
                $product,
                "Product Saved Successfully",
                Response::HTTP_CREATED
            );
        } catch (\Exception $e) {
            return $this->errorResponse(
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  integer $id Instantiating object of model through this id.
     * @return void
     */
    public function show(int $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  integer $id Instantiating object of model through this id.
     * @return void
     */
    public function edit(int $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request Getting validated form data.
     * @param  integer                  $id      Instantiating object of model through this id.
     * @return void
     */
    public function update(Request $request, int $id)
    {
        // try {
        //     $product = Product::find($id);
        //     if ($request->tags[0]) {
        //         $request->product_has_tag = 1;
        //     } else {
        //         $request->product_has_tag = 0;
        //     }

        //     $product->fill($request->all())->save();

        //     if ($request->tags[0]) {
        //         $data = [];
        //         foreach ($request->tags as $key => $value) {
        //             $data[] = [
        //                 'product_id' => $product->product_id,
        //                 'tags'       => $value,
        //             ];
        //         }
        //         ProductTag::insert($data);
        //     }
        //     return $this->successResponse($product, "Product Saved Successfully", Response::HTTP_CREATED);
        // } catch (\Exception $e) {
        //     return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        // }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  integer $id Instantiating object of model through this id.
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            return $this->successResponse(null, "Product Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Changing status of specified resource.
     *
     * @param integer $id Instantiating object of model through this id.
     * @return \Illuminate\Http\Response
     */
    public function status(int $id)
    {
        try {
            $product = Product::findOrFail($id);
            if ($product->status == 1) :
                $product->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else :
                $product->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($product, "Product Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
