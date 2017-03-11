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

Route::resource('/agendas/horas','Api\HoraController');
Route::resource('/agendas/dias','Api\DiaController');
Route::resource('/agendas/periods','Api\PeriodController');
Route::resource('/agendas/phenomenas','Api\PhenomenaController');
Route::resource('/agendas/riskvariables','Api\RiskVariableController');
Route::resource('/agendas/schedules','Api\ScheduleController');
Route::resource('/agendas/services','Api\ServiceController');
Route::resource('/agendas/appoinments','Api\AppoinmentController');
Route::resource('/agendas/collaborators','Api\CollaboratorGoalController');

Route::resource('/agendas/users','Api\UserController');

Route::resource('/agendas','Api\AgendaController');

Route::get('/agenda', function (Request $request) {
    return $request->user();
})->middleware('auth:api');



