(function() {
    'use strict';

    angular.module('app.modules.health-record.user-history')
        .controller('HealthUserHistoryFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'HealthUserHistorySrv', 'ToastService',
         HealthUserHistoryFormCtrl])
    .controller('HealthUserHistoryIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'HealthDimensionSrv', 'ToastService', 'DialogService', 'types', 'dimensions',
         HealthUserHistoryIndexCtrl])
    .controller('HealthUserHistoryCreateCtrl', [
        '$scope', '$window',  
        'ToastService', 'poll',
         HealthUserHistoryCreateCtrl])
    .controller('HealthUserHistoryEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollItem', 'poll',
        HealthUserHistoryEditCtrl]);

   	function HealthUserHistoryIndexCtrl($scope, $window, $state, $http, HealthDimensionSrv, ToastService, DialogService, types, dimensions) {
     $scope.dimensions = dimensions; 
     $scope.dimension=[];  
  
     $scope.types = types; 

     $scope.agregar = function () {

        $scope.dimension.push({dimensions});
        console.log($scope.dimensions.title);

        
        }      
    }






















    function HealthUserHistoryCreateCtrl($scope, $window, ToastService, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

       //Obtener las encuestas (Relación)
    }

    function HealthUserHistoryEditCtrl($scope, $window, $stateParams, ToastService, pollItem, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        //Obtener los datos del registro
        $scope.pollItem = pollItem;

       //Obtener las encuestas (Relación)
        $scope.poll = poll;
    }

    function HealthUserHistoryFormCtrl($stateParams, $scope, $window, $state, HealthUserHistorySrv, ToastService) {
        
        //Guardar item.
        $scope.save = function () {
            HealthUserHistorySrv.save($scope.pollItem,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-item');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un item.
        $scope.cancel = function (id) {
            $state.go('polls/poll-item');
        };
    }

 })();