(function() {
    'use strict';

    angular.module('app.modules.polls.pollItem')
        .controller('PollItemCtrl', ['$scope', '$window', PollItemCtrl])
        //.controller('PollItemIndexCtrl', ['$scope', '$window', 'PollItemsSrv', PollItemIndexCtrl])
        //.controller('PollItemFormCtrl', ['$scope', '$window', PollItemFormCtrl]);
        .controller('PollItemIndexCtrl', ['$scope', '$window', 'PollItemSrv', 'ToastService', 'DialogService', '$state', '$http', PollItemIndexCtrl])
        .controller('PollItemCreateCtrl', ['$scope', '$window', 'PollItemSrv', 'ToastService', '$state', '$http', 'PollSrv',PollItemCreateCtrl])
        .controller('PollItemEditCtrl', ['$scope', '$window', '$stateParams', 'pollItem', 'PollItemSrv', 'ToastService', '$state', '$http', 'PollSrv', PollItemEditCtrl]);


    function PollItemCtrl($scope, $window) {

    }


   	function PollItemIndexCtrl($scope, $window, PollItemSrv, ToastService, DialogService, $state, $http,PollSrv) {
         var vm = this;
        $scope.data = {};

            //Obtener los items de encuesta.
        $scope.data = PollItemSrv.get(
            function (response) {
                console.log(response);
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

    function PollItemCreateCtrl($scope, $window, PollItemSrv, ToastService, $state, $http, PollSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        //Obtener todas las encuestas
        $scope.poll = {};
        $scope.poll = PollSrv.get();
          
        $scope.pollItem = {};
        //Guardar un item.
        $scope.save = function () {
            PollItemSrv.save($scope.pollItem,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-item');
                }, function (response) {
                    //console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un item.
        $scope.cancel = function (id) {
            $state.go('polls/poll-item');
        };
    }
    function PollItemEditCtrl($scope, $window, $stateParams, pollItem, PollItemSrv, ToastService, $state, $http, PollSrv) {
         $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        //Obtener todas las encuestas
        $scope.poll = {};
        $scope.poll = PollSrv.get();
       
        $scope.pollItem = pollItem;
        //Guardar item editado.
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