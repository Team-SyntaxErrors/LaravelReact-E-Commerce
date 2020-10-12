<?php

namespace App\Http\Controllers;

use App\Http\Requests\MenuRequest;
use App\Http\Resources\MenuResource;
use App\Menu;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $menu = Menu::Search($request->q)->paginate($request->row);
        return $this->successResponse($menu, "Menu Get Successfully", Response::HTTP_OK);
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
     * @param  \App\Http\Requests\MenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MenuRequest $request)
    {
        try {
            $menu_model = new Menu();
            $requested_data = $request->all();
            if ($request->menu_icon) {
                $upload_path = $this->VerifyStore($request, 'menu_icon', 'menu_icon');
                $requested_data = Arr::set($requested_data, "menu_icon", $upload_path);
                $menu_slug = Str::slug($request->menu_name, '-');
                $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
                $menu_model->fill($requested_data)->save();

            }
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        } finally {
            return $this->successResponse($menu_model, "Menu Saved Successfully", Response::HTTP_CREATED);
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
     * @param  \App\Http\Requests\MenuRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MenuRequest $request, $id)
    {
        try {
            $menu_model = Menu::findOrFail($id);
            $requested_data = $request->all();
            if ($request->menu_icon != $menu_model->menu_icon) {
                if (File::exists($menu_model->menu_icon)) {
                    File::delete($menu_model->menu_icon);
                }
                $upload_path = $this->VerifyStore($request, 'menu_icon', 'menu_icon');
                $requested_data = Arr::set($requested_data, "menu_icon", $upload_path);
                $menu_slug = Str::slug($request->menu_name, '-');
                $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
                $menu_model->fill($requested_data)->save();
                $status = 201;
                $response = [
                    "status" => $status,
                    "data"   => new MenuResource($menu_model),
                ];

            }
            $menu_slug = Str::slug($request->menu_name, '-');
            $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
            $menu_model->fill($requested_data)->save();
        } catch (\Exception $e) {
            return $this->successResponse($menu_model, "Menu Update Successfully", Response::HTTP_CREATED);
        } finally {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
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
            $menu = Menu::findOrFail($id);
            if (File::exists($menu->menu_icon)) {
                File::delete($menu->menu_icon);
            }
            $menu->delete();
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        } finally {
            return $this->successResponse(null, "Menu Delete Successfully", Response::HTTP_NO_CONTENT);
        }
    }

    public function status($id)
    {
        try {
            $menu = Menu::findOrFail($id);
            if ($menu->status == 0) {
                $menu->status = 1;
            } else {
                $menu->status = 0;
            }
            $menu->save();
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage(), Response::HTTP_BAD_REQUEST);
        } finally {
            return $this->successResponse($menu, "Menu Status Change Successf-ully", $status);
        }
    }
}
