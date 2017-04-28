(function () {
    'use strict';

    angular.module('app.modules.polls.pollType')
        .controller('PollTypesCtrl', ['$scope', '$window', PollTypesCtrl])
        .controller('PollTypesIndexCtrl', ['$scope', '$window', 'PollTypesSrv', 'ToastService', 'DialogService', '$state', '$http', '$filter', PollTypesIndexCtrl])
        .controller('PollTypesFormCtrl', ['$scope', '$window', '$state', 'PollTypesSrv', 'ToastService', '$stateParams', PollTypesFormCtrl])
        .controller('PollTypesCreateCtrl', ['$scope', '$window', 'PollTypesSrv', 'ToastService', '$state', PollTypesCreateCtrl])
        .controller('PollTypesEditCtrl', ['$scope', '$window', '$stateParams', 'pollType', 'PollTypesSrv', 'ToastService', '$state', PollTypesEditCtrl]);


    function PollTypesCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollTypesIndexCtrl($scope, $window, PollTypesSrv, ToastService, DialogService, $state, $http, $filter) {
        var vm = this;
        $scope.data = {};


        //Obteniendo los tipos de encuesta, para enviarlos al formulario.
        $scope.data = PollTypesSrv.get();
        //ToastService.info('Se han listado los Tipos de Encuesta!');


        //Borrar tipos de encuesta
        $scope.deletePollType = function (pollTypeId) {
            //console.log(pollTypeId);
            DialogService.confirm('Eliminar tipo de encuesta', 'Desea continuar?')
                .then(() => {
                    PollTypesSrv.delete({ id: pollTypeId }, function (response) {
                        //$scope.data.data.splice($scope.data.data.indexOf(pollTypeId), 1);
                        $scope.data = PollTypesSrv.get();
                        //console.log(response);
                        ToastService.success(response.message);
                        //$state.go('modules/polls/poll-types/index');
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });

        };

        //Editar un tipo de encuesta.
        $scope.editPollType = function (id) {
            console.log(id);
            $state.go('modules/polls/poll-types/edit', { id: id });
        };

        //Crear un nuevo tipo de encuesta
        $scope.new = function () {
            $state.go('modules/polls/poll-types/create');
        };

        //Paginación del index principal.
        $scope.loadPage = function (url) {
            //console.log(url);
            $http.get(url).success(function (res) {
                //console.log(res);
                $scope.data = res;
            }).error(function (res) {
                alert('error');
            });
        };


        //Buscar un tipo de encuesta.
        $scope.search = function (keyword) {

            if (keyword == null || keyword == "") {
                $scope.data = PollTypesSrv.get();
                console.log("keyword");
                $scope.keyword = "";

            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/polltypes/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }

    }



    function PollTypesEditCtrl($scope, $window, $stateParams, pollType, PollTypesSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/views/form.html';

        $scope.polltype = pollType;
        console.log($scope.polltype);

        //Guardar tipo de encuesta editada.
        $scope.save = function () {
            PollTypesSrv.save($scope.polltype,
                function (response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-types/index');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un tipo de encuesta.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-types/index');
        };
    }


    function PollTypesCreateCtrl($scope, $window, PollTypesSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/views/form.html';

        $scope.polltype = {};

        //Guardar un nuevo tipo de encuesta.
        $scope.save = function () {
            PollTypesSrv.save($scope.polltype,
                function (response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-types/index');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un tipo de encuesta
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-types/index');
        };

    }


    function PollTypesFormCtrl($scope, $window, $state, PollTypesSrv, ToastService, $stateParams) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/views/form.html';
        //console.log($stateParams.id);
        //console.log($scope.formUrl);

        $scope.polltype = PollTypesSrv.get({ id: $stateParams.id },
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function (v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.polltype);

    }
})();