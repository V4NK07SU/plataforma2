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
        'ToastService', 'poll',
         PollItemCreateCtrl])
    .controller('PollItemEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollItem', 'poll',
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
    }

    function PollItemCreateCtrl($scope, $window, ToastService, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

       //Obtener las encuestas (Relación)
        $scope.poll = poll;
    }
    function PollItemEditCtrl($scope, $window, $stateParams, ToastService, pollItem, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        //Obtener los datos del registro
        $scope.pollItem = pollItem;

       //Obtener las encuestas (Relación)
        $scope.poll = poll;
    }

    function PollItemFormCtrl($stateParams, $scope, $window, $state, PollItemSrv, ToastService) {
        
        //Guardar item.
        $scope.save = function () {
            PollItemSrv.save($scope.pollItem,
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