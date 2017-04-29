/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.blog.authors')
        .controller('BlogAuthorsCtrl', ['$scope', '$window', BlogAuthorsCtrl])
        .controller('BlogAuthorsIndexCtrl', [
            '$scope', '$window', '$state', 'BlogAuthorSrv', 'ToastService', 'DialogService',
            BlogAuthorsIndexCtrl])
        .controller('BlogAuthorsShowCtrl', ['$scope', '$window', BlogAuthorsShowCtrl])
        .controller('BlogAuthorsCreateCtrl', ['$scope', '$window', BlogAuthorsCreateCtrl])
        .controller('BlogAuthorsEditCtrl', [
            '$scope', '$window', '$stateParams', 'BlogAuthorSrv', 'ToastService', '$state',
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
    function BlogAuthorsIndexCtrl($scope, $window, $state, BlogAuthorSrv, ToastService, DialogService) {


        var vm = this;
        vm.data = {};

        $scope.current_page = null;
        $scope.from = null;
        $scope.last_page = null
        $scope.next_page = null;
        $scope.total = null;
        $scope.per_page = null;
        $scope.last_page = null;
        $scope.next_page_url = null;
        $scope.prev_page_url = null;
        $scope.from = null;
        $scope.to = null;
        $scope.authors = [];

   
        //Index
        $scope.data = BlogAuthorSrv.get(
            function (response) {
                ToastService.info('Se obtuvieron los autores!');
                angular.forEach(response.data, function(v, i) {
                    $scope.authors[i] = v;
                });
                $scope.authors = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los autores!');
            });

        //edit
        $scope.editAuthor = function (id) {
            $state.go('blog/author/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('blog/author/create');
        };

        //Paginate
        /*
        $scope.loadPage = function(url) {
            $http.get(url).success(function (res) {
                $scope.data = res;
                getData(res);
            }).error(function(res) {
                alert('error');
            });
        };
        */


        //ELIMINAR AUTHOR

       $scope.deleteAuthor = function (authorId) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Autor', 'Desea continuar?')
            .then(() => {
                BlogAuthorSrv.delete({ id: authorId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(authorId), 1);
                    console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });


        };

            

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
    function BlogAuthorsEditCtrl($scope, $window, $stateParams, BlogAuthorSrv, ToastService, $state) {
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
                    $state.go('blog/author');

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