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


Route::get('polls/polls/all', 'Api\PollController@getAll');
Route::resource('polls/polls', 'Api\PollController');
Route::post('polls/polls/{id}', 'Api\PollController@update');
Route::get('polls/polls/search/{keyword}', 'Api\PollController@search');

Route::get('polls/polltypes/all', 'Api\PollTypeController@getAll');
Route::resource('polls/polltypes', 'Api\PollTypeController');
Route::post('polls/polltypes/{id}', 'Api\PollTypeController@update');
Route::get('polls/polltypes/search/{keyword}', 'Api\PollTypeController@search');


Route::get('polls/pollquestiontypes/all', 'Api\PollQuestionTypeController@getAll');
Route::resource('polls/pollquestiontypes', 'Api\PollQuestionTypeController');
Route::post('polls/pollquestiontypes/{id}', 'Api\PollQuestionTypeController@update');
Route::get('polls/pollquestiontypes/search/{keyword}', 'Api\PollQuestionTypeController@search');

Route::resource('polls/pollanswers', 'Api\PollAnswerController');
Route::post('polls/pollanswers/{id}', 'Api\PollAnswerController@update');
Route::get('polls/pollanswers/search/{keyword}', 'Api\PollAnswerController@search');


Route::resource('polls/pollsubquestionanswer', 'Api\PollSubquestionAnswerController');
Route::post('polls/pollsubquestionanswer/{id}', 'Api\PollSubquestionAnswerController@update');
Route::get('polls/pollsubquestionanswer/search/{keyword}', 'Api\PollSubquestionAnswerController@search');



Route::post('polls/pollitems/saveall', 'Api\PollItemsController@saveAll');
Route::get('polls/pollitems/all', 'Api\PollItemsController@getAll');
Route::resource('polls/pollitems', 'Api\PollItemsController');
Route::post('polls/pollitems/{id}', 'Api\PollItemsController@update');
Route::get('polls/pollitems/search/{keyword}', 'Api\PollItemsController@search');

Route::get('polls/pollquestions/all', 'Api\PollQuestionsController@getAll');
Route::resource('polls/pollquestions', 'Api\PollQuestionsController');
Route::post('polls/pollquestions/{id}', 'Api\PollQuestionsController@update');
Route::get('polls/pollquestions/search/{keyword}', 'Api\PollQuestionsController@search');

Route::post('polls/pollcampaings/saveall', 'Api\PollCampaingController@saveAll');
Route::get('polls/pollcampaings/all', 'Api\PollCampaingController@getAll');
Route::resource('polls/pollcampaings', 'Api\PollCampaingController');
Route::post('polls/pollcampaings/{id}', 'Api\PollCampaingController@update');
Route::get('polls/pollcampaings/search/{keyword}', 'Api\PollCampaingController@search');

Route::resource('polls/pollsubquestions', 'Api\PollSubquestionsController');
Route::post('polls/pollsubquestions/{id}', 'Api\PollSubquestionsController@update');
Route::get('polls/pollsubquestions/search/{keyword}', 'Api\PollSubquestionsController@search');

Route::resource('polls/pollresponses', 'Api\PollResponseController');

Route::resource('polls/pollsubquestionresponses', 'Api\PollSubquestionsResponsesController');
Route::resource('polls/pollquestionanswers', 'Api\PollQuestionAnswerController');