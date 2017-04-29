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

Route::post('/agendas/phenomenas/{id}','Api\PhenomenaController@update');
Route::post('/agendas/dias/{id}', 'Api\DiaController@update');
Route::post('/agendas/services/{id}','Api\ServiceController@update');
Route::get('/agendas/phenomenas/search/{keyword}','Api\PhenomenaController@search');
Route::get('/agendas/dias/search/{keyword}','Api\DiaController@search');
Route::get('/agendas/services/search/{keyword}','Api\ServiceController@search');
Route::get('/agendas/horas/search/{keyword}','Api\HoraController@search');
Route::get('/agendas/periods/search/{keyword}','Api\PeriodController@search');
Route::post('/agendas/horas/{id}','Api\HoraController@update');
Route::post('/agendas/periods/{id}','Api\PeriodController@update');
Route::resource('/agendas/horas','Api\HoraController');
Route::resource('/agendas/dias','Api\DiaController');
Route::resource('/agendas/periods','Api\PeriodController');
Route::resource('/agendas/phenomenas','Api\PhenomenaController');
Route::resource('/agendas/riskvariables','Api\RiskVariableController');
Route::resource('/agendas/schedules','Api\ScheduleController');
Route::resource('/agendas/services','Api\ServiceController');
Route::resource('/agendas/appoinments','Api\AppoinmentController');
Route::resource('/agendas/collaborators','Api\CollaboratorGoalController');

//Route::resource('/agendas/users','Api\UserController');

Route::resource('/agendas','Api\AgendaController');

Route::get('/agenda', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



