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

Route::get('/evaluation', function (Request $request) {
    // return $request->evaluation();
})->middleware('auth:api');
Route::post('/evaluations/dependencies/{id}', 'Api\EvaluationDependencyController@update');

Route::resource('/evaluations/functions', 'Api\EvaluationFunctionController');
Route::resource('/evaluations/levels', 'Api\EvaluationLevelController');
Route::resource('/evaluations/positions', 'Api\EvaluationPositionController');
Route::resource('/evaluations/dependencies', 'Api\EvaluationDependencyController');
Route::resource('/evaluations/global', 'Api\EvaluationGlobalController');
Route::resource('/evaluations/competencies', 'Api\EvaluationCompetenciesController');
Route::resource('/evaluations/roles', 'Api\EvaluationRollController');
Route::resource('/evaluations/competency/answers', 'Api\EvaluationCompetencyAnswerController');
Route::resource('/evaluations/user/position', 'Api\EvaluationUserPositionController');
Route::resource('/evaluations/schedule', 'Api\EvaluationScheduleController');

Route::resource('/evaluations/commitments', 'Api\EvaluationCommitmentController');

Route::resource('/evaluations/competency/responses', 'Api\EvaluationCompetencyResponseController');

Route::resource('/evaluations/commitment/responses', 'Api\EvaluationCommitmentResponseController');
