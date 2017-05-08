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
Route::post('/agendas/collaborators/{id}','Api\CollaboratorGoalController@update');
Route::post('/agendas/periods/{id}','Api\PeriodController@update');
Route::post('/agendas/agenda/{id}','Api\AgendaController@update');
Route::post('/agendas/appoinments/{id}','Api\AppoinmentController@update');
Route::post('/agendas/horas/{id}','Api\HoraController@update');
Route::post('/agendas/schedules/{id}','Api\ScheduleController@update');
Route::post('/agendas/riskvariables/{id}','Api\RiskVariableController@update');
Route::post('/agendas/agendaschedules/{id}','Api\AgendaScheduleController@update');

Route::get('/agendas/phenomenas/search/{keyword}','Api\PhenomenaController@search');
Route::get('/agendas/riskvariables/search/{keyword}','Api\RiskVariableController@search');
Route::get('/agendas/dias/search/{keyword}','Api\DiaController@search');
Route::get('/agendas/services/search/{keyword}','Api\ServiceController@search');
Route::get('/agendas/appoinments/search/{keyword}','Api\AppoinmentController@search');
Route::get('/agendas/horas/search/{keyword}','Api\HoraController@search');
Route::get('/agendas/periods/search/{keyword}','Api\PeriodController@search');
Route::get('/agendas/collaborators/search/{keyword}','Api\CollaboratorGoalController@search');
Route::get('/agendas/search/{keyword}','Api\AgendaController@search');

Route::post('/agendas/agendaschedules/search/{keyword}','Api\AgendaScheduleController@search');
Route::get('/agendas/schedules/search/{keyword}','Api\ScheduleController@search');


Route::get('/agendas/services/all', 'Api\ServiceController@getAll');
Route::get('/agendas/periods/all', 'Api\PeriodController@getAll');
Route::get('/agendas/phenomenas/all', 'Api\PhenomenaController@getAll');
Route::get('/agendas/agendas/all', 'Api\AgendaController@getAll');
Route::get('/agendas/riskvariables/all','Api\RiskVariableController@getAll');
Route::get('/agendas/schedules/all', 'Api\ScheduleController@getAll');


Route::resource('/agendas/agenda','Api\AgendaController');
Route::resource('/agendas/horas','Api\HoraController');
Route::resource('/agendas/dias','Api\DiaController');
Route::resource('/agendas/periods','Api\PeriodController');
Route::resource('/agendas/phenomenas','Api\PhenomenaController');
Route::resource('/agendas/riskvariables','Api\RiskVariableController');
Route::resource('/agendas/schedules','Api\ScheduleController');
Route::resource('/agendas/agendaschedules','Api\AgendaScheduleController');
Route::resource('/agendas/services','Api\ServiceController');
Route::resource('/agendas/appoinments','Api\AppoinmentController');
Route::resource('/agendas/collaborators','Api\CollaboratorGoalController');

//Route::resource('/agendas/users','Api\UserController');

// Para los menus o selects

Route::get('/agendas/services/all', 'Api\ServiceController@getAll');

Route::resource('/agendas','Api\AgendaController');

Route::get('/agenda', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



