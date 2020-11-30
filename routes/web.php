<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Auth::routes();
Route::middleware('auth')->group(function () {
    Route::get("/", function () {
        return view("index");
    });
    Route::get('/home', 'HomeController@index')->name('home');
    Route::resource('/menu', 'MenuController');
    Route::get('/menu/status/{id}', 'MenuController@status');
    Route::resource('/category', 'CategoryController');
    Route::get('/category/status/{id}', 'CategoryController@status');
    Route::resource('/sub_category', 'SubCategoryController');
    Route::get('/sub_category/status/{id}', 'SubCategoryController@status');
    Route::get('/all_menu_get', 'RelativeController@all_menu_get');
    Route::get('/all_category_get/{id}', 'RelativeController@menu_category_get');
    Route::get('/categories', 'RelativeController@all_category_get');
    Route::get('/subcategory_get/{id}', 'RelativeController@category_subcategory_get');
    Route::resource('/units', 'UnitController');
    Route::resource('/brands', 'BrandController');
    Route::get('/all_brand_get', 'RelativeController@all_brand_get');
    Route::get('/all_unit_get', 'RelativeController@all_unit_get');
    Route::get('/brands/status/{id}', 'BrandController@status');
    Route::get("/product_slug_check", "ProductSlugCheckApiController");
    Route::get('/home', 'HomeController@index')->name('home');
    Route::resource('/products', 'ProductController');
    Route::get('/products/status/{id}', 'ProductController@status');
});
Route::get('{ReactRoute}', function () {
    return view('index');
})->where('ReactRoute', '.*');
