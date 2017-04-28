(function() {
    'use strict';

    angular.module('app.modules.polls.pollItem')
        .controller('PollItemCtrl', ['$scope', '$window', PollItemCtrl])
        //.controller('PollItemIndexCtrl', ['$scope', '$window', 'PollItemsSrv', PollItemIndexCtrl])
        //.controller('PollItemFormCtrl', ['$scope', '$window', PollItemFormCtrl]);
        .controller('PollItemIndexCtrl', ['$scope', '$window', 'PollItemSrv', 'ToastService', 'DialogService', '$state', '$http', PollItemIndexCtrl])
        .controller('PollItemCreateCtrl', ['$scope', '$window', 'PollItemSrv', 'ToastService', '$state', PollItemCreateCtrl])
        .controller('PollItemEditCtrl', ['$scope', '$window', '$stateParams', 'pollItem', 'PollItemSrv', 'ToastService', '$state', PollItemEditCtrl]);


    function PollItemCtrl($scope, $window) {

    }


   	function PollItemIndexCtrl($scope, $window, PollItemSrv, ToastService, DialogService, $state, $http) {
         var vm = this;
        $scope.data = {};

        //Obtener Items
        $scope.data = PollItemSrv.get();
        console.log($scope.data)
        //ToastService.info('Se han listado los Items!');

        //Borrar item
        $scope.deleteItem = function (pollItemId) {
            console.log(pollItemId);
            DialogService.confirm('Eliminar tipo de pregunta', 'Desea continuar?')
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
            $state.go('modules/polls/poll-items/edit', { id: id });
        };

        //Crear un item
        $scope.new = function () {
            $state.go('modules/polls/poll-items/create');
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

    function PollItemCreateCtrl($scope, $window, PollItemSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        
        $scope.optionsPoll = [

            {
                value: 1,
                text: ''

            },
           {
                value: 2,
                text: 'Encuesta Egresados'

            },
            {
                value: 3,
                text: 'Encuesta Estudiantes'

            },
            {
                value: 4,
                text: 'Encuesta Docentes'
            }
        ];


        $scope.pollItem = {};

        //Guardar un item.
        $scope.save = function () {
            PollItemSrv.save($scope.pollItem,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-items/index');
                }, function (response) {
                    //console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un item.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-items/index');
        };
    }
    function PollItemEditCtrl($scope, $window, $stateParams, pollItem, PollItemSrv, ToastService, $state) {
         $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

         
        $scope.optionsPoll = [

            {
                value: 1,
                text: ''

            },
           {
                value: 2,
                text: 'Encuesta Egresados'

            },
            {
                value: 3,
                text: 'Encuesta Estudiantes'

            },
            {
                value: 4,
                text: 'Encuesta Docentes'
            }
        ];

         //console.log(pollItem);
        $scope.pollItem = pollItem;

        //Guardar item editado.
        $scope.save = function () {
            PollItemSrv.save($scope.pollItem,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-items/index');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un item.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-items/index');
        };
    }

 })();