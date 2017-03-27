(function () {
    'use strict';

    angular.module('app.core', [
        // Angular modules
         'ngAnimate'
        ,'ngAria'
        ,'ngMessages'
        ,'ngCookies'
        ,'ngTouch'
        ,'ngRoute'
        ,'ngSanitize'


        // Custom modules
        ,'app.layout'
        ,'app.i18n'
        
        // 3rd Party Modules
        ,'ngMaterial'
        ,'ui.router'
        ,'ui.bootstrap'
        ,'duScroll'
        ,'LocalStorageModule'
        ,'tmh.dynamicLocale'
        ,'restangular'
        ,'angular-loading-bar'
        ,'ngStorage'
        ,'satellizer'
        ,'mm.acl'
    ]);
})();

