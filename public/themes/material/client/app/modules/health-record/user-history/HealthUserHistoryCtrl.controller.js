(function() {
    'use strict';

    angular.module('app.modules.health-record.user-history')
        .controller('HealthUserHistoryFormCtrl', ['$scope', '$window', '$state', 'ToastService',
         HealthUserHistoryFormCtrl])
    .controller('HealthUserHistoryIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'HealthHistorySrv', 'ToastService', 'DialogService', 'types', 'dimensions','users','$log','$q','$timeout',
         HealthUserHistoryIndexCtrl])
    .controller('HealthUserHistoryCreateCtrl', ['$scope', 
         HealthUserHistoryCreateCtrl])
    .controller('HealthUserHistoryEditCtrl', ['$scope', 
        HealthUserHistoryEditCtrl]);

   	function HealthUserHistoryIndexCtrl($scope, $window, $state, $http, HealthHistorySrv, ToastService, DialogService, types, dimensions,users
       ) {

        $scope.types = types; 
        $scope.users=users;

        $scope.dimensionsList = dimensions;           
        $scope.dimensionsHistory = [];        

        $scope.history = {};
        
        var dim = new Object();

        function Dim(dimension) {
            this.id = dimension.id;
            this.title = dimension.title;
            this.description = dimension.description;
            this.value = '';
        }


        $scope.agregarHistory = function (dimension) {
            console.log(dimension);
            var newDim;
            angular.forEach($scope.dimensionsList.data, function(v, i) {
                if(v.id == dimension) {
                    newDim = new Dim(v);
                }
            });
            $scope.dimensionsHistory.push(newDim);

            console.log($scope.dimensionsHistory);

            
        };
        //------------------------------------------------------------------------------//
        
        $scope.dimensionsListRecord = dimensions;
        $scope.dimensionsRecord = [];

        $scope.record = {};

        var pim = new Object();

        function Pim(dimensions) {
            this.id = dimensions.id;
            this.title = dimensions.title;
            this.description = dimensions.description;
            this.value = '';
        }

       $scope.agregarRecord = function (dimensions) {
            console.log(dimensions);
            var newPim;
            angular.forEach($scope.dimensionsListRecord.data, function(d, i) {
                if(d.id == dimensions) {
                    newPim = new Pim(d);
                }
            });
            $scope.dimensionsRecord.push(newPim);

            console.log($scope.dimensionsRecord);
        };
   
    

    //-------------------------------------------------------------------------------//

       
    //-------------------------------------------------------------//

    $scope.save=function()
    {
        HealthHistorySrv.save({id:'save-history'},$scope.history,
        function(response){
            console.log(response);
            ToastService.success(response.message);
            $state.go ( 'health-record/user-history');

        }, function(response){
            console.log(response);
            angular.forEach(response.data.errors,function(v,i){
                ToastService.error(v[0]);
            });
        });
        
    }


       }









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