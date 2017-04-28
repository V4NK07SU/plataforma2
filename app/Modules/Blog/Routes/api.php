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
Route::get('/blog', function (Request $request) {
    // return $request->blog();
})->middleware('auth:api');
*/
Route::get('/blog', 'Api\BlogPostsController@index');
Route::post('/blog/authors/{id}', 'Api\BlogAuthorsController@update');
Route::resource('/blog/authors', 'Api\BlogAuthorsController');

Route::get('/blog/user', 'Api\BlogUsersController@index');
Route::post('/blog/user/{id}', 'Api\BlogUsersController@update');
Route::resource('/blog/user', 'Api\BlogUsersController');