/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.phenomena')
        .controller('AgendaPhenomenaCtrl', ['$scope', '$window', AgendaPhenomenaCtrl])
        .controller('AgendaPhenomenaIndexCtrl', [
            '$scope', '$window', '$state', 'AgendaPhenomenaSrv', 'ToastService', 'DialogService','$http',
            AgendaPhenomenaIndexCtrl])
        .controller('AgendaPhenomenShowCtrl', ['$scope', '$window', 
            AgendaPhenomenaShowCtrl])
        .controller('AgendaPhenomenaCreateCtrl', ['$scope',
             AgendaPhenomenaCreateCtrl])
        .controller('AgendaPhenomenaEditCtrl', ['$scope', 
             'phenomenas',
            AgendaPhenomenaEditCtrl])
        .controller('AgendaPhenomenaFormCtrl', ['$scope', 'ToastService', '$state',
         'AgendaPhenomenaSrv',
             AgendaPhenomenaFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaIndexCtrl($scope, $window, $state, AgendaPhenomenaSrv, ToastService, DialogService,$http) {


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
        $scope.phenomenas = [];

   
        //Index
        $scope.data = AgendaPhenomenaSrv.get(
            function (response) {
                if($scope.data.data.length > 0){
                ToastService.info('Se obtubieron los Fenomenos!');
                angular.forEach(response.data, function(v, i) {
                    $scope.phenomenas[i] = v;
                });
                $scope.phenomenas = response.data;
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Fenomenos!');
            });

        //edit
        $scope.editPhenomena = function (id) {
            $state.go('agenda/phenomena/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/phenomena/create');
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

        $scope.searchPhenomena = function(keyword) {

            if(keyword == null || keyword == ""){
                $scope.data = AgendaPhenomenaSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
           // console.log(url);
            $http.get(SITE_URL + '/api/agendas/phenomenas/search/' + keyword).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };  
    }      


        //ELIMINAR phenomena

       $scope.deletePhenomena = function (phenomenaId) {

           //console.log(phenomenaId);
            DialogService.confirm('Eliminar Servicio', 'Desea continuar?')
            .then(() => {
                AgendaPhenomenaSrv.delete({ id: phenomenaId }, function (response) {
             //       $scope.data.data.splice($scope.data.data.indexOf(phenomenaId), 1);
             $scope.data = AgendaPhenomenaSrv.get();
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
    function AgendaPhenomenaShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaCreateCtrl($scope) {
           $scope.formUrl = THEME_URL + '/app/modules/agenda/phenomenas/views/form.html';
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaEditCtrl($scope, phenomenas) {

        $scope.formUrl = THEME_URL + '/app/modules/agenda/phenomenas/views/form.html';
        //console.log($stateParams.id);
        $scope.phenomenas = phenomenas;

      
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaFormCtrl($scope, ToastService, $state, AgendaPhenomenaSrv) {
       $scope.formUrl = THEME_URL + '/app/modules/agenda/phenomenas/views/form.html';

        $scope.save = function() {
          console.log($scope.phenomenas);
            AgendaPhenomenaSrv.save($scope.phenomenas,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/phenomena');

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
            $state.go('agenda/phenomena'); 
        };        
    }

})();