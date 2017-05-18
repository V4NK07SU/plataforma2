(function() {
    'use strict';

    angular.module('app.modules.polls.pollItem')
        .controller('PollItemFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollItemSrv', 'ToastService',
         PollItemFormCtrl])
    .controller('PollItemIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollItemSrv', 'ToastService', 'DialogService',
         PollItemIndexCtrl])
    .controller('PollItemCreateCtrl', [
        '$scope', '$window',  
        'ToastService', 'polls',
         PollItemCreateCtrl])
    .controller('PollItemEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollItem',
        PollItemEditCtrl]);

   	function PollItemIndexCtrl($scope, $window, $state, $http, PollItemSrv, ToastService, DialogService) {
        var vm = this;
        $scope.data = {};
        
        //Obtener los items de encuesta.
        $scope.data = PollItemSrv.get(
            function (response) {
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron los Items de Encuesta!');
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Items!');
            });
     

        //Borrar item
        $scope.deleteItem = function (pollItemId) {
            console.log(pollItemId);
            DialogService.confirm('Eliminar Item de Encuesta', 'Desea continuar?')
                .then(() => {
                    PollItemSrv.delete({ id: pollItemId }, function (response) {
                        $scope.data = PollItemSrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(pollItemId), 1);
                        //console.log(response);
                        ToastService.success(response.message); 
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar un item
        $scope.editItem = function (id) {
            console.log(id);
            $state.go('polls/poll-item/edit', { id: id });
        };

        //Crear un item
        $scope.new = function () {
            $state.go('polls/poll-item/create');
        };

        //Paginación de la pagina principal.
        $scope.loadPage = function (url) {
            //console.log(url);
            $http.get(url).success(function (res) {
                //console.log(res);
                $scope.data = res;
            }).error(function (res) {
                alert('error');
            });
        };

        //Buscar un tipo de pregunta.
        $scope.search = function (keyword) {

            if (keyword == null || keyword == "") {
                $scope.data = PollItemSrv.get();
                console.log("keyword");
                $scope.keyword = "";

            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollitems/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }

        //Abrir el dialogo con las respectivas preguntas del item.
        $scope.openQuestionsDialogForm = function (item) {
             $scope.item = item;
             // Se abre un dialog desde template, 
             // parametro 1 es la ruta de la vista
             // parametro 2 son las opciones para el dialos
             DialogService.fromTemplate('app/modules/polls/poll-item/views/modal-item-questions', {
                 // Cierra el dialog haciendo click por fuera
                 clickOutsideToClose: true,
                 // cierra el dialog con la tecla scape  
                 escapeToClose: true,
                 // hereda el scope del controlador que abre el dialog
                 scope: $scope,
                 preserveScope: true
             });
        };


        

            //Cancelar la vista (Modal) de visualizacion de  preguntas
            $scope.cancelViewQuestions = function() {
                DialogService.hide();
            };
    }

    function PollItemCreateCtrl($scope, $window, ToastService, polls) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';


    }
    function PollItemEditCtrl($scope, $window, $stateParams, ToastService, pollItem) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

    
        //Obtener datos de la campaña
        $scope.item = pollItem; 
  
 
    }

    function PollItemFormCtrl($stateParams, $scope, $window, $state, PollItemSrv, ToastService) {
        
        //Guardar item.
        $scope.save = function () {
            PollItemSrv.save($scope.item,
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