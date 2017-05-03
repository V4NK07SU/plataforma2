(function () {
    'use strict';

    angular.module('app.modules.users.roles', [
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
                state: 'users/role',
                config: {
                    url: '/users/role',
                    templateUrl: THEME_URL + 'app/modules/users/roles/views/index.html',
                    controller: 'UsersRolesIndexCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Roles',
                    resolve: {
                        UsersRoleSrv: 'UsersRoleSrv',
                        ToastService: 'ToastService',
                        usersRoles: function(UsersRoleSrv, ToastService) {
                            return UsersRoleSrv.get().$promise.then(
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
                            //if( !AuthSrv.can('list.users.roles') ) {
                            //    ToastService.error('No tiene permiso para ingresar!');
                            //    $state.go('dashboard');
                            //}                            
                        }
                    }                    
                }
            },
            {
                state: 'users/role/create',
                config: {
                    url: '/users/role/create',
                    templateUrl: THEME_URL + 'app/modules/users/roles/views/create.html',
                    controller: 'UsersRolesCreateCtrl',
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
                            //if( !AuthSrv.can('list.users.roles') ) {
                            //    ToastService.error('No tiene permiso para ingresar!');
                            //    $state.go('dashboard');
                            //}                            
                        }

                    }
                }
            },
            {
                state: 'users/role/edit',
                config: {
                    url: '/users/role/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/users/roles/views/edit.html',
                    controller: 'UsersRolesEditCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Editar Rol',
                    resolve: {
                        UsersRoleSrv: 'UsersRoleSrv',
                        ToastService: 'ToastService',
                        usersRole: function(UsersRoleSrv, ToastService, $stateParams) {
                            return UsersRoleSrv.get({id: $stateParams.id}).$promise.then(
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
                            //if( !AuthSrv.can('list.users.roles') ) {
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