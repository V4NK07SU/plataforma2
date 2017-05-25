(function () {
    'use strict';

    angular.module('app.modules.users.users', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ])
    .run(appRun);

    appRun.$inject = ['RouteHelperPvd'];
    /* @ngInject */
    function appRun(RouteHelperPvd) {
        RouteHelperPvd.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'users/user',
                config: {
                    url: '/users/user',
                    templateUrl: THEME_URL + 'app/modules/users/users/views/index.html',
                    controller: 'UsersUsersIndexCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Users',
                    resolve: {
                        UsersUserSrv: 'UsersUserSrv',
                        ToastService: 'ToastService',
                        usersUsers: function(UsersUserSrv, ToastService) {
                            return UsersUserSrv.get().$promise.then(
                                function(response) {                                    
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        },     
                        AuthSrv: 'AuthSrv',            
                        auth: function($state, AuthSrv, ToastService) {
                            //if( !AuthSrv.can('list.users.Users') ) {
                            //    ToastService.error('No tiene permiso para ingresar!');
                            //    $state.go('dashboard');
                            //}                            
                        }
                    }                    
                }
            },
            {
                state: 'users/user/create',
                config: {
                    url: '/users/user/create',
                    templateUrl: THEME_URL + 'app/modules/users/users/views/create.html',
                    controller: 'UsersUsersCreateCtrl',
                    controllerAs: 'vm',
                    title: 'Users - Crear Rol',
                    resolve: {
                        UsersPermissionSrv: 'UsersPermissionSrv',
                        ToastService: 'ToastService',
                        permissions: function(UsersPermissionSrv, ToastService, $stateParams) {
                            return UsersPermissionSrv.get({id: $stateParams.id}).$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        },     
                        AuthSrv: 'AuthSrv',           
                        auth: function($state, AuthSrv, ToastService) {
                            //if( !AuthSrv.can('list.users.Users') ) {
                            //    ToastService.error('No tiene permiso para ingresar!');
                            //    $state.go('dashboard');
                            //}                            
                        }

                    }
                }
            },
            {
                state: 'users/user/edit',
                config: {
                    url: '/users/user/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/users/users/views/edit.html',
                    controller: 'UsersUsersEditCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Editar Rol',
                    resolve: {
                        UsersUserSrv: 'UsersUserSrv',
                        ToastService: 'ToastService',
                        usersUser: function(UsersUserSrv, ToastService, $stateParams) {
                            return UsersUserSrv.get({id: $stateParams.id}).$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        },     
                        AuthSrv: 'AuthSrv',           
                        auth: function($state, AuthSrv, ToastService) {
                            //if( !AuthSrv.can('list.users.Users') ) {
                            //    ToastService.error('No tiene permiso para ingresar!');
                            //    $state.go('dashboard');
                            //}                            
                        }
                    }
                }
            }
        ];
    }
})();