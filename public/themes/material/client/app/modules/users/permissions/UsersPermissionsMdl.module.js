(function () {
    'use strict';

    angular.module('app.modules.users.permissions', [
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
                state: 'users/permission',
                config: {
                    url: '/users/permission',
                    templateUrl: THEME_URL + 'app/modules/users/permissions/views/index.html',
                    controller: 'UsersPermissionsIndexCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Permisos',
                    resolve: {
                        UsersPermissionSrv: 'UsersPermissionSrv',
                        ToastService: 'ToastService',
                        usersPermissions: function(UsersPermissionSrv, ToastService) {
                            return UsersPermissionSrv.get().$promise.then(
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
                          /*  if( !AuthSrv.can('list.users.permissions') ) {
                                ToastService.error('No tiene permiso para ingresar!');
                                $state.go('dashboard');
                                
                            }   
                            */                         
                        }
                    }                    
                }
            },
            {
                state: 'users/permission/create',
                config: {
                    url: '/users/permission/create',
                    templateUrl: THEME_URL + 'app/modules/users/permissions/views/create.html',
                    controller: 'UsersPermissionsCreateCtrl',
                    controllerAs: 'vm',
                    title: 'Users - Crear Permiso',
                    resolve: {

                    }
                }
            },
            {
                state: 'users/permission/edit',
                config: {
                    url: '/users/permission/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/users/permissions/views/edit.html',
                    controller: 'UsersPermissionsEditCtrl',
                    controllerAs: 'vm',
                    title: 'Usuarios - Editar Permiso',
                    resolve: {
                        UsersPermissionSrv: 'UsersPermissionSrv',
                        ToastService: 'ToastService',
                        usersPermission: function(UsersPermissionSrv, ToastService, $stateParams) {
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
                            //if( !AuthSrv.can('list.users.permissions') ) {
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
