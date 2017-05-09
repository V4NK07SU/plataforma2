/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.agenda.appointments')
        .controller('AgendaAppointmentsCtrl', ['$scope', '$window', 
            AgendaAppointmentsCtrl])
        .controller('AgendaAppointmentsIndexCtrl', [
            '$scope', '$window', '$state','moment', 'amMoment','AgendaAppointmentSrv', 'ToastService', 'DialogService','$http',
            AgendaAppointmentsIndexCtrl])
        .controller('AgendaAppointmentsShowCtrl', ['$scope', '$window', 
            AgendaAppointmentsShowCtrl])
        .controller('AgendaAppointmentsCreateCtrl', ['$scope', '$window', 'AgendaAppointmentSrv', 'ToastService', '$state',
            'moment','schedule','riskVariables','AuthSrv',
            AgendaAppointmentsCreateCtrl])
        .controller('AgendaAppointmentsEditCtrl', ['$scope', '$window', '$stateParams', 'AgendaAppointmentSrv', 'ToastService', '$state',
            'moment','appointments','schedule', 'riskVariables',
            AgendaAppointmentsEditCtrl])
        .controller('AgendaAppointmentsFormCtrl', ['$scope', '$state', '$window','moment','ToastService','AgendaAppointmentSrv', 
            AgendaAppointmentsFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaAppointmentsCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaAppointmentsIndexCtrl($scope, $window, $state,moment,amMoment, AgendaAppointmentSrv, ToastService, DialogService, $http) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};
   //     console.log("alfo");
   
        //Index
        $scope.data = AgendaAppointmentSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron las citas!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.appointments[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las citas!');
            });

        //edit
        $scope.editAppointments = function (id) {
            $state.go('agenda/appointments/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('agenda/appointments/create');
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
                 $scope.data= AgendaAppointmentSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/agendas/appoinments/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteAppointments = function (appointments) {

           //console.log(authorId);
            DialogService.confirm('Eliminar citas', 'Desea continuar?')
            .then(() => {
                AgendaAppointmentSrv.delete({ id: appointments.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(appointments), 1);
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
    function AgendaAppointmentsShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaAppointmentsCreateCtrl($scope, $window, AgendaAppointmentSrv, ToastService, $state,moment,schedule,riskVariables,AuthSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/appointments/views/form.html';
        $scope.schedule= schedule;
        $scope.riskVariables=riskVariables;
        
        $scope.appointments = {
            user_id: AuthSrv.getAttribute('id')
        };
/**
       // console.log($scope.appointments);
        $scope.save = function() { 
            $scope.appointments.start_at = moment($scope.appointments.start_at).format('YYYY-MM-DD');
            $scope.appointments.ends_at = moment($scope.appointments.ends_at).format('YYYY-MM-DD'),
            $scope.appointments.accomplished_at = moment($scope.appointments.accomplished_at).format('YYYY-MM-DD'),
            $scope.appointments.accepted_at = moment($scope.appointments.accepted_at).format('YYYY-MM-DD'),
            console.log($scope.appointments); 
            
            AgendaAppointmentSrv.save($scope.appointments,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/appointments');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //CANCEL CREATE
       $scope.cancel = function (id) {
            $state.go('agenda/appointments');
        };
*/
    
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaAppointmentsEditCtrl($scope, $window, $stateParams, AgendaAppointmentSrv, ToastService, $state,moment, appointments,schedule, riskVariables) {
        
        $scope.formUrl = THEME_URL + '/app/modules/agenda/appointments/views/form.html';
        //console.log($stateParams.id);
        $scope.appointments = {};
        $scope.appointments = appointments;
         $scope.schedule= schedule;
        $scope.riskVariables=riskVariables;
        

        $scope.appointments.start_at = new Date($scope.appointments.start_at);
        $scope.appointments.ends_at = new Date($scope.appointments.ends_at);
        $scope.appointments.accomplished_at =new Date($scope.appointments.accomplished_at);
        $scope.appointments.accepted_at = new Date($scope.appointments.accepted_at);

        //console.log($scope.appointments);


 
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaAppointmentsFormCtrl($scope, $state, $window,moment,ToastService,AgendaAppointmentSrv) {


        $scope.save = function() {    
            $scope.appointments.start_at = moment($scope.appointments.start_at).format('YYYY-MM-DD');
            $scope.appointments.ends_at = moment($scope.appointments.ends_at).format('YYYY-MM-DD'),
            $scope.appointments.accomplished_at = moment($scope.appointments.accomplished_at).format('YYYY-MM-DD'),
            $scope.appointments.accepted_at = moment($scope.appointments.accepted_at).format('YYYY-MM-DD'),        
            
            AgendaAppointmentSrv.save($scope.appointments,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/appointments');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

         $scope.cancel = function (id) {
            $state.go('agenda/appointments');
        };

    }

})();