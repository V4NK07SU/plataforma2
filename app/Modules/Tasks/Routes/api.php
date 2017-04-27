<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your module. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::get('/tasks', function (Request $request) {
    // return $request->tasks();
})->middleware('auth:api');
*/
Route::post('/tasks/categories/{id}', 'Api\TasksCategoriesController@update');
Route::resource('/tasks/categories', 'Api\TasksCategoriesController');

Route::post('/tasks/{id}', 'Api\TasksController@update');
Route::resource('/tasks', 'Api\TasksController');