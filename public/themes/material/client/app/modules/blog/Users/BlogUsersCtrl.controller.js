/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.blog.users')
        .controller('BlogUsersCtrl', ['$scope', '$window', BlogUsersCtrl])

        .controller('BlogUsersIndexCtrl', [
            '$scope', '$window', '$state', 'BlogUsersrv','ToastService',
            BlogUsersIndexCtrl])

        .controller('BlogUsersShowCtrl', ['$scope', '$window', BlogUsersShowCtrl])
        .controller('BlogUsersCreateCtrl', ['$scope', '$window', BlogUsersCreateCtrl])
        .controller('BlogUsersEditCtrl', [
            '$scope', '$window', '$stateParams', 'BlogUsersrv', 'ToastService',
            BlogUsersEditCtrl])

        .controller('BlogUsersFormCtrl', ['$scope', '$window', BlogUsersFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersIndexCtrl($scope, $window, $state, BlogUsersSrv,ToastService) {
            $scope.users = [];
       // $scope.users
        $scope.data = BlogUsersSrv.get(
            function (response) {
                ToastService.info('Se obtubieron los Servicios!');
                angular.forEach(response.data, function(v, i) {
                    $scope.users[i] = v;
                });
                $scope.users = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Servicios!');
            });

       // $scope.users = BlogUsersrv.get();

        //console.log($scope.users)
  
        $scope.deleteuser = function (id) {
            alert('Eliminar ' + id);
        }

        $scope.edituser = function (id) {
            $state.go('blog/users/edit', {id: id});
        }

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersEditCtrl($scope, $window, $stateParams, BlogUsersSrv, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/blog/users/views/form.html';
        //console.log($stateParams.id);
        $scope.user = BlogUsersrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.user);
        /*
        $scope.user = {
            display_name: '',
            first_name: '',
            last_name: ''
        };
        */

        $scope.save = function() {
            console.log($scope.user);

            BlogUsersrv.save($scope.user,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogUsersFormCtrl($scope, $window) {

    }

})();