(function() {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', ['$http', '$scope', '$rootScope', '$state', '$document', 'appConfig', 'UserService', AppCtrl]) // overall control

    function AppCtrl($http, $scope, $rootScope, $state, $document, appConfig, UserService) {
        var users = {};
        $scope.pageTransitionOpts = appConfig.pageTransitionOpts;
        $scope.main = appConfig.main;
        $scope.color = appConfig.color;

        users = UserService.get();

        //console.log(users);
        /*
        $http({
            url: SITE_URL + '/api/users/all',
            method: 'GET'
        }).then(function successCallback(response) {
            console.log("Response data : " + response);
        }).then(function errorCallback(response) {
            console.log("Error data : " + response);
        });
        */

        $scope.includeUrl = function(url) {
            return THEME_URL + url;
        };

        $scope.$watch('main', function(newVal, oldVal) {
            // if (newVal.menu !== oldVal.menu || newVal.layout !== oldVal.layout) {
            //     $rootScope.$broadcast('layout:changed');
            // }

            if (newVal.menu === 'horizontal' && oldVal.menu === 'vertical') {
                $rootScope.$broadcast('nav:reset');
            }
            if (newVal.fixedHeader === false && newVal.fixedSidebar === true) {
                if (oldVal.fixedHeader === false && oldVal.fixedSidebar === false) {
                    $scope.main.fixedHeader = true;
                    $scope.main.fixedSidebar = true;
                }
                if (oldVal.fixedHeader === true && oldVal.fixedSidebar === true) {
                    $scope.main.fixedHeader = false;
                    $scope.main.fixedSidebar = false;
                }
            }
            if (newVal.fixedSidebar === true) {
                $scope.main.fixedHeader = true;
            }
            if (newVal.fixedHeader === false) {
                $scope.main.fixedSidebar = false;
            }
        }, true);


        $rootScope.$on("$stateChangeSuccess", function(event, currentRoute, previousRoute) {
            $document.scrollTo(0, 0);
        });
    }

})();