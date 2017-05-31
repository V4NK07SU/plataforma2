/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.public')
        .controller('HealthPublicCtrl', ['$scope', '$window', HealthPublicCtrl])
        .controller('HealthPublicIndexCtrl', ['$scope', '$window', '$state', 'HealthPublicSrv', 'ToastService', 'DialogService','$http',
            HealthPublicIndexCtrl]);

   

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthPublicIndexCtrl($scope, $window, $state, HealthPublicSrv, ToastService, DialogService,$http) {


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
            $state.go('health-record/types/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/types/create');
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
})();