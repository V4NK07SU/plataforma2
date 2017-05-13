(function () {
    'use strict';
    angular.module('app.modules.health-record.user-history', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('health-record/user-history', {
                    url: '/health-record/user-history',
                    templateUrl: THEME_URL + 'app/modules/health-record/user-history/views/index.html',
                    resolve: {
                        HealthUserHistorySrv: 'HealthUserHistorySrv',
                        types: function(HealthTypeSrv) {
                            return HealthTypeSrv.get({id: 'all'}).$promise;
                        },
                        dimensions: function(HealthDimensionSrv) {
                            return HealthDimensionSrv.get({id: 'all'}).$promise;
                        },
                         users: function(UsersSrv) {
                            return UsersSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'HealthUserHistoryIndexCtrl'
                });

                $stateProvider.state('health-record/user-history/edit', {
                    url: '/health-record/user-history/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/health-record/user-history/views/index.html',
                    resolve: {
                        
                    },
                    controller: 'HealthUserHistoryEditCtrl'
                });

                $stateProvider.state('health-record/user-history/create', {
                    url: '/health-record/user-history/create',
                    templateUrl: THEME_URL + 'app/modules/health-record/user-history/views/index.html',
                    resolve: {
                        
                    },
                    controller: 'HealthUserHistoryCreateCtrl'
                });
            }]);
})();