(function() {
    'use strict';

    angular.module('app.core', [
        // Angular modules
        'ngAnimate',
        'ngAria',
        'ngMessages',

        // Custom modules
        'app.services',
        'app.layout',
        'app.i18n',

        // 3rd Party Modules
        'ngMaterial',
        'ui.router',
        'ui.bootstrap',
        'duScroll',
        'restangular',
        'ngResource',
        'ngStorage',
        'satellizer',
        'mm.acl',
        'angularMoment'
    ]);

})();