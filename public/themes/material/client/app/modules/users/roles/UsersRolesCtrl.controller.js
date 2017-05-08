(function() {
    'use strict';

    angular.module('app.modules.users.roles')
        .controller('UsersRolesCtrl', [
            '$scope', '$window', 
            UsersRolesCtrl])
        .controller('UsersRolesIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'usersRoles', 'UsersRoleSrv', 'ToastService', 'DialogService',
            UsersRolesIndexCtrl])
        .controller('UsersRolesShowCtrl', [
            '$scope', '$window', 
            UsersRolesShowCtrl])
        .controller('UsersRolesCreateCtrl', [
            '$scope', '$window', 
            'permissions','UsersRoleSrv',
            UsersRolesCreateCtrl])
        .controller('UsersRolesEditCtrl', [
            '$scope', '$window', '$state', '$stateParams', 
            'usersRole', 'ToastService',
            UsersRolesEditCtrl])
        .controller('UsersRolesFormCtrl', [
            '$scope', '$window', '$state', '$timeout',
            'UsersRoleSrv', 'ToastService',
            UsersRolesFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesIndexCtrl(  $scope, $window, $state, $http, 
                                    usersRoles, UsersRoleSrv, 
                                    ToastService, DialogService) {
        console.log('UsersRolesIndexCtrl');

        $scope.data = usersRoles;
        $scope.keyword = '';

        $scope.deleteRole = function (role) {
            DialogService.confirm('Eliminar Rol', 'Confirma realizar esta acción?')
                .then(function() {
                    UsersRoleSrv.delete(
                    {id: role.id},
                    function(response) {
                        var deleted = $scope.data.data.indexOf(role);
                        console.log(deleted);
                        $scope.data.data.splice(deleted, 1);
                        ToastService.success(response.data);
                    }, function(error) {
                        ToastService.error(error);
                    });
                }, function() {
                    console.log('Cancelado!')
                });
        };

        $scope.createRole = function() {
            $state.go('users/role/create');
        }

        $scope.editRole = function (id) {
            $state.go('users/role/edit', {id: id});
        };

        $scope.loadData = function(url) {

            $http.get(url)
                .success(function(response) {
                    $scope.data = response;
                })
                .error(function(error) {
                    ToastService.error(error.message);
                });
        };

        $scope.searchRole = function(keyword) {
            $scope.loadData(SITE_URL + '/api/users/roles/search/' + keyword);
        }
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesShowCtrl($scope, $window, UsersRoleSrv) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesCreateCtrl($scope, $window, permissions, UsersRoleSrv) {
        $scope.role = {
            permissions: []
        };
        $scope.formUrl = THEME_URL + '/app/modules/users/roles/views/form.html';
        $scope.buttonText = 'Crear Rol';
        $scope.permissions = permissions.data; 

        $scope.exists = function (permission) {
            var ret =false;
            angular.forEach($scope.role.permissions, function(v, i) {                
                if(v.id === permission.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        $scope.toggle = function (permission) {
            var idx = -1;            
            angular.forEach($scope.role.permissions, function(v, i) {                
                if(v.id === permission.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.role.permissions.splice(idx, 1);
            } else {
                $scope.role.permissions.push(permission)
            }
        };
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesEditCtrl($scope, $window, $state, $stateParams, usersRole, ToastService) { 
        var vm = this;       
        $scope.formUrl = THEME_URL + '/app/modules/users/roles/views/form.html';
        $scope.buttonText = 'Actualizar Rol';        
        vm.data = usersRole;          
        $scope.role = vm.data.role;
        $scope.permissions = vm.data.permissions;

        $scope.exists = function (permission) {
            var ret =false;
            angular.forEach($scope.role.permissions, function(v, i) {                
                if(v.id === permission.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        $scope.toggle = function (permission) {
            var idx = -1;            
            angular.forEach($scope.role.permissions, function(v, i) {                
                if(v.id === permission.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.role.permissions.splice(idx, 1);
                console.log($scope.role.permissions);
            } else {
                $scope.role.permissions.push(permission);
                console.log($scope.role.permissions);
            }
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersRolesFormCtrl($scope, $window, $state, $timeout, UsersRoleSrv, ToastService) {
        $scope.save = function() {
            UsersRoleSrv.save($scope.role,
                function(response) {        
                    ToastService.success(response.data);
                    $state.go('users/role');
                },
                function(response) {
                    var counter = 0;
                    if(response.data.errors) {
                        angular.forEach(response.data.errors, function(v, i) {                            
                            if(counter > 0) {
                                $timeout(function(){
                                    ToastService.error(v[0]);
                                    angular.element('#role-' + i + '-container').addClass('md-input-invalid');
                                    angular.element('[name="' + i + '"]').focus();
                                }, 4000);
                            } else {
                                ToastService.error(v[0]);
                                angular.element('#role-' + i + '-container').addClass('md-input-invalid');
                                angular.element('[name="' + i + '"]').focus();
                            }                        
                            counter++;
                        });
                    }                                        
                });                
        };

        $scope.cancel = function() {
            $state.go('users/role');
        };
    }

})();