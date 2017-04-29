/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.blog.users')
        .controller('BlogUsersCtrl', ['$scope', '$window', BlogUsersCtrl])

        .controller('BlogUsersIndexCtrl', [
            '$scope', '$window', '$state', 'BlogUserSrv',
            BlogUsersIndexCtrl])

        .controller('BlogUsersShowCtrl', ['$scope', '$window', BlogUsersShowCtrl])
        .controller('BlogUsersCreateCtrl', ['$scope', '$window', BlogUsersCreateCtrl])
        .controller('BlogUsersEditCtrl', [
            '$scope', '$window', '$stateParams', 'BlogUserSrv', 'ToastService',
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
    function BlogUsersIndexCtrl($scope, $window, $state, BlogUserSrv) {

       // $scope.users
        $scope.users = BlogUserSrv.get();

        console.log($scope.users)
  
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
    function BlogUsersEditCtrl($scope, $window, $stateParams, BlogUserSrv, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/blog/users/views/form.html';
        //console.log($stateParams.id);
        $scope.user = BlogUserSrv.get({id: $stateParams.id},
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

            BlogUserSrv.save($scope.user,
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