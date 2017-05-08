/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.typedimension')
        .controller('HealthTypeDimensionCtrl', ['$scope', '$window', HealthTypeDimensionCtrl])
        .controller('HealthTypeDimensionIndexCtrl', [
            '$scope', '$window', '$state', 'HealthTypeDimensionSrv', 'ToastService', 'DialogService','$http',
            HealthTypeDimensionIndexCtrl])
        .controller('HealthTypeDimensionShowCtrl', ['$scope', '$window',
         HealthTypeDimensionShowCtrl])
        .controller('HealthTypeDimensionCreateCtrl', ['$scope', 
        'types','dimensions',
         HealthTypeDimensionCreateCtrl])
        .controller('HealthTypeDimensionEditCtrl', ['$scope',
        'typedimension', 'types','dimensions',
            HealthTypeDimensionEditCtrl])
        .controller('HealthTypeDimensionFormCtrl', ['$scope', '$window','$state','ToastService',
        'HealthTypeDimensionSrv',
         HealthTypeDimensionFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypeDimensionCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypeDimensionIndexCtrl($scope, $window, $state, HealthTypeDimensionSrv, ToastService, DialogService,$http) {


        var vm = this;
        vm.data = {};

        $scope.current_page = null;
        $scope.from = null;
        //$scope.last_page = null
        $scope.next_page = null;
        $scope.total = null;
        $scope.per_page = null;
        $scope.last_page = null;
        $scope.next_page_url = null;
        $scope.prev_page_url = null;
        $scope.from = null;
        $scope.to = null;
        $scope.types = [];

   
        //Index
        $scope.data = HealthTypeDimensionSrv.get(
            function (response) {
              
                $scope.typedimension = response.data;
                
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Tipo de Dimensiones de Historia!');
            });

        //edit
        $scope.edittypedimension = function (id) {
            $state.go('health-record/typedimension/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/typedimension/create');
        };

        //Paginate
        
        $scope.loadPage = function(url) {
           // console.log(url);
            $http.get(url).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };

        //Buscar

        $scope.searchtypedimension = function(keyword) {

            if(keyword == null || keyword == ""){
                $scope.data = HealthTypeDimensionSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
           // console.log(url);
            $http.get(SITE_URL + '/api/healths/typedimension/search/' + keyword).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };  
    }      


        //ELIMINAR typedimension

       $scope.deletetypedimension = function (typedimensionId) {

           //console.log(typedimensionId);
            DialogService.confirm('Eliminar Tipo de Dimension de Historia', 'Desea continuar?')
            .then(() => {
                HealthTypeDimensionSrv.delete({ id: typedimensionId }, function (response) {
             //       $scope.data.data.splice($scope.data.data.indexOf(typedimensionId), 1);
             $scope.data = HealthTypeDimensionSrv.get();
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
    function HealthTypeDimensionShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypeDimensionCreateCtrl($scope,types,dimensions ) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/typedimension/views/form.html';

         $scope.dimensions=dimensions;
          $scope.types=types;
        /**$scope.types = {};
        $scope.types = HealthTypeSrv.get();
        console.log($scope.types);*/
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypeDimensionEditCtrl($scope,  typedimension,types,dimensions ) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/typedimension/views/form.html';
         $scope.dimensions = dimensions;
        $scope.types=types;
        /**$scope.types = {};
        $scope.types = HealthTypeSrv.get();
        console.log($scope.types);*/
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypeDimensionFormCtrl($scope, $window, $state, ToastService,HealthTypeDimensionSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/typedimension/views/form.html';

        $scope.save = function() {
          console.log($scope.typedimension);
            HealthTypeDimensionSrv.save($scope.typedimension,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/typedimension');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
        //cancelar
        $scope.cancel = function() {
            $state.go('health-record/typedimension'); 
        }; 
    }
})();