(function () {
    'use strict';

    angular.module('app.modules.polls.pollCampaing')
        .controller('PollCampaingFormCtrl', [
            '$stateParams', '$scope', '$window', '$state', 
            'PollCampaingSrv', 'ToastService',
         PollCampaingFormCtrl])
        .controller('PollCampaingIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'pollCampaings', 'PollCampaingSrv', 'ToastService', 'DialogService',
            PollCampaingIndexCtrl])
        .controller('PollCampaingEditCtrl', [
            '$scope', '$window', 'moment', '$stateParams', '$state',
            'pollCampaings', 'PollCampaingSrv', 'ToastService', 'pollCampaings',
            PollCampaingEditCtrl])
        .controller('PollCampaingCreateCtrl', [
            '$scope', '$window', '$state', 'moment',
            'PollCampaingSrv', 'ToastService', 'polls',
            PollCampaingCreateCtrl]);

    function PollCampaingIndexCtrl($scope, $window, $state, $http, pollCampaings, PollCampaingSrv, ToastService, DialogService) {

        var vm = this;
        $scope.data = {};

        //Obtener  las campañas de encuesta
        $scope.data = PollCampaingSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Campañas de Encuesta!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Campañas de Encuesta!');
            });


        //Eliminar una campaña
        $scope.deletePollCampaing = function (pollCampaingId) {
            //console.log(pollCampaingId);
            DialogService.confirm('Eliminar la Campaña de Encuesta', 'Desea continuar?')
                .then(() => {
                    PollCampaingSrv.delete({ id: pollCampaingId }, function (response) {
                        $scope.data = PollCampaingSrv.get();
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar una camapaña.
        $scope.editPollCampaing = function (id) {
            console.log(id);
            $state.go('polls/poll-campaing/edit', { id: id });
        };

        //Crear una campaña nueva .
        $scope.new = function () {
            $state.go('polls/poll-campaing/create');
        };

        //Paginación de la pagina principal.
        $scope.loadPage = function (url) {
            $http.get(url).success(function (res) {
                $scope.data = res;
            }).error(function (res) {
                alert('error');
            });
        };

        //Buscar una campaña.
        $scope.search = function (keyword) {
            if (keyword == null || keyword == "") {
                $scope.data = PollCampaingSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollcampaings/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }
    }


    function PollCampaingCreateCtrl($scope, $window, $state, moment, PollCampaingSrv, ToastService, polls) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';
        
        $scope.campaing = {
            polls: []
        };

        //Obtener los titulos de las encuestas para los CheckBox.
        $scope.polls = polls.data;  

        //Marcar los checkbox dependiendo de las encuestas a la que pertenezca la campaña
        $scope.exists = function (poll) {
            var ret =false;
            angular.forEach($scope.campaing.polls, function(v, i) {                
                if(v.id === poll.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        
        //Mostrar el JSON de las encuestas seleccionadas.
        $scope.toggle = function (poll) {
            var idx = -1;            
            angular.forEach($scope.campaing.polls, function(v, i) {                
                if(v.id === poll.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.campaing.polls.splice(idx, 1);
            } else {
                $scope.campaing.polls.push(poll)
            }
            console.log($scope.campaing.polls);
        };
    }

    function PollCampaingEditCtrl($scope, $window, moment, $stateParams, $state, pollCampaings, PollCampaingSrv, ToastService, ) {
       
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';
        var vm = this;  
        vm.data = pollCampaings; 

        //Obtener datos de la encuesta sobre el registro de la campaña.
        $scope.polls = vm.data.polls;
        //Obtener datos de la campaña
        $scope.campaing = vm.data.campaing;

        //Marcar los checkbox dependiendo de las encuestas a la que pertenezca la campaña
        $scope.exists = function (poll) {
            var ret =false;
            angular.forEach($scope.campaing.polls, function(v, i) {                
                if(v.id === poll.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

       //Mostrar el JSON de las encuestas seleccionadas.
        $scope.toggle = function (poll) {
            var idx = -1;            
            angular.forEach($scope.campaing.polls, function(v, i) {                
                if(v.id === poll.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.campaing.polls.splice(idx, 1);
            } else {
                $scope.campaing.polls.push(poll)
            }
            console.log($scope.campaing.polls);
        };

        $scope.campaing.start_at = new Date($scope.campaing.start_at);
        $scope.campaing.finish_at = new Date($scope.campaing.finish_at);

    }

    function PollCampaingFormCtrl($stateParams, $scope, $window, $state, PollCampaingSrv, ToastService){

        //Guardar una campaña editada.
        $scope.save = function () {
            $scope.campaing.start_at = moment($scope.campaing.start_at).format('YYYY-MM-DD');
            $scope.campaing.finish_at = moment($scope.campaing.finish_at).format('YYYY-MM-DD');
            PollCampaingSrv.save($scope.campaing,
                function (response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-campaing');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar 
        $scope.cancel = function () {
            $state.go('polls/poll-campaing');
        };
    }
})();