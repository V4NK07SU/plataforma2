/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.blog.authors')
        .controller('BlogAuthorsCtrl', ['$scope', '$window', BlogAuthorsCtrl])
        .controller('BlogAuthorsIndexCtrl', [
            '$scope', '$window', '$state', 'BlogAuthorSrv',
            BlogAuthorsIndexCtrl])
        .controller('BlogAuthorsShowCtrl', ['$scope', '$window', BlogAuthorsShowCtrl])
        .controller('BlogAuthorsCreateCtrl', ['$scope', '$window', BlogAuthorsCreateCtrl])
        .controller('BlogAuthorsEditCtrl', [
            '$scope', '$window', '$stateParams', 'BlogAuthorSrv', 'ToastService',
            BlogAuthorsEditCtrl])
        .controller('BlogAuthorsFormCtrl', ['$scope', '$window', BlogAuthorsFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogAuthorsCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogAuthorsIndexCtrl($scope, $window, $state, BlogAuthorSrv) {


        $scope.authors = BlogAuthorSrv.get();

        console.log($scope.authors)

        $scope.deleteAuthor = function (id) {
            alert('Eliminar ' + id);
        }

        $scope.editAuthor = function (id) {
            $state.go('blog/author/edit', {id: id});
        }

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogAuthorsShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogAuthorsCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function BlogAuthorsEditCtrl($scope, $window, $stateParams, BlogAuthorSrv, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/blog/authors/views/form.html';
        //console.log($stateParams.id);
        $scope.author = BlogAuthorSrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.author);
        /*
        $scope.author = {
            display_name: '',
            first_name: '',
            last_name: ''
        };
        */

        $scope.save = function() {
            console.log($scope.author);

            BlogAuthorSrv.save($scope.author,
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
    function BlogAuthorsFormCtrl($scope, $window) {

    }

})();