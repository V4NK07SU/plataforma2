<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    \View::addExtension('html', 'php');
    return \Theme::view('index');
});

Route::get('/views/{name}', function ($name) {
    \Debugbar::disable();
    \View::addExtension('html', 'php');
    return \Theme::view($name);
});
/*
Route::any('{path?}', function () {
    \View::addExtension('html', 'php');
    return \Theme::view('index');
})->where("path", ".+");
*/