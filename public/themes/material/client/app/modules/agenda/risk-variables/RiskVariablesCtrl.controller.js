(function () {
    'use strict';

    angular
        .module('app.modules.agenda.risk-variables')
        .controller('RiskVariablesCtrl', RiskVariablesCtrl)
    RiskVariablesCtrl.$inject = ['$location', '$scope', '$window'];
    function RiskVariablesCtrl($location, $scope, $window) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }

    angular
        .module('app.modules.agenda.risk-variables')
        .controller('RiskVariablesIndexCtrl', RiskVariablesIndexCtrl)
    RiskVariablesIndexCtrl.$inject = [
        '$location', '$scope', '$window', '$state', '$http',
        'riskVariables', 'RiskVariableSrv', 'DialogService', 'ToastService'
        ];

    function RiskVariablesIndexCtrl(
        $location, $scope, $window, $state, $http,
        riskVariables, RiskVariableSrv, DialogService, ToastService) {
        /* jshint validthis:true */
        var vm = this;

        $scope.data = riskVariables;

        activate();

         $scope.loadData = function(url) {

            $http.get(url)
                .success(function(response) {
                    $scope.data = response;
                })
                .error(function(error) {
                    console.log(error);
                });
        };

        $scope.delete = function (riskvariable) {
            DialogService.confirm('Eliminar Variable de riesgo', 'Confirma realizar esta acción?')
                .then(function() {
                    RiskVariableSrv.delete(
                    {id: riskvariable.id},
                    function(response) {
                        var deleted = $scope.data.data.indexOf(riskvariable);
                        console.log(deleted);
                        $scope.data.data.splice(deleted, 1);
                        ToastService.success(response.message);
                    }, function(error) {
                        ToastService.error(error.message);
                    });
                }, function() {
                    console.log('Cancelado!')
                });
        };

        $scope.edit = function (id) {
            $state.go('agenda/risk-variable/edit', {id: id});
        };

        $scope.new = function () {
            $state.go('agenda/risk-variable/create');
        };

        function activate() { }
    }

     angular
        .module('app.modules.agenda.risk-variables')
        .controller('RiskVariablesEditCtrl', RiskVariablesEditCtrl)
    RiskVariablesEditCtrl.$inject = ['$location', '$scope', '$window', 
        'phenomenas', 'riskVariable', 'RiskVariableSrv'];

    function RiskVariablesEditCtrl($location, $scope, $window, 
        phenomenas, riskVariable, RiskVariablesIndexCtrl) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/risk-variables/views/form.html';
        /* jshint validthis:true */
        var vm = this;

        $scope.phenomenas = phenomenas.data;

        $scope.riskvariable = riskVariable;

        activate();        

        function activate() { }
    }

    angular
        .module('app.modules.agenda.risk-variables')
        .controller('RiskVariablesCreateCtrl', RiskVariablesCreateCtrl)
    RiskVariablesCreateCtrl.$inject = [
        '$location', '$scope', '$window',
        'phenomenas', 'RiskVariableSrv'];

    function RiskVariablesCreateCtrl($location, $scope, $window, 
        phenomenas, RiskVariablesIndexCtrl) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/risk-variables/views/form.html';
        /* jshint validthis:true */
        var vm = this;

        $scope.phenomenas = phenomenas.data;

        activate();        

        function activate() { }
    }

    angular
        .module('app.modules.agenda.risk-variables')
        .controller('RiskVariablesFormCtrl', RiskVariablesFormCtrl)
    RiskVariablesFormCtrl.$inject = [
        '$location', '$scope', '$window', '$state',
        'RiskVariableSrv', 'ToastService'
        ];

    function RiskVariablesFormCtrl(
        $location, $scope, $window, $state,
        RiskVariableSrv, ToastService
        ) {
        
        $scope.save = function() {
            RiskVariableSrv.save($scope.riskvariable,
                function(response) {           
                    console.log(response);         
                    ToastService.success(response.errors);
                    $state.go('agenda/risk-variable');
                },
                function(response) {
                    var counter = 0;
                    ToastService.error('Error interno');
                    /*
                    angular.forEach(response.data, function(v, i) {
                        angular.element('#role-' + i + '-container').addClass('md-input-invalid');
                        angular.element('[name="' + i + '"]').focus();
                        if(counter > 0) {
                            $timeout(function(){
                                ToastService.error(v[0]);
                            }, 6000);
                        } else {
                            ToastService.error(v[0]);
                        }                        
                        counter++;
                    });
                    */
                });                
        };

        $scope.cancel = function() {
            $state.go('agenda/risk-variable');
        };

        activate();        

        function activate() { }
    }
    
})();
