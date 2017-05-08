/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health.types')
        .controller('HealthTypesCtrl', ['$scope', '$window', HealthTypesCtrl])
        .controller('HealthTypesIndexCtrl', [
            '$scope', '$window', '$state', 'HealthTypeSrv', 'ToastService', 'DialogService','$http',
            HealthTypesIndexCtrl])
        .controller('HealthTypesShowCtrl', ['$scope', '$window', HealthTypesShowCtrl])
        .controller('HealthTypesCreateCtrl', ['$scope', '$window', '$stateParams', 'HealthTypeSrv', 'ToastService', '$state',
            HealthTypesCreateCtrl])
        .controller('HealthTypesEditCtrl', [
            '$scope', '$window', '$stateParams', 'HealthTypeSrv', 'ToastService', '$state', 'types',
            HealthTypesEditCtrl])
        .controller('HealthTypesFormCtrl', ['$scope', '$window', '$state', 'ToastService', 'HealthTypeSrv', 
            HealthTypesFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */ 
    function HealthTypesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesIndexCtrl($scope, $window, $state, HealthTypeSrv, ToastService, DialogService,$http) {


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
        $scope.data = HealthTypeSrv.get(
            function (response) {
                if($scope.data.data.length > 0){
                ToastService.info('Se obtubieron Tipos de Historia!');
                angular.forEach(response.data, function(v, i) {
                    $scope.types[i] = v;
                });
                $scope.types = response.data;
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando Tipos de Historia!');
            });

        //edit
        $scope.editTypes = function (id) {
            $state.go('health/types/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health/types/create');
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
        
        //Search
        $scope.search = function (keyword){
            if (keyword  == null || keyword == "") {
                $scope.data = HealthTypeSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
            console.log(keyword);
            $http.get(SITE_URL + '/api/health/types/search/' + keyword).success(function (res){
                $scope.data = res;
                console.log($scope.data);
            }).error(function (res) {
                alert('error');
                // body...
            });
        }
        }


        //ELIMINAR 

       $scope.deleteService = function (serviceId) {

           //console.log(serviceId);
            DialogService.confirm('Eliminar Tipo de Historia', 'Desea continuar?')
            .then(() => {
                HealthTypeSrv.delete({ id: serviceId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(serviceId), 1);
                    $scope.data = HealthTypeSrv.get();
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
    function HealthTypesShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesCreateCtrl($scope, $window) {
        $scope.formUrl = THEME_URL + '/app/modules/health/types/views/form.html';
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesEditCtrl($scope, $window, $stateParams, HealthTypeSrv, ToastService, $state, types) {
        $scope.formUrl = THEME_URL + '/app/modules/health/types/views/form.html';
        
        $scope.types = types;
        console.log($scope.types);
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesFormCtrl($scope, $window, $state, ToastService, HealthTypeSrv ) {
        $scope.formUrl = THEME_URL + '/app/modules/health/types/views/form.html';
        $scope.save = function() {
          console.log($scope.types);
            HealthTypeSrv.save($scope.types,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health/types');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        } 
          //cancel
         $scope.cancel = function () {
            $state.go('health/types');
        };
    }

})();