(function() {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', [
            '$http', '$scope', '$rootScope', '$state', '$document', 
            'AuthSrv', 'appConfig', 
            AppCtrl]); // overall control

    function AppCtrl($http, $scope, $rootScope, $state, $document, AuthSrv, appConfig) {
        var users = {};
        
        $rootScope.auth = {};
        $rootScope.auth.isAuthenticated = AuthSrv.isAuthenticated();

        $rootScope.auth.can = function(permissions) {
            return AuthSrv.can(permissions);
        };

        $rootScope.auth.isRole = function(roles) {
            return AuthSrv.isRole(roles);
        };        

        $rootScope.auth.logout = function() {
            AuthSrv.logout();
        };

        $rootScope.auth.getAttribute = function(attribute) {
            AuthSrv.getAttribute(attribute);
        };

        $rootScope.auth.fullname = AuthSrv.getAttribute('fullname');

        $rootScope.auth.avatar = AuthSrv.getAttribute('avatar');

        $scope.pageTransitionOpts = appConfig.pageTransitionOpts;
        $scope.main = appConfig.main;
        $scope.color = appConfig.color;

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