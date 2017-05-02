/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.periods')
        .controller('AgendaPeriodCtrl', ['$scope', '$window', AgendaPeriodCtrl])
        .controller('AgendaPeriodIndexCtrl', [
            '$scope', '$window', '$state', 'AgendaPeriodSrv', 'ToastService', 'DialogService','$http',
            AgendaPeriodIndexCtrl])
        .controller('AgendaPeriodShowCtrl', ['$scope', '$window', AgendaPeriodShowCtrl])
        .controller('AgendaPeriodCreateCtrl', ['$scope', '$window', 'moment', 'AgendaPeriodSrv','ToastService','$state', AgendaPeriodCreateCtrl])
        .controller('AgendaPeriodEditCtrl', [
            '$scope', '$window', '$stateParams', 'moment', 'AgendaPeriodSrv', 'ToastService', '$state', 'periods',
            AgendaPeriodEditCtrl])
        .controller('AgendaPeriodFormCtrl', ['$scope', '$window', AgendaPeriodFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPeriodCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPeriodIndexCtrl($scope, $window, $state, AgendaPeriodSrv, ToastService, DialogService, $http) {


        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = AgendaPeriodSrv.get(
            
            function (response) {
                ToastService.info('Se obtuvieron los periodos!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los periodos!');
            });

        //edit
        $scope.editPeriod = function (id) {
            $state.go('agenda/period/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/period/create');
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
                 $scope.data= AgendaPeriodSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/agendas/periods/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deletePeriod = function (period) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Periodo', 'Desea continuar?')
            .then(() => {
                AgendaPeriodSrv.delete({ id: period.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(period), 1);
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
    function AgendaPeriodShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPeriodCreateCtrl($scope, $window, moment, AgendaPeriodSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/periods/views/period-form.html';

        $scope.periods = {};

        console.log($scope.periods);
        $scope.save = function() {  
            $scope.periods.start_at = moment($scope.periods.start_at).format('YYYY-MM-DD');// dateFilter($scope.start_at, 'yyyy-mm-dd');
            $scope.periods.ends_at = moment($scope.periods.ends_at).format('YYYY-MM-DD'),//dateFilter($scope.ends_at, 'yyyy-mm-dd');
            console.log($scope.periods);
            AgendaPeriodSrv.save($scope.periods,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/period');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //CANCEL CREATE
       $scope.cancel = function (id) {
            $state.go('agenda/period');
        };

    
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPeriodEditCtrl($scope, $window, $stateParams, moment, AgendaPeriodSrv, ToastService, $state, periods) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/periods/views/period-form.html';
        //console.log($stateParams.id);
        $scope.periods = {};
        $scope.periods = periods;

        $scope.periods.start_at = new Date($scope.periods.start_at);
        $scope.periods.ends_at = new Date($scope.periods.ends_at);

        console.log($scope.periods);

        $scope.save = function() {            
            console.log($scope.periods);                      
            $scope.periods.start_at = moment($scope.periods.start_at).format('YYYY-MM-DD');// dateFilter($scope.start_at, 'yyyy-mm-dd');
            $scope.periods.ends_at = moment($scope.periods.ends_at).format('YYYY-MM-DD'),//dateFilter($scope.ends_at, 'yyyy-mm-dd');
            AgendaPeriodSrv.save($scope.periods,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/period');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

         $scope.cancel = function (id) {
            $state.go('agenda/period');
        };


 
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPeriodFormCtrl($scope, $window) {

    }

})();