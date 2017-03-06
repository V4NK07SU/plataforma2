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

Route::get('/polls', function (Request $request) {
    // return $request->polls();
})->middleware('auth:api');

Route::resource('/polltype', 'Api\PollTypeController');
Route::resource('/pollquestiontype', 'Api\PollQuestionTypeController');
Route::resource('/pollanswerr', 'Api\PollAnswerController');
Route::resource('/poll', 'Api\PollController');
Route::resource('/pollitem', 'Api\PollItemsController');
Route::resource('/pollquestion', 'Api\PollQuestionsController');
Route::resource('/pollcampaing', 'Api\PollCampaingController');
Route::resource('/pollresponses', 'Api\PollResponseController');
Route::resource('/pollsubquestions', 'Api\PollSubquestionsController');
Route::resource('/pollsubquestionresponses', 'Api\PollSubquestionsResponsesController');
Route::resource('/pollquestionanswers', 'Api\PollQuestionAnswerController');
