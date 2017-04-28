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



//Route::resource('polls/users', 'Api\PollUserController');
Route::resource('polls/polltypes', 'Api\PollTypeController');
Route::post('polls/polltypes/{id}', 'Api\PollTypeController@update');
Route::resource('polls/pollquestiontypes', 'Api\PollQuestionTypeController');
Route::resource('polls/pollanswers', 'Api\PollAnswerController');
Route::resource('polls/polls', 'Api\PollController');
Route::resource('polls/pollitems', 'Api\PollItemsController');
Route::resource('polls/pollquestions', 'Api\PollQuestionsController');
Route::resource('polls/pollcampaings', 'Api\PollCampaingController');
Route::resource('polls/pollresponses', 'Api\PollResponseController');
Route::resource('polls/pollsubquestions', 'Api\PollSubquestionsController');
Route::resource('polls/pollsubquestionresponses', 'Api\PollSubquestionsResponsesController');
Route::resource('polls/pollquestionanswers', 'Api\PollQuestionAnswerController');
//Route::resource('polls/pollriskvariable', 'Api\PollRiskVariableController');
//Route::resource('polls/pollphenomena', 'Api\PollPhenomenaController');