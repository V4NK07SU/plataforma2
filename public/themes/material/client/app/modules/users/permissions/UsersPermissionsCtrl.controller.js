(function() {
    'use strict';

    angular.module('app.modules.users.permissions')
        .controller('UsersPermissionsCtrl', [
            '$scope', '$window', 
            UsersPermissionsCtrl])
        .controller('UsersPermissionsIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'usersPermissions', 'UsersPermissionSrv', 'ToastService', 'DialogService',
            UsersPermissionsIndexCtrl])
        .controller('UsersPermissionsShowCtrl', [
            '$scope', '$window', 
            UsersPermissionsShowCtrl])
        .controller('UsersPermissionsCreateCtrl', [
            '$scope', '$window', 
            'UsersPermissionSrv',
            UsersPermissionsCreateCtrl])
        .controller('UsersPermissionsEditCtrl', [
            '$scope', '$window', '$state', '$stateParams', 
            'usersPermission', 'ToastService',
            UsersPermissionsEditCtrl])
        .controller('UsersPermissionsFormCtrl', [
            '$scope', '$window', '$state', '$timeout',
            'UsersPermissionSrv', 'ToastService',
            UsersPermissionsFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsIndexCtrl(  $scope, $window, $state, $http, 
                                    usersPermissions, UsersPermissionSrv, 
                                    ToastService, DialogService) {
        console.log('UsersPermissionsIndexCtrl');

        $scope.data = usersPermissions;
        $scope.keyword = '';

        $scope.deletePermission = function (permission) {
            DialogService.confirm('Eliminar Permiso', 'Confirma realizar esta acción?')
                .then(function() {
                    UsersPermissionSrv.delete(
                    {id: permission.id},
                    function(response) {
                        var deleted = $scope.data.data.indexOf(permission);
                        console.log(deleted);
                        $scope.data.data.splice(deleted, 1);
                        ToastService.success(response.data.message);
                    }, function(error) {
                        ToastService.error(error.message);
                    });
                }, function() {
                    console.log('Cancelado!')
                });
        };

        $scope.createPermission = function() {
            $state.go('users/permission/create');
        }

        $scope.editPermission = function (id) {
            $state.go('users/permission/edit', {id: id});
        };

        $scope.loadData = function(url) {

            $http.get(url)
                .success(function(response) {
                    $scope.data = response;
                })
                .error(function(error) {
                    console.log(error);
                });
        };

        $scope.searchPermission = function(keyword) {
            $scope.loadData(SITE_URL + '/api/users/permissions/search/' + keyword);
        }
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsShowCtrl($scope, $window, UsersPermissionSrv) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsCreateCtrl($scope, $window) {
        $scope.author = {};
        $scope.formUrl = THEME_URL + '/app/modules/users/permissions/views/form.html';
        $scope.buttonText = 'Crear Permiso';
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsEditCtrl($scope, $window, $state, $stateParams, usersPermission, ToastService) {        
        $scope.formUrl = THEME_URL + '/app/modules/users/permissions/views/form.html';
        $scope.buttonText = 'Actualizar Permiso';
        $scope.permission = usersPermission;        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UsersPermissionsFormCtrl($scope, $window, $state, $timeout, UsersPermissionSrv, ToastService) {
        $scope.save = function() {
            UsersPermissionSrv.save($scope.permission,
                function(response) {                    
                    ToastService.success(response.data.message);
                    $state.go('users/permission');
                },
                function(response) {
                    var counter = 0;
                    angular.forEach(response.data, function(v, i) {
                        angular.element('#permission-' + i + '-container').addClass('md-input-invalid');
                        angular.element('[name="' + i + '"]').focus();
                        if(counter > 0) {
                            $timeout(function(){
                                ToastService.error(v[0]);
                            }, 6000);
                        } else {
                            ToastService.error(v[0]);
                        }                        
                        counter++;
                    });
                });
        };

        $scope.cancel = function() {
            $state.go('users/permission');
        };
    }

})();