/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.schedule')
        .controller('AgendaScheduleCtrl', ['$scope', '$window', 
            AgendaScheduleCtrl])
        .controller('AgendaScheduleIndexCtrl', [
            '$scope', '$window', '$state', 'AgendaScheDuleSrv', 'ToastService', 'DialogService','$http', 'moment',
            AgendaScheduleIndexCtrl])
        .controller('AgendaScheduleShowCtrl', ['$scope', '$window',
            AgendaScheduleShowCtrl])
        .controller('AgendaScheduleCreateCtrl', ['$scope', '$window', 'moment',  '$mdpDatePicker', '$mdpTimePicker', 'AgendaScheDuleSrv','ToastService','$state',
            'services',
            AgendaScheduleCreateCtrl])
        .controller('AgendaScheduleEditCtrl', [
            '$scope', '$window', '$stateParams', 'moment', '$mdpDatePicker', '$mdpTimePicker', 'AgendaScheDuleSrv', 'ToastService', '$state', 'schedule','services',
            AgendaScheduleEditCtrl])
        .controller('AgendaScheduleFormCtrl', ['$scope', '$state', '$window','moment','ToastService','AgendaScheDuleSrv',
            AgendaScheduleFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheduleCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheduleIndexCtrl($scope, $window, $state, AgendaScheDuleSrv, ToastService, DialogService, $http, moment) {


        var vm = this;
        vm.data = {};        
        $scope.data = {};
        $scope.schedule={};
   
        //Index
        $scope.data = AgendaScheDuleSrv.get(
            
         
            
            function (response) {
                 if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron los Horarios!');
                $scope.data = response;
                 }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Horarios!');
            });

        //edit
        $scope.editSchedule = function (id) {
            $state.go('agenda/schedule/edit', { id: id });
        };

          $scope.split = function () {
            console.log($scope.schedule.start_at);
        };

        //create
       $scope.new = function () {
            $state.go('agenda/schedule/create');
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
                 $scope.data= AgendaScheDuleSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            $http.get ( SITE_URL + '/api/agendas/schedules/search/' + keyword).success(function (res){
                $scope.data=res;
                $scope.keyword="";
            }).error(function(res){
                alert('error');
            });
        }
    };

        //ELIMINAR schedule}


       $scope.deleteSchedule = function (schedule) {

           //console.log(phenomenaId);
            DialogService.confirm('Eliminar Horario', 'Desea continuar?')
            .then(() => {
                AgendaScheDuleSrv.delete({ id: schedule }, function (response) {
             //       $scope.data.data.splice($scope.data.data.indexOf(phenomenaId), 1);
             $scope.data = AgendaScheDuleSrv.get();
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
    function AgendaScheduleShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheduleCreateCtrl($scope, $window, moment, $mdpDatePicker, $mdpTimePicker, AgendaScheDuleSrv, ToastService, $state, services) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/schedules/views/form.html';
        $scope.services = services;
        $scope.start_at = new Date();
        $scope.timeStart = null;
        $scope.showDdatePicker = function(e) {
            $mdpDatePicker($scope.start_at, {
                targetEvent: e
            }).then(function(selectedDate) {
                $scope.start_at  = selectedDate;
            });
        };
        $scope.showTimePicker = function(e) {
            $mdpTimePicker($scope.timeStart, {
                targetEvent: e
            }).then(function(selectedTime) {
                $scope.timeStart = selectedTime;
            });
        };
    
        $scope.ends_at = new Date();
        $scope.timeEnds = null;
        $scope.showDdatePicker = function(e) {
            $mdpDatePicker($scope.ends_at, {
                targetEvent: e
            }).then(function(selectedDate) {
                $scope.ends_at = selectedDate;
            });
        };
        $scope.showTimePicker = function(e) {
            $mdpTimePicker($scope.timeEnds, {
                targetEvent: e
            }).then(function(selectedTime) {
                $scope.timeEnds = selectedTime;
            });
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheduleEditCtrl($scope, $window, $stateParams, moment, $mdpDatePicker, $mdpTimePicker, AgendaScheDuleSrv, ToastService, $state, schedule,services) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/schedules/views/form.html';
        //console.log($stateParams.id);
        $scope.schedule = {};
        $scope.schedule = schedule;
        $scope.services = services;

        $scope.schedule.start_at = new Date($scope.schedule.start_at);
        $scope.schedule.ends_at = new Date($scope.schedule.ends_at);

        $scope.schedule.timestart_at = new Date($scope.schedule.timestart_at);
        $scope.schedule.timesends_at = new Date($scope.schedule.timesends_at);

        
         //$scope.schedule.start_at = moment($scope.schedule.start_at).format('H:mm:ss'); 
         $scope.schedule.timestart_at = $scope.schedule.start_at;
         $scope.schedule.timesends_at = $scope.schedule.ends_at;
         console.log($scope.schedule.timestart_at);
        //console.log($scope.fechaInicio);
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheduleFormCtrl($scope, $state, $window,moment,ToastService,AgendaScheDuleSrv) {
        //$scope.formUrl = THEME_URL + '/app/modules/agendas/schedules/views/form.html';
        //console.log($stateParams.id);
        //console.log($scope.formUrl);


        
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
                    $state.go('agenda/schedule');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
           $scope.cancel = function (id) {
            $state.go('agenda/schedule');
        };

    }

})();