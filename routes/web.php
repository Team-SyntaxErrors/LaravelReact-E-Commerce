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
Route::get('/home', 'HomeController@index')->name('home');
Route::resource('/menu', 'MenuController');
Route::resource('/category', 'CategoryController');
Route::get('/all_menu_get', 'RelativeController@all_menu_get');
Route::get('{ReactRoute}', function () {
    return view('index');
})->where('ReactRoute', '.*');
