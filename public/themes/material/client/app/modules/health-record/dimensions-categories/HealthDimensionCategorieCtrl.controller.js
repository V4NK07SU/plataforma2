/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.dimensions-categories')
        .controller('HealthDimensionCategorieCtrl', ['$scope', '$window',
         HealthDimensionCategorieCtrl])
        .controller('HealthDimensionCategorieIndexCtrl', ['$scope', '$window', '$state', 'ToastService', 'DialogService','$http',
        'HealthDimensionCategorieSrv',
            HealthDimensionCategorieIndexCtrl])
        .controller('HealthDimensionCategorieShowCtrl', ['$scope', '$window',
         HealthDimensionCategorieShowCtrl])
        .controller('HealthDimensionCategorieCreateCtrl', ['$scope',
         HealthDimensionCategorieCreateCtrl])
        .controller('HealthDimensionCategorieEditCtrl', ['$scope',
        'dimensions_categories',
            HealthDimensionCategorieEditCtrl])
        .controller('HealthDimensionCategorieFormCtrl', ['$scope', '$window', '$state', 'ToastService',
        'HealthDimensionCategorieSrv', 
        HealthDimensionCategorieFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCategorieCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCategorieIndexCtrl($scope, $window, $state, ToastService, DialogService, $http,HealthDimensionCategorieSrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = HealthDimensionCategorieSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron las categorias!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los categorias!');
            });

        //edit
        $scope.editDimensionCategories = function (id) {
            $state.go('health-record/dimensions-categories/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/dimensions-categories/create');
        };

        //Paginate
        
        $scope.loadPage = function(url) {
            $http.get(url).success(function (res) {                
                $scope.data = res;
            }).error(function(res) {
                alert('error');
            });
        };

         $scope.search = function (keyword) {
             if (keyword == null || keyword ==""){
                 $scope.data= HealthDimensionCategorieSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/dimension/categories/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteDimensionCategories = function (dimension_categorie) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Categoria', 'Desea continuar?')
            .then(() => {
                HealthDimensionCategorieSrv.delete({ id: dimension_categorie.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(dimension_categorie), 1);
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
    function HealthDimensionCategorieShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCategorieCreateCtrl($scope) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/dimensions-categories/views/form.html';

        
    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCategorieEditCtrl($scope,  dimensions_categories) {

        $scope.formUrl = THEME_URL + '/app/modules/health-record/dimensions-categories/views/form.html';
        //console.log($stateParams.id);
        $scope.dimensions_categories = dimensions_categories;
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCategorieFormCtrl($scope, $window, $state, ToastService,HealthDimensionCategorieSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/dimensions-categories/views/form.html';
      

         $scope.save = function() {  
           
            HealthDimensionCategorieSrv.save($scope.dimensions_categories,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/dimensions-categories');

                }, 
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
         }

        //cancel

           $scope.cancel = function (id) {
            $state.go('health-record/dimensions-categories');
        };

    }

})();