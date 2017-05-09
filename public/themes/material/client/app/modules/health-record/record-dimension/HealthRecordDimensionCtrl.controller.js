/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.record-dimension')
        .controller('HealthRecordDimensionCtrl', ['$scope', '$window', HealthRecordDimensionCtrl])
        .controller('HealthRecordDimensionIndexCtrl', ['$scope', '$window', '$state', 'ToastService', 'DialogService','$http',
            'HealthRecordDimensionSrv',
            HealthRecordDimensionIndexCtrl])
        .controller('HealthRecordDimensionShowCtrl', ['$scope', '$window', 
        HealthRecordDimensionShowCtrl])
        .controller('HealthRecordDimensionCreateCtrl', ['$scope',
        'dimensions',
         HealthRecordDimensionCreateCtrl])
        .controller('HealthRecordDimensionEditCtrl', ['$scope',
        'dimensions','record_dimension',
            HealthRecordDimensionEditCtrl])
        .controller('HealthRecordDimensionFormCtrl', ['$scope', '$window', '$state', 'ToastService',
        'HealthRecordDimensionSrv',
        HealthRecordDimensionFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordDimensionCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordDimensionIndexCtrl($scope, $window, $state,  ToastService, DialogService, $http, HealthRecordDimensionSrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = HealthRecordDimensionSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron los registros:dimensiones!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los registros:dimensiones!');
            });

        //edit
        $scope.editRecordDimension = function (id) {
            $state.go('health-record/record-dimension/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/record-dimension/create');
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
                 $scope.data= HealthRecordDimensionSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/record/dimension/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteRecordDimension = function (record_dimensions) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Registro:Dimension', 'Desea continuar?')
            .then(() => {
                HealthRecordDimensionSrv.delete({ id: record_dimensions.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(record_dimensions), 1);
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
    function HealthRecordDimensionShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordDimensionCreateCtrl($scope, dimensions) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/record-dimension/views/form.html';

        $scope.dimensions=dimensions;

    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordDimensionEditCtrl($scope, dimensions , record_dimension) {

        $scope.formUrl = THEME_URL + '/app/modules/health-record/record-dimension/views/form.html';
        //console.log($stateParams.id);
        $scope.dimensions = dimensions;
        $scope.record_dimension=record_dimension;
        console.log(dimensions);
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordDimensionFormCtrl($scope, $window, $state,  ToastService, HealthRecordDimensionSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/record-dimension/views/form.html';
      

         $scope.save = function() {  
           
            HealthRecordDimensionSrv.save($scope.record_dimension,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/record-dimension');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
         }

     
        //cancel

           $scope.cancel = function (id) {
            $state.go('health-record/record-dimension');
        };

    }

})();