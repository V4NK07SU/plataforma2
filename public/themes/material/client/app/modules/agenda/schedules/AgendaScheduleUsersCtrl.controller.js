(function(){
    'use strict';

    angular
        .module('app.modules.agenda.schedule')
        .controller('AgendaScheduleUserScheludeTaskCtrl', AgendaScheduleUserScheludeTaskCtrl)
        .controller('AgendaScheduleUserCreateCtrl', ['$scope', '$window', 'moment',  '$mdpDatePicker', '$mdpTimePicker', 'AgendaScheDuleSrv','ToastService','$state',
            'services',
            AgendaScheduleUserCreateCtrl])
//-----------------------------------------------------------
       AgendaScheduleUserScheludeTaskCtrl.$inject = ['$scope'];
    /** @ngInject*/ 
    function AgendaScheduleUserScheludeTaskCtrl($scope){
        var vm = this;
        //$scope.title = 'En desarrollo';
        //$scope.scheludeitem= "Hola mundo";    
        init();
        function init(){
        }
    }
//-------------------------------------------------------------    

        function AgendaScheduleUserCreateCtrl($scope, $window, moment, $mdpDatePicker, $mdpTimePicker, AgendaScheDuleSrv, ToastService, $state, services) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/schedule/views/users/schedule-task.html';
        $scope.services = services;
        $scope.currentDateInitial = new Date();
        $scope.currentDateFinal = new Date();
        $scope.currentTimeInitial = null;
         $scope.currentTimeFinal = null;

        $scope.showDdatePicker = function(e) {
            $mdpDatePicker($scope.currentDateInitial, {
                targetEvent: e
            }).then(function(selectedDate) {
                $scope.currentDateInitial = selectedDate;
            });
        };

            $scope.showDdatePicker = function(e) {
            $mdpDatePicker($scope.currentDateFinal, {
                targetEvent: e
            }).then(function(selectedDate) {
                $scope.currentDateFinal = selectedDate;
            });
        };

        $scope.showTimePicker = function(e) {
            $mdpTimePicker($scope.currentTimeInitial, {
                targetEvent: e
            }).then(function(selectedTime) {
                $scope.currentTimeInitial = selectedTime;
            });
        };

          $scope.showTimePicker = function(e) {
            $mdpTimePicker($scope.currentTimeFinal, {
                targetEvent: e
            }).then(function(selectedTime) {
                $scope.currentTimeFinal = selectedTime;
            });
        };
    
    }

}());