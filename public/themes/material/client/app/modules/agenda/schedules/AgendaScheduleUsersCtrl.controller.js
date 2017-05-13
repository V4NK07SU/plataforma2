(function(){
    'use strict';

    angular
        .module('app.modules.agenda.schedule')
        .controller('AgendaScheduleUserScheludeTaskCtrl',
         AgendaScheduleUserScheludeTaskCtrl)
        .controller('AgendaScheduleUserCreateCtrl', ['$scope', '$window', 'moment',  '$mdpDatePicker', '$mdpTimePicker', 'AgendaScheDuleSrv','ToastService','$state',
            'services', 'days',
        AgendaScheduleUserCreateCtrl])         
        .controller('AgendaScheduleUserFormCtrl', ['$scope', '$state', '$window','moment','ToastService','AgendaScheDuleSrv',
            AgendaScheduleUserFormCtrl]);
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

        function AgendaScheduleUserCreateCtrl($scope, $window, moment, $mdpDatePicker, $mdpTimePicker, AgendaScheDuleSrv, ToastService, $state, services , days) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/schedule/views/users/schedule-task.html';
        $scope.services = services;
        $scope.schedules = {
            days: [],
       };
       $scope.days= days.data;

       $scope.exists = function (day) {
            var ret =false;
            angular.forEach($scope.schedules.days, function(v, i) {                
                if(v.id === day.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        
        //Mostrar el JSON de las encuestas seleccionadas.
        $scope.toggle = function (day) {
            var idx = -1;            
            angular.forEach($scope.schedules.days, function(v, i) {                
                if(v.id === day.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.schedules.days.splice(idx, 1);
            } else {
                $scope.schedules.days.push(day)
            }
            console.log($scope.schedules.days);
        }

         

        //$scope.currentDateInitial = new Date();
        //$scope.currentDateFinal = new Date();
        //$scope.schedule.start_at = new Date();
        //$scope.currentTimeInitial = new Date();
         //$scope.currentTimeFinal = new Date();

        /*$scope.showDdatePicker = function(e) {
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
        };*/
    }



function AgendaScheduleUserFormCtrl($scope, $state, $window,moment,ToastService,AgendaScheDuleSrv) {
           
        $scope.save = function() {            
            //console.log($scope.schedule);
                               
            $scope.schedule.start_at = moment($scope.schedule.start_at).format('YYYY-MM-DD');
            $scope.schedule.ends_at = moment($scope.schedule.ends_at).format('YYYY-MM-DD');
            $scope.schedule.timestart_at = moment($scope.schedule.timestart_at).format("H:mm:ss");
            $scope.schedule.timesends_at = moment($scope.schedule.timesends_at).format("H:mm:ss");

             
            AgendaScheDuleSrv.save($scope.schedule,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/schedule/users/schedule-task');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
           $scope.cancel = function (id) {
            $state.go('agenda/schedule/users/schedule-task');
        };




        
            
    }

}()); 