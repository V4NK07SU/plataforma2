(function () {
    'use strict';
    angular.module('app.modules.agenda.diary', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);
                //INDEX
                $stateProvider.state('agenda/diary', {
                    url: '/agenda/diary',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/index.html',
                    resolve: {
                        AgendaDiarySrv: 'AgendaDiarySrv',
                        diary: function (AgendaDiarySrv) {
                            return AgendaDiarySrv.get().$promise;
                        }
                    },
                    controller: 'AgendaDiaryIndexCtrl'
                });
                //EDIT
                $stateProvider.state('agenda/diary/edit', {
                    url: '/agenda/diary/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/edit.html',
                    resolve: {
                        AgendaDiarySrv: 'AgendaDiarySrv',
                        AgendaPeriodSrv: 'AgendaPeriodSrv',
                         diary: function (AgendaDiarySrv, ToastService, $stateParams) {
                            return AgendaDiarySrv.get({id: $stateParams.id}).$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        },
                        periods: function(AgendaPeriodSrv){
                            return AgendaPeriodSrv.get({id: 'all'}).$promise
                        }
                    },
                    controller: 'AgendaDiaryEditCtrl'
                });
                //CREATE
                $stateProvider.state('agenda/diary/create', {
                    url: '/agenda/diary/create',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/create.html',
                    resolve: {
                        AgendaPeriodSrv: 'AgendaPeriodSrv',
                        AgendaScheDuleSrv:'AgendaScheDuleSrv',
                        periods: function(AgendaPeriodSrv){
                            return AgendaPeriodSrv.get({id: 'all'}).$promise
                        },
                        schedules: function(AgendaScheDuleSrv){
                            return AgendaScheDuleSrv.get({id:'all'}).$promise
                        }
                    },
                    controller: 'AgendaDiaryCreateCtrl'
                });

                
            }]);
})();