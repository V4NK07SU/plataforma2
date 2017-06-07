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

Route::resource('health/appointment/sheduler', 'Api\HealthAppointmentController');



Route::post('/health/record/dimension/{id}', 'Api\HealthRecordDimensionController@update');
Route::get('/health/record/dimension/search/{keyword}','Api\HealthRecordDimensionController@search');
Route::resource('health/record/dimension', 'Api\HealthRecordDimensionController');


Route::post('/health/dimension/categories/{id}', 'Api\HealthDimensionsCategoriesController@update');
Route::get('/health/dimension/categories/search/{keyword}','Api\HealthDimensionsCategoriesController@search');
Route::get('/health/dimension/categories/all','Api\HealthDimensionsCategoriesController@getAll');
Route::resource('health/dimension/categories', 'Api\HealthDimensionsCategoriesController');


Route::post('/health/dimension/{id}', 'Api\HealthDimensionsController@update');
Route::get('/health/dimension/search/{keyword}','Api\HealthDimensionsController@search');
Route::get('/health/dimension/all','Api\HealthDimensionsController@getAll');
Route::resource('health/dimension', 'Api\HealthDimensionsController');


Route::get('health/types/search/{keyword}', 'Api\HealthTypesController@search');
Route::get('/health/types/all','Api\HealthTypesController@getAll');
Route::post('health/types/{id}', 'Api\HealthTypesController@update');
Route::resource('health/types', 'Api\HealthTypesController');

Route::resource('health/userfamilycomposition', 'Api\UserFamilyCompositionController');
Route::post('/health/userfamilycomposition/{id}', 'Api\UserFamilyCompositionController@update');
Route::get('/health/userfamilycomposition/search/{keyword}','Api\UserFamilyCompositionController@search');;

Route::post('/health/record/{id}', 'Api\HealthRecordController@update');
Route::get('/health/record/search/{keyword}','Api\HealthRecordController@search');
Route::get('/health/record/all','Api\HealthRecordController@getAll');
Route::resource('health/record', 'Api\HealthRecordController');

Route::resource('health/record', 'Api\HealthRecordController');

Route::post('/health/history/save-history', 'Api\HealthHistoryController@saveHistory');
Route::post('/health/history/{id}', 'Api\HealthHistoryController@update');
Route::get('/health/history/search/{keyword}','Api\HealthHistoryController@search');
Route::resource('health/history', 'Api\HealthHistoryController');
