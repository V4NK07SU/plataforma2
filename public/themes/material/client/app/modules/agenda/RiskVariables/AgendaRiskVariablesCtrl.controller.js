/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.riskVariables')
        .controller('AgendaRiskVariablesCtrl', ['$scope', '$window', AgendaRiskVariablesCtrl])
        .controller('AgendaRiskVariablesIndexCtrl', ['$scope', '$window', '$state',  'ToastService', 'DialogService','$http',
            'AgendaRiskVariableSrv',
            AgendaRiskVariablesIndexCtrl])
        .controller('AgendaRiskVariablesShowCtrl', ['$scope', '$window',
             AgendaRiskVariablesShowCtrl])
        .controller('AgendaRiskVariablesCreateCtrl', ['$scope',  
            'phenomenas', 
            AgendaRiskVariablesCreateCtrl])
        .controller('AgendaRiskVariablesEditCtrl', ['$scope',
            'phenomenas','riskVariables', 
            AgendaRiskVariablesEditCtrl])
        .controller('AgendaRiskVaribleFormCtrl', ['$scope', '$window', 'ToastService', '$state', 
            'AgendaRiskVariableSrv', 
             AgendaRiskVaribleFormCtrl]);

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
    function AgendaRiskVariablesIndexCtrl($scope, $window, $state, ToastService, DialogService,$http, AgendaRiskVariableSrv) {


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
            $state.go('agenda/riskvariables/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/riskvariables/create');
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
            $http.get(SITE_URL + '/api/agendas/riskvariables/search/' + keyword).success(function (res) {
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
    function AgendaRiskVariablesCreateCtrl($scope, phenomenas) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';

        $scope.phenomenas = phenomenas;

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVariablesEditCtrl($scope, phenomenas,riskVariables) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';

        $scope.riskVariables = riskVariables;
        $scope.phenomenas = phenomenas;


           
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaRiskVaribleFormCtrl($scope, $window, ToastService, $state, AgendaRiskVariableSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/RiskVariables/views/form.html';


        $scope.save = function() {
          console.log($scope.riskVariables);
            AgendaRiskVariableSrv.save($scope.riskVariables,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/riskvariables');

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
            $state.go('agenda/riskvariables'); 
        };     

    }

})();