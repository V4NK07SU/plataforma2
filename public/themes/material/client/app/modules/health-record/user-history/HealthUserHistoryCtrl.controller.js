(function() {
    'use strict';

    angular.module('app.modules.health-record.user-history')
        .controller('HealthUserHistoryFormCtrl', ['$scope', '$window', '$state', 'ToastService',
         HealthUserHistoryFormCtrl])
    .controller('HealthUserHistoryIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'HealthDimensionSrv', 'ToastService', 'DialogService', 'types',
        'dimensions','users', 'record','HealthHistorySrv',
         HealthUserHistoryIndexCtrl])
    .controller('HealthUserHistoryCreateCtrl', ['$scope', 
         HealthUserHistoryCreateCtrl])
    .controller('HealthUserHistoryEditCtrl', ['$scope', '$window','$state','ToastService',  
        HealthUserHistoryEditCtrl]);

   	function HealthUserHistoryIndexCtrl($scope, $window, $state, $http, 
       HealthDimensionSrv, ToastService, DialogService, types, dimensions, users,record,
       HealthHistorySrv, 
       ) {
        // Necesito enviar esto al API
        $scope.record = {
            // Paciente
            user_id: 1,
            // Medico
            professional_id: null,
            // Tipo de consulta
            type_id: null,
            // Dimenciones iniciales
            initialDimentions: [],
            // dimensiones de la historia o consulta
            historyDimensions: []
        };

        $scope.history={
            //Motivo
            reason: null,
            //Observaciones
            observations: null ,
            //Seguimiento
            tracing: null
        }      

        // Select tipos de consulta
        $scope.types = types;
        // Seleccionar el paciente
        $scope.users = users;

        $scope.records = record;
        
        // Select de las dimensiones iniciales
        $scope.dimensionsList = dimensions;
        // Select de las dimensiones historia
    

        $scope.addInitialDimension = function (dimension) {
         
              
            $scope.record.initialDimentions.push(JSON.parse(dimension));      
            console.log($scope.record);
            
        };



        $scope.addHistoryDimension = function(dimension) {
            $scope.record.historyDimensions.push(JSON.parse(dimension));      
            console.log($scope.record);
        };


 
    //------------------------------------------------------------------------
    
        $scope.save = function() { 
            HealthHistorySrv.save( $scope.history,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/user-history');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });

              }
   
    };

    //-------------------------------------------------------------------------------//

       


    function HealthUserHistoryCreateCtrl($scope) {
       
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

       //Obtener las encuestas (Relación)
    }
    function HealthUserHistoryEditCtrl($scope) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

    }

    function HealthUserHistoryFormCtrl($scope, $window, $state, ToastService) {
        


    }

 })();