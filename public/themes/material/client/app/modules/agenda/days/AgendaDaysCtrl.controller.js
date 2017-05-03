/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.days')
        .controller('AgendaDaysCtrl', ['$scope', '$window', AgendaDaysCtrl])
        .controller('AgendaDaysIndexCtrl', [
            '$scope', '$window', '$state', 'AgendaDaySrv', 'ToastService', 'DialogService','$http',
            AgendaDaysIndexCtrl])
        .controller('AgendaDaysShowCtrl', ['$scope', '$window', AgendaDaysShowCtrl])
        .controller('AgendaDaysCreateCtrl', ['$scope', '$window', AgendaDaysCreateCtrl])
        .controller('AgendaDaysEditCtrl', [
            '$scope', '$window', '$stateParams', 'AgendaDaySrv', 'ToastService', '$state', 'days',
            AgendaDaysEditCtrl])
        .controller('AgendaDaysFormCtrl', ['$scope', '$window', AgendaDaysFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaDaysCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaDaysIndexCtrl($scope, $window, $state, AgendaDaySrv, ToastService, DialogService,$http) {


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
        $scope.days = [];

   
        //Index
        $scope.data = AgendaDaySrv.get(
            function (response) {
                if ($scope.data.data.length > 0){
                ToastService.info('Se obtubieron los Dias!');
                angular.forEach(response.data, function(v, i) {
                    $scope.days[i] = v;
                });
                $scope.days = response.data;
            }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Dias!');
            });

        //edit
        $scope.editDays = function (id) {
            $state.go('agenda/days/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/days/create');
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

        $scope.searchDays = function(keyword) {

            if(keyword == null || keyword == ""){
                $scope.data = AgendaDaySrv.get();
                console.log("keyword");
                $scope.keyword = "";
        }
        if(keyword){
           // console.log(url);
            $http.get(SITE_URL + '/api/agendas/dias/search/' + keyword).success(function (res) {
               $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        }; 
        }


        //ELIMINAR 

       $scope.deleteDays = function (daysId) {

           //console.log(daysId);
            DialogService.confirm('Eliminar Dia', 'Desea continuar?')
            .then(() => {
                AgendaDaySrv.delete({ id: daysId }, function (response) {
             //       $scope.data.data.splice($scope.data.data.indexOf(daysId), 1);
             $scope.data = AgendaDaySrv.get();
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
    function AgendaDaysShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaDaysCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaDaysEditCtrl($scope, $window, $stateParams, AgendaDaySrv, ToastService, $state, days) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/days/views/create.html';
        //console.log($stateParams.id);
        $scope.days = days;

        $scope.save = function() {
          console.log($scope.days);
            AgendaDaySrv.save($scope.days,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/days');

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
            $state.go('agenda/days'); 
        };   
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaDaysFormCtrl($scope, $window) {

    }

})();