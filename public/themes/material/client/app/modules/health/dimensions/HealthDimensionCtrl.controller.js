/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health.dimensions')
        .controller('HealthDimensionCtrl', ['$scope', '$window', HealthDimensionCtrl])
        .controller('HealthDimensionIndexCtrl', ['$scope', '$window', '$state', 'ToastService', 'DialogService','$http',
            'HealthDimensionSrv',
            HealthDimensionIndexCtrl])
        .controller('HealthDimensionShowCtrl', ['$scope', '$window', 
        HealthDimensionShowCtrl])
        .controller('HealthDimensionCreateCtrl', ['$scope',
        'dimensions_categories',
         HealthDimensionCreateCtrl])
        .controller('HealthDimensionEditCtrl', ['$scope',
        'dimensions_categories','dimensions',
            HealthDimensionEditCtrl])
        .controller('HealthDimensionFormCtrl', ['$scope', '$window', '$state', 'ToastService',
        'HealthDimensionSrv',
        HealthDimensionFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionIndexCtrl($scope, $window, $state,  ToastService, DialogService, $http, HealthDimensionSrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = HealthDimensionSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron las dimensiones!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las dimensiones!');
            });

        //edit
        $scope.editDimension = function (id) {
            $state.go('health/dimensions/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health/dimensions/create');
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
                 $scope.data= HealthDimensionSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/dimension/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteDimension = function (dimension) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Dimension', 'Desea continuar?')
            .then(() => {
                HealthDimensionSrv.delete({ id: dimension.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(dimension), 1);
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
    function HealthDimensionShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionCreateCtrl($scope, dimensions_categories) {
        $scope.formUrl = THEME_URL + '/app/modules/health/dimensions/views/form.html';

        $scope.dimensions_categories=dimensions_categories;

    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionEditCtrl($scope, dimensions_categories , dimensions) {

        $scope.formUrl = THEME_URL + '/app/modules/health/dimensions/views/form.html';
        //console.log($stateParams.id);
        $scope.dimensions = dimensions;
        $scope.dimensions_categories=dimensions_categories;
        console.log(dimensions_categories);
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthDimensionFormCtrl($scope, $window, $state,  ToastService, HealthDimensionSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/health/dimensions/views/form.html';
      

         $scope.save = function() {  
           
            HealthDimensionSrv.save($scope.dimensions,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health/dimensions');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
         }

     
        //cancel

           $scope.cancel = function (id) {
            $state.go('health/dimensions');
        };

    }

})();