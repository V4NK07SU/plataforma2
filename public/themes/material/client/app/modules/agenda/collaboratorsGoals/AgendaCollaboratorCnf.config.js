(function () {
    'use strict';
    angular.module('app.modules.agenda.collaborator', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('agenda/collaborator', {
                    url: '/agenda/collaborator',
                    templateUrl: THEME_URL + 'app/modules/agenda/collaboratorsGoals/views/index.html',
                    resolve: {
                        AgendaCollaboratorSrv: 'AgendaCollaboratorSrv',
                        collaborator: function (AgendaCollaboratorSrv) {
                            return AgendaCollaboratorSrv.get().$promise;
                        }
                    },
                    controller: 'AgendaCollaboratorIndexCtrl'
                });

                //EDIT
                $stateProvider.state('agenda/collaborator/edit', {
                    url: '/agenda/collaborator/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/agenda/collaboratorsGoals/views/edit.html',
                    resolve: {
                        AgendaCollaboratorSrv: 'AgendaCollaboratorSrv',

                        collaborator: function (AgendaCollaboratorSrv, $stateParams) {
                            return AgendaCollaboratorSrv.get({id: $stateParams.id}).$promise;
                        },

                           services: function(AgendaServiceSrv){
                            return AgendaServiceSrv.get({id: 'all'}).$promise;
                        },
                         periods: function(AgendaPeriodSrv){
                            return AgendaPeriodSrv.get({id: 'all'}).$promise;
                        }
                        
                    },
                    controller: 'AgendaCollaboratorEditCtrl'
                });
                
                //CREATE
                $stateProvider.state('agenda/collaborator/create', {
                    url: '/agenda/collaborator/create',
                    templateUrl: THEME_URL + 'app/modules/agenda/collaboratorsGoals/views/create.html',
                    resolve: {
                     
                        services: function(AgendaServiceSrv){
                            return AgendaServiceSrv.get({id: 'all'}).$promise;
                        },
                         periods: function(AgendaPeriodSrv){
                            return AgendaPeriodSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'AgendaCollaboratorCreateCtrl'
                });
            }]);
})();