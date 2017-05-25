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
            'usersUser', 'ToastService',
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
    function UsersUsersEditCtrl($scope, $window, $state, $stateParams, usersUser, ToastService) { 
        var vm = this;       
        $scope.formUrl = THEME_URL + '/app/modules/users/users/views/form.html';
        $scope.buttonText = 'Actualizar Rol';        
        vm.data = usersUser;          
        $scope.User = vm.data.User;
        $scope.permissions = vm.data.permissions;

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
                console.log($scope.User.permissions);
            } else {
                $scope.User.permissions.push(permission);
                console.log($scope.User.permissions);
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
            UsersUserSrv.save($scope.User,
                function(response) {        
                    ToastService.success(response.data);
                    $state.go('users/User');
                },
                function(response) {
                    var counter = 0;
                    if(response.data.errors) {
                        angular.forEach(response.data.errors, function(v, i) {                            
                            if(counter > 0) {
                                $timeout(function(){
                                    ToastService.error(v[0]);
                                    angular.element('#User-' + i + '-container').addClass('md-input-invalid');
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