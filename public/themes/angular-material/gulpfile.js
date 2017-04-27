'use strict';

const elixir = require('laravel-elixir');

require('laravel-elixir-eslint');

require('./tasks/swPrecache.task.js');
require('./tasks/bower.task.js');

// setting assets paths
elixir.config.assetsPath = './public/themes/angular-material';
elixir.config.css.folder = '/app/';
elixir.config.css.sass.folder = '/app/';
elixir.config.js.folder = '/app/';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

let assets = [
        './assets/js/final.js',
        './assets/css/final.css'
    ],
    scripts = [
        'assets/js/vendor.js', 'assets/js/app.js'
    ],
    styles = [
        // for some reason, ./ prefix here works fine!
        // it is needed to override elixir.config.css.folder for styles mixin
        './assets/css/vendor.css', './assets/css/app.css'
    ],
    karmaJsDir = [
        'assets/js/vendor.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/ng-describe/dist/ng-describe.js',
        'assets/js/app.js',
        'tests/app/**/*.spec.js'
    ];

elixir(mix => {
    mix.bower()
        .copy('app/**/*.html', 'views/')
        //.copy('app/dialogs/**/*.html', 'views/dialogs/')
        .webpack('./app/index.main.js', 'assets/js/app.js')
        //.sass(['./app/**/*.scss', './app/critical.scss'], 'assets/css')
        .sass('./app/**/*.scss', 'assets/css/app.css')
        .sass('./app/critical.scss', 'assets/css/critical.css')
        .styles(styles, 'assets/css/final.css')
        //.eslint('app/**/*.js')
        .combine(scripts, 'assets/js/final.js')

        //.version(assets)
        //.copy('public/assets/**/*.js', 'assets/')
        //.copy('public/assets/**/*.css', 'assets/')
        //.copy('public/build/rev-manifest.json', 'rev-manifest.json')
        //.swPrecache()
    ;


    //enable front-end tests by adding the below task
    // .karma({jsDir: karmaJsDir});
});
