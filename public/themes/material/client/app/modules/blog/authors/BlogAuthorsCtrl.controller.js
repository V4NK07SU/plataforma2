/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.blog.authors')
        .controller('BlogAuthorsCtrl', ['$scope', '$window', BlogAuthorsCtrl])
        .controller('BlogAuthorsIndexCtrl', [
            '$scope', '$window', 'BlogAuthorSrv',
            BlogAuthorsIndexCtrl])
        .controller('BlogAuthorsShowCtrl', ['$scope', '$window', BlogAuthorsShowCtrl])
        .controller('BlogAuthorsCreateCtrl', ['$scope', '$window', BlogAuthorsCreateCtrl])
        .controller('BlogAuthorsEditCtrl', ['$scope', '$window', BlogAuthorsEditCtrl])
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
    function BlogAuthorsIndexCtrl($scope, $window, BlogAuthorSrv) {


        $scope.authors = BlogAuthorSrv.get();

        console.log($scope.authors);

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
    function BlogAuthorsEditCtrl($scope, $window) {

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