<?php

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

// Route to create a new role
Route::group(['prefix' => 'users'], function () {
    Route::post('role', 'Api\JwtAuthenticateController@createRole')->middleware(['auth:api']);
    // Route to create a new permission
    Route::post('permission', 'Api\JwtAuthenticateController@createPermission')->middleware(['auth:api']);
    // Route to assign role to user
    Route::post('assign-role', 'Api\JwtAuthenticateController@assignRole')->middleware(['auth:api']);
    // Route to attache permission to a role
    Route::post('assign-permission', 'Api\JwtAuthenticateController@assignPermission')->middleware(['auth:api']);
    // Authentication route
    Route::post('authenticate', 'Api\JwtAuthenticateController@authenticate');
    // Logout the user
    Route::get('logout', 'Api\JwtAuthenticateController@logout');

    // API route group that we need to protect
    // Protected route
    Route::get('all', 'Api\JwtAuthenticateController@index')->middleware(['auth:api']);
});

