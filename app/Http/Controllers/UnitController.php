<?php

namespace App\Http\Controllers;

use App\Http\Requests\UnitFormRequest;
use App\Unit;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $unit_data = Unit::search($request->q)->paginate($request->row);
        return $this->successResponse($unit_data, "Unit Get Successfully", Response::HTTP_OK);
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
    public function store(UnitFormRequest $request)
    {
        try {
            $unit_model = new Unit;
            $unit_model->fill($request->all())->save();
            return $this->successResponse($unit_model, "Unit Saved Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $unit_model = Unit::findOrFail($id);
            if ($unit_model->status == 1):
                $unit_model->update(['status' => 0]);
                $status = Response::HTTP_CREATED;
            else:
                $unit_model->update(['status' => 1]);
                $status = Response::HTTP_OK;
            endif;
            return $this->successResponse($unit_model, "Unit Status Change Successfully", $status);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function update(UnitFormRequest $request, $id)
    {
        try {
            $unit_model = Unit::findOrFail($id);
            $unit_model->fill($request->all())->save();
            return $this->successResponse($unit_model, "Unit Update Successfully", Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Unit::findOrFail($id)->delete();
            return $this->successResponse(null, "Unit Delete Successfully", Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}
