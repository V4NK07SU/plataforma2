(function () {
    'use strict';

    angular.module('app.modules.polls.userPoll')

        .controller('pollUserPollIndexCtrl', [
            '$scope','$mdDialog', '$window', '$state', '$http',
            'poll', 'PollSrv','pollType','pollItem','AuthSrv', 'ToastService', 'DialogService',
            pollUserPollIndexCtrl])

    function pollUserPollIndexCtrl($scope,$mdDialog, $window, $state, $http, poll, PollSrv, pollType,pollItem,AuthSrv, ToastService, DialogService) {

        var vm = this;
        $scope.data = {};

        //Obtener  las encuestas
        $scope.data = PollSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Encuestas!');
                    
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Encuestas!');
            });

       

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
                $scope.data = PollSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/polls/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }


          // Abrir dialog con el servicio DialogService
         $scope.openPollDialogForm = function() {
           // Se abre un dialog desde template, 
           // parametro 1 es la ruta de la vista
          // parametro 2 son las opciones para el dialos
           DialogService.fromTemplate('app/modules/polls/user-poll/views/modal-poll', {
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
           $scope.cancelPoll = function() {
                DialogService.hide();
            };

        



             /////////////////agregar//////////////////
             
          //Obtener los tipos de encuestas (Relación)
        $scope.pollType = pollType;

        //Obtener el ID del usuario Logeado.
        $scope.poll = {
            poll_items: [],
            user_id: AuthSrv.getAttribute('id')
        }

        //Obtener items par los checkbox
        $scope.items = pollItem.data;



    
        
        //Mostrar el JSON de las encuestas seleccionadas.
    
        $scope.toggle = function (item) {
            if (item.polls.length == 0) {
    
            var idx = -1;            
            angular.forEach($scope.poll.poll_items, function(v, i) {                
                if(v.id === item.id) {
                    idx = i;
                }
            });
             if (idx > -1) {
                $scope.poll.poll_items.splice(idx, 1);
            } else {
                $scope.poll.poll_items.push(item)
            }
            console.log($scope.poll.poll_items);
            }
        }
        
    


            //Guardar una campaña editada.
        $scope.save = function () {
            
            PollSrv.save($scope.poll,
                function (response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $scope.data = PollSrv.get();
                    DialogService.hide();
                    $state.go('polls/user-poll');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }


        



    }

})();