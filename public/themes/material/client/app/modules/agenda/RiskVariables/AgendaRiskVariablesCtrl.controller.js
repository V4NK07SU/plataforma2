/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.RiskVariables')
        .controller('AgendaRiskVariablesCtrl', ['$scope', '$window', AgendaRiskVariablesCtrl])
        .controller('AgendaRiskVariablesIndexCtrl', [
            '$scope', '$window', '$state', 'AgendaRiskVariableSrv', 'ToastService', 'DialogService','$http',
            AgendaRiskVariablesIndexCtrl])
        .controller('AgendaRiskVariablesShowCtrl', ['$scope', '$window', AgendaRiskVariablesShowCtrl])
        .controller('AgendaRiskVariablesCreateCtrl', ['$scope', '$window', '$stateParams', 'AgendaRiskVariableSrv', 'ToastService', '$state', 'PhenomenaSrv', AgendaRiskVariablesCreateCtrl])
        .controller('AgendaRiskVariablesEditCtrl', [
            '$scope', '$window', '$stateParams', 'AgendaRiskVariableSrv', 'ToastService', '$state', 'RiskVariables', 'PhenomenaSrv',
            AgendaRiskVariablesEditCtrl])
        .controller('AgendaPhenomenaFormCtrl', ['$scope', '$window', AgendaPhenomenaFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVariablesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVariablesIndexCtrl($scope, $window, $state, AgendaRiskVariableSrv, ToastService, DialogService,$http) {


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
        $scope.data = AgendaRiskVariableSrv.get(
            function (response) {
              
                $scope.RiskVariables = response.data;
                
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las variables de riesgo!');
            });

        //edit
        $scope.editRiskVariables = function (id) {
            $state.go('agenda/RiskVariables/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/RiskVariables/create');
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

        $scope.searchRiskVariables = function(keyword) {

            if(keyword == null || keyword == ""){
                $scope.data = AgendaRiskVariableSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
           // console.log(url);
            $http.get(SITE_URL + '/api/agendas/RiskVariables/search/' + keyword).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };  
    }      


        //ELIMINAR phenomena

       $scope.deleteRiskVariables = function (RiskVariablesId) {

           //console.log(phenomenaId);
            DialogService.confirm('Eliminar variables de riesgo', 'Desea continuar?')
            .then(() => {
                AgendaRiskVariableSrv.delete({ id: RiskVariablesId }, function (response) {
             //       $scope.data.data.splice($scope.data.data.indexOf(phenomenaId), 1);
             $scope.data = AgendaRiskVariableSrv.get();
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
    function AgendaRiskVariablesShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVariablesCreateCtrl($scope, $window, $stateParams, AgendaRiskVariableSrv, ToastService, $state, PhenomenaSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';

        $scope.phenomenas = {};
        $scope.phenomenas = PhenomenaSrv.get();
        console.log($scope.phenomenas);

        $scope.RiskVariables = {};
        $scope.save = function() {
          console.log($scope.RiskVariables);
            AgendaRiskVariableSrv.save($scope.RiskVariables,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/RiskVariables');

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
            $state.go('agenda/RiskVariables'); 
        }; 

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVariablesEditCtrl($scope, $window, $stateParams, AgendaRiskVariableSrv, ToastService, $state, RiskVariables, PhenomenaSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';
        //console.log($stateParams.id);
        $scope.RiskVariables = RiskVariables;

        $scope.phenomenas = {};
        $scope.phenomenas = PhenomenaSrv.get();
        console.log($scope.phenomenas);


        $scope.save = function() {
          console.log($scope.RiskVariables);
            AgendaRiskVariableSrv.save($scope.RiskVariables,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/RiskVariables');

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
            $state.go('agenda/RiskVariables'); 
        };        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaPhenomenaFormCtrl($scope, $window, $stateParams, AgendaRiskVariableSrv, ToastService, $state, RiskVariables, PhenomenaSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';

        $scope.RiskVariables = AgendaRiskVariableSrv.get({ id: $stateParams.id },
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function (v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.RiskVariables);
    }

})();