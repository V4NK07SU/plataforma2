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
    // Authentication route
    Route::post('authenticate', 'Api\JwtAuthenticateController@authenticate');
    // Registration route
    Route::post('register', 'Api\JwtAuthenticateController@register');
    // Roles routes
    Route::post('roles', 'Api\JwtAuthenticateController@createsRole');//->middleware(['auth:api']);
    Route::get('roles', 'Api\JwtAuthenticateController@getRoles');//->middleware(['auth:api']);
    Route::post('roles/{id}', 'Api\JwtAuthenticateController@updateRole');//->middleware(['auth:api']);    
    Route::delete('roles/{id}', 'Api\JwtAuthenticateController@deleteRole');//->middleware(['auth:api']);
    Route::get('roles/{id}', 'Api\JwtAuthenticateController@getRole');//->middleware(['auth:api']);
    Route::get('roles/search/{keywors}', 'Api\JwtAuthenticateController@searchRole');//->middleware(['auth:api']);
    // Prmissions rutes
    Route::post('permissions', 'Api\JwtAuthenticateController@createPermission');//->middleware(['auth:api']);    
    Route::get('permissions', 'Api\JwtAuthenticateController@getPermissions');//->middleware(['auth:api']);
    Route::post('permissions/{id}', 'Api\JwtAuthenticateController@updatePermission');//->middleware(['auth:api']);
    Route::delete('permissions/{id}', 'Api\JwtAuthenticateController@deletePermission');//->middleware(['auth:api']);
    Route::get('permissions/{id}', 'Api\JwtAuthenticateController@getPermission');//->middleware(['auth:api']);
    // Route to assign role to user
    Route::post('assign-role', 'Api\JwtAuthenticateController@assignRole');//->middleware(['auth:api']);
    // Route to attache permission to a role
    Route::post('assign-permission', 'Api\JwtAuthenticateController@assignPermission');//->middleware(['auth:api']);
    // Logout the user
    Route::get('logout', 'Api\JwtAuthenticateController@logout');

    // API route group that we need to protect
    // Protected route
    Route::get('all', 'Api\JwtAuthenticateController@index')->middleware(['auth:api']);

    Route::get('some/date', 'Api\JwtAuthenticateController@dateName');

});

