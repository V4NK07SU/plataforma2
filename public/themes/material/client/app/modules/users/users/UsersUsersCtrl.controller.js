(function() {
    'use strict';

    angular.module('app.modules.users.users')
        .controller('UsersUsersCtrl', [
            '$scope', '$window', 
            UsersUsersCtrl])
        .controller('UsersUsersIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'usersUsers', 'UsersUserSrv', 'ToastService', 'DialogService',
            UsersUsersIndexCtrl])
        .controller('UsersUsersShowCtrl', [
            '$scope', '$window', 
            UsersUsersShowCtrl])
        .controller('UsersUsersCreateCtrl', [
            '$scope', '$window', 
            'permissions','UsersUserSrv',
            UsersUsersCreateCtrl])
        .controller('UsersUsersEditCtrl', [
            '$scope', '$window', '$state', '$stateParams', 
            'usersUser', 'roles', 'ToastService',
            UsersUsersEditCtrl])
        .controller('UsersUsersFormCtrl', [
            '$scope', '$window', '$state', '$timeout',
            'UsersUserSrv', 'ToastService',
            UsersUsersFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersIndexCtrl(  $scope, $window, $state, $http, 
                                    usersUsers, UsersUserSrv, 
                                    ToastService, DialogService) {
        console.log('UsersUsersIndexCtrl');

        $scope.data = usersUsers;
        $scope.keyword = '';

        $scope.deleteUser = function (User) {
            DialogService.confirm('Eliminar Usuario', 'Confirma realizar esta acción?')
                .then(function() {
                    UsersUserSrv.delete(
                    {id: User.id},
                    function(response) {
                        var deleted = $scope.data.data.indexOf(User);
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

        $scope.createUser = function() {
            $state.go('users/user/create');
        }

        $scope.editUser = function (id) {
            $state.go('users/user/edit', {id: id});
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

        $scope.searchUser = function(keyword) {
            $scope.loadData(SITE_URL + '/api/users/users/search/' + keyword);
        }
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersShowCtrl($scope, $window, UsersUserSrv) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersCreateCtrl($scope, $window, permissions, UsersUserSrv) {
        $scope.User = {
            permissions: []
        };
        $scope.formUrl = THEME_URL + '/app/modules/users/users/views/form.html';
        $scope.buttonText = 'Crear Rol';
        $scope.permissions = permissions.data;  

        $scope.exists = function (permission) {
            var ret =false;
            angular.forEach($scope.User.permissions, function(v, i) { 
                           
                if(v.id === permission.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        $scope.toggle = function (permission) {
            var idx = -1;            
            angular.forEach($scope.User.permissions, function(v, i) {                
                if(v.id === permission.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.User.permissions.splice(idx, 1);
            } else {
                $scope.User.permissions.push(permission)
            }
        };
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersEditCtrl($scope, $window, $state, $stateParams, usersUser, roles, ToastService) { 
        var vm = this;       
        $scope.formUrl = THEME_URL + '/app/modules/users/users/views/form.html';
        $scope.buttonText = 'Actualizar Usuario';        
        vm.data = usersUser;          
        $scope.user = vm.data;
        $scope.roles = roles.data;

        $scope.exists = function (role) {
            var ret =false;
            angular.forEach($scope.user.roles, function(v, i) {                
                if(v.id === role.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        $scope.toggle = function (role) {
            var idx = -1;            
            angular.forEach($scope.user.roles, function(v, i) {                
                if(v.id === role.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.user.roles.splice(idx, 1);
                console.log($scope.user.roles);
            } else {
                $scope.user.roles.push(role);
                console.log($scope.user.roles);
            }
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersUsersFormCtrl($scope, $window, $state, $timeout, UsersUserSrv, ToastService) {
        $scope.save = function() {
            UsersUserSrv.save($scope.user,
                function(response) {        
                    ToastService.success(response.data);
                    $state.go('users/user');
                },
                function(response) {
                    var counter = 0;
                    if(response.data.errors) {
                        angular.forEach(response.data.errors, function(v, i) {                            
                            if(counter > 0) {
                                $timeout(function(){
                                    ToastService.error(v[0]);
                                    angular.element('#user-' + i + '-container').addClass('md-input-invalid');
                                    angular.element('[name="' + i + '"]').focus();
                                }, 4000);
                            } else {
                                ToastService.error(v[0]);
                                angular.element('#User-' + i + '-container').addClass('md-input-invalid');
                                angular.element('[name="' + i + '"]').focus();
                            }                        
                            counter++;
                        });
                    }                                        
                });                
        };

        $scope.cancel = function() {
            $state.go('users/user');
        };
    }

})();