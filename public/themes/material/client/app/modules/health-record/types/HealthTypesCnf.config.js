(function () {
    'use strict';
    angular.module('app.modules.health-record.types', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('health-record/types', {
                    url: '/health-record/types',
                    templateUrl: THEME_URL + 'app/modules/health-record/types/views/index.html',
                    controller: 'HealthTypesIndexCtrl',
                    resolve: {
                        HealthTypeSrv: 'HealthTypeSrv',
                        healthService: function (HealthTypeSrv) {
                            return HealthTypeSrv.get().$promise;
                        }
                    }                    
                });

                $stateProvider.state('health-record/types/edit', {
                    url: '/health-record/types/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/health-record/types/views/edit.html',
                    resolve: {
                        HealthTypeSrv: 'HealthTypeSrv',
                         types: function (HealthTypeSrv, ToastService, $stateParams) {
                            return HealthTypeSrv.get({id: $stateParams.id}).$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        }
                    },
                    controller: 'HealthTypesEditCtrl'
                });

                $stateProvider.state('health-record/types/create', {
                    url: '/health-record/types/create',
                    templateUrl: THEME_URL + 'app/modules/health-record/types/views/create.html',
                    resolve: {
                        HealthDimensionSrv : 'HealthDimensionSrv',
                        dimensions: function(HealthDimensionSrv) {
                            return HealthDimensionSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'HealthTypesCreateCtrl'
                });
            }]);
})();