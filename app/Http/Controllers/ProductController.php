<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductTag;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @param  Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $product = Product::with("images")->with('tags')
            ->with('categories')->with('subCategories')
            ->with('brands')->with('units')
            ->Search($request->q)
            ->paginate($request->row);
        return $this->successResponse($product, "Product Get Successfully", Response::HTTP_OK);
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
    public function store(Request $request)
    {
        try {
            $product = new Product();
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

            return $this->successResponse($product, "Product Saved Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
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
    public function update(Request $request, $id)
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            return $this->successResponse(null, "Product Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
    public function status($id)
    {
        try {
            $product = Product::findOrFail($id);
            if ($product->status == 1):
                $product->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else:
                $product->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($product, "Product Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
