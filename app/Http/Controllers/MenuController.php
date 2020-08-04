<?php

namespace App\Http\Controllers;

use App\Menu;
use Helper;
use Arr;
use Str;
use Image;
use File;
use Illuminate\Http\Request;
use App\Http\Requests\MenuRequest;
use App\Http\Resources\MenuResource;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $menu = Menu::all();
        return MenuResource::collection($menu);
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
    public function store(MenuRequest $request)
    {
        // dd($request->all());
        $menu_model = new Menu();
        $requested_data = $request->all();
        if ($request->menu_icon) {
            $position = strpos($request->menu_icon, ";");
            $sub_str = substr($request->menu_icon, 0, $position);
            $extension = explode("/", $sub_str);
            $allowed = Helper::ImageExtension($extension[1]);
            if ($allowed == "Allowed") {
                $upload_path = "backend_assets/images/menu_icon/" . time() . "." . $extension[1];
                $image_upload = Image::make($request->menu_icon)->resize(300, 300);
                $image_upload->save($upload_path);
                $requested_data = Arr::set($requested_data, "menu_icon", $upload_path);
                $menu_slug = Str::slug($request->menu_name, '-');
                $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
                $menu_model->fill($requested_data)->save();
                $status = 201;
                $response = [
                    "status" => $status,
                    "data" => new MenuResource($menu_model),
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
        $menu = Menu::findOrFail($id);
        return response()->json($menu, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(MenuRequest $request, $id)
    {
        // dd($request->all());
        $menu_model = Menu::findOrFail($id);
        $requested_data = $request->all();
        if ($request->menu_icon != $menu_model->menu_icon) {
            $position = strpos($request->menu_icon, ";");
            $sub_str = substr($request->menu_icon, 0, $position);
            $extension = explode("/", $sub_str);
            $allowed = Helper::ImageExtension($extension[1]);
            if ($allowed == "Allowed") {
                if (File::exists($menu_model->menu_icon)) {
                    File::delete($menu_model->menu_icon);
                }
                $upload_path = "backend_assets/images/menu_icon/" . time() . "." . $extension[1];
                $image_upload = Image::make($request->menu_icon)->resize(300, 300);
                $image_upload->save($upload_path);
                $requested_data = Arr::set($requested_data, "menu_icon", $upload_path);
                $menu_slug = Str::slug($request->menu_name, '-');
                $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
                $menu_model->fill($requested_data)->save();
                $status = 201;
                $response = [
                    "status" => $status,
                    "data" => new MenuResource($menu_model),
                ];
            } else {
                $status = 400;
                $response = [
                    'errors' => ['project_logo_ext' => $allowed],
                    'status' => 400,
                ];
            }
        }
        $menu_slug = Str::slug($request->menu_name, '-');
        $requested_data = Arr::set($requested_data, "menu_slug", $menu_slug);
        $menu_model->fill($requested_data)->save();
        $status = 201;
        $response = [
            "status" => $status,
            "data" => new MenuResource($menu_model),
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
        Menu::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
