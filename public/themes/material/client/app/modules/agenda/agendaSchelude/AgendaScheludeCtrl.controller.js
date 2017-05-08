(function() {
    'use strict';

    angular.module('app.modules.agenda.agendaSchelude')
      // .controller('AgendaAppointmentsCtrl', ['$scope', '$window', AgendaAppointmentsCtrl])
        .controller('AgendaScheludeIndexCtrl', ['$scope', '$window', '$state','ToastService', 'DialogService','$http',
          'AgendaServiceSrv', 
          AgendaScheludeIndexCtrl])
       // .controller('AgendaServiceShowCtrl', ['$scope', '$window', AgendaServiceShowCtrl])
        //.controller('AgendaServiceCreateCtrl', ['$scope', 
          //AgendaServiceCreateCtrl])
        //.controller('AgendaServiceEditCtrl', ['$scope',
         //'services',
          //AgendaServiceEditCtrl])
         .controller('AgendaScheludeFormCtrl', ['$scope', '$window', '$state', 'ToastService',
           'AgendaScheludeSrv',
          AgendaScheludeFormCtrl]);


    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function AgendaScheludeIndexCtrl($scope, $window, $state,moment,amMoment, AgendaScheludeSrv, ToastService, DialogService, $http) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = AgendaScheludeSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron las agendass!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.appointments[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las agendas!');
            });
    }

function AgendaScheludeFormCtrl($scope,$window, $state, ToastService, AgendaScheludeSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/agendaSchelude/views/form.html';

          $scope.save = function() {
          console.log($scope.services);
            AgendaScheludeSrv.save($scope.services,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/agendaSchelude');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }     

            //cancel
         $scope.cancel = function () {
            $state.go('agenda/agendaSchelude');
        };
     }            

        //edit
        /*$scope.editAppointments = function (id) {
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
            
            $http.get ( SITE_URL + '/api/agendas/appointments/search/' + keyword).success(function (res){

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


        };*/

            

    //}//hasta aqui

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    /*function AgendaAppointmentsShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     
    function AgendaAppointmentsCreateCtrl($scope, $window,moment, AgendaAppointmentSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/appointments/views/form.html';

        
        $scope.appointments = {};

        console.log($scope.appointments);
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

    
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     
    function AgendaAppointmentsEditCtrl($scope, $window, $stateParams,moment, AgendaAppointmentSrv, ToastService, $state, appointments) {
        
        $scope.formUrl = THEME_URL + '/app/modules/agenda/appointments/views/form.html';
        //console.log($stateParams.id);
        $scope.appointments = {};
        $scope.appointments = appointments;

        $scope.appointments.start_at = new Date($scope.appointments.start_at);
        $scope.appointments.ends_at = new Date($scope.appointments.ends_at);
        $scope.appointments.accomplished_at =new Date($scope.appointments.accomplished_at);
        $scope.appointments.accepted_at = new Date($scope.appointments.accepted_at);

        console.log($scope.appointments);

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

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     
    function AgendaAppointmentsFormCtrl($scope, $window) {

    }*/

})();