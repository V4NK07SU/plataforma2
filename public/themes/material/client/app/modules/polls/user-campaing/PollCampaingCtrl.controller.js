(function () {
    'use strict';

    angular.module('app.modules.polls.userCampaing')
      


        .controller('pollUserCampaingIndexCtrl', [
            '$scope','$mdDialog', '$window', '$state', '$http',
            'pollCampaings', 'PollCampaingSrv','polls', 'ToastService', 'DialogService',
            pollUserCampaingIndexCtrl])


       

    function pollUserCampaingIndexCtrl($scope,$mdDialog, $window, $state, $http, pollCampaings, PollCampaingSrv, polls, ToastService, DialogService) {

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


          // Abrir dialog con el servicio DialogService
         $scope.openCampaingDialogForm = function() {
           // Se abre un dialog desde template, 
           // parametro 1 es la ruta de la vista
          // parametro 2 son las opciones para el dialos
           DialogService.fromTemplate('app/modules/polls/user-campaing/views/modal-campaing', {
                    // Cierra el dialog haciendo click por fuera
                    clickOutsideToClose: true,
                    // cierra el dialog con la tecla scape
                    escapeToClose: true,
                    // hereda el scope del controlador que abre el dialog
                    scope: $scope,
                    preserveScope: true
                });
            };
 //Cancelar la creación de una pregunta
            $scope.cancelCampaing = function() {
                DialogService.hide();
            };

            $scope.polls= polls.data;

            console.log($scope.poll);





    }

})();