/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.phenomena')
        .controller('AgendaServiceCtrl', ['$scope', '$window', AgendaServiceCtrl])
        .controller('AgendaServiceIndexCtrl', [
            '$scope', '$window', '$state', 'ServiceSrv', 'ToastService', 'DialogService','$http',
            AgendaServiceIndexCtrl])
        .controller('AgendaServiceShowCtrl', ['$scope', '$window', AgendaServiceShowCtrl])
        .controller('AgendaServiceCreateCtrl', ['$scope', '$window', AgendaServiceCreateCtrl])
        .controller('AgendaServiceEditCtrl', [
            '$scope', '$window', '$stateParams', 'ServiceSrv', 'ToastService', '$state', 'services',
            AgendaServiceEditCtrl])
        .controller('AgendaServiceFormCtrl', ['$scope', '$window', AgendaServiceFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaServiceCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaServiceIndexCtrl($scope, $window, $state, ServiceSrv, ToastService, DialogService,$http) {


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
        $scope.services = [];

   
        //Index
        $scope.data = ServiceSrv.get(
            function (response) {
                ToastService.info('Se obtubieron los Servicios!');
                angular.forEach(response.data, function(v, i) {
                    $scope.services[i] = v;
                });
                $scope.services = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Servicios!');
            });

        //edit
        $scope.editService = function (id) {
            $state.go('agenda/service/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/service/create');
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
                $scope.data = ServiceSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }

            else {
            console.log(keyword);
            $http.get(SITE_URL + '/api/agendas/services/search/' + keyword).success(function (res){
                $scope.data = res;
                console.log($scope.data);
            }).error(function (res) {
                alert('error');
                // body...
            });}
        }


        //ELIMINAR service

       $scope.deleteService = function (serviceId) {

           //console.log(serviceId);
            DialogService.confirm('Eliminar Servicio', 'Desea continuar?')
            .then(() => {
                ServiceSrv.delete({ id: serviceId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(serviceId), 1);
                    $scope.data = ServiceSrv.get();
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
    function AgendaServiceShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaServiceCreateCtrl($scope, $window) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/services/views/form.html';
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaServiceEditCtrl($scope, $window, $stateParams, ServiceSrv, ToastService, $state, services) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/services/views/form.html';
        //console.log($stateParams.id);
        $scope.services = services;

        $scope.save = function() {
          console.log($scope.services);
            ServiceSrv.save($scope.services,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/service');

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
            $state.go('agenda/service');
        }; 
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaServiceFormCtrl($scope, $window) {

    }

})();