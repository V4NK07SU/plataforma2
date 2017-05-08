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

Route::get('/health', function (Request $request) {
    // return $request->health();
})->middleware('auth:api');


Route::resource('health/record/dimension', 'Api\HealthRecordDimensionController');


Route::resource('health/dimension/categories', 'Api\HealthDimensionsCategoriesController');

Route::resource('health/dimension', 'Api\HealthDimensionsController');
Route::post('health/dimension/{id}', 'Api\HealthDimensionsController@update');
Route::get('health/dimension/search/{keyword}', 'Api\HealthDimensionsController@search');



Route::get('health/types/all', 'Api\HealthTypesController@getAll');
Route::resource('health/types', 'Api\HealthTypesController');
Route::post('/health/types/{id}','Api\HealthTypesController@update');
Route::get('/health/types/search/{keyword}','Api\HealthTypesController@search');

Route::resource('health/userfamilycomposition', 'Api\UserFamilyCompositionController');

Route::get('health/record/all', 'Api\HealthRecordController@getAll');
Route::resource('health/record', 'Api\HealthRecordController');
Route::post('health/record/{id}', 'Api\HealthRecordController@update');
Route::get('health/record/search/{keyword}', 'Api\HealthRecordController@search');


Route::resource('health/type/dimension', 'Api\HealthTypeDimensionController');
Route::post('/health/type/dimension/{id}','Api\HealthTypeDimensionController@update');
Route::get('/health/type/dimension/search/{keyword}','Api\HealthTypeDimensionController@search');

Route::resource('health/history', 'Api\HealthHistoryController');
