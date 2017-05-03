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
                        CollaboratorSrv: 'CollaboratorSrv',
                        collaborator: function (CollaboratorSrv) {
                            return CollaboratorSrv.get().$promise;
                        }
                    },
                    controller: 'CollaboratorIndexCtrl'
                });

                $stateProvider.state('agenda/collaborator/edit', {
                    url: '/agenda/collaborator/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/agenda/collaboratorsGoals/views/edit.html',
                    resolve: {
                        CollaboratorSrv: 'CollaboratorSrv',
                        collaborator: function (CollaboratorSrv, $stateParams) {
                            return CollaboratorSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'CollaboratorEditCtrl'
                });

                $stateProvider.state('agenda/collaborator/create', {
                    url: '/agenda/collaborator/create',
                    templateUrl: THEME_URL + 'app/modules/agenda/collaboratorsGoals/views/create.html',
                    resolve: {

                    },
                    controller: 'CollaboratorCreateCtrl'
                });
            }]);
})();