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

Route::resource('health/types', 'Api\HealthTypesController');

Route::resource('health/userfamilycomposition', 'Api\UserFamilyCompositionController');


Route::resource('health/record', 'Api\HealthRecordController');

Route::resource('health/record', 'Api\HealthRecordController');

Route::resource('health/history', 'Api\HealthHistoryController');
