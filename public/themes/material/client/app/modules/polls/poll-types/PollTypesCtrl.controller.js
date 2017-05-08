(function () {
    'use strict';

    angular.module('app.modules.polls.pollType')
        .controller('PollTypesFormCtrl', [
            '$stateParams', '$scope', '$window', '$state',
            'PollTypeSrv', 'ToastService',
            PollTypesFormCtrl])
        .controller('PollTypesIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'PollTypeSrv', 'ToastService', 'DialogService',
            PollTypesIndexCtrl])
        .controller('PollTypesCreateCtrl', [
            '$scope', '$window',
            'ToastService',
            PollTypesCreateCtrl])
        .controller('PollTypesEditCtrl', [
            '$scope', '$window', '$stateParams',
            'ToastService', 'pollType',
            PollTypesEditCtrl]);

    function PollTypesIndexCtrl($scope, $window, $state, $http, PollTypeSrv, ToastService, DialogService) {
        var vm = this;
        $scope.data = {};

        //Obtener tipos de encuesta
        $scope.data = PollTypeSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron Tipos de Encuesta!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Tipos den Encuestas!');
            });

        //Borrar tipos de encuesta
        $scope.deletePollType = function (pollTypeId) {
            //console.log(pollTypeId);
            DialogService.confirm('Eliminar Tipo de Encuesta', 'Desea continuar?')
                .then(() => {
                    PollTypeSrv.delete({ id: pollTypeId }, function (response) {
                        $scope.data = PollTypeSrv.get();
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar un tipo de encuesta.
        $scope.editPollType = function (id) {
            console.log(id);
            $state.go('polls/poll-type/edit', { id: id });
        };

        //Crear un nuevo tipo de encuesta
        $scope.new = function () {
            $state.go('polls/poll-type/create');
        };

        //Paginación del index principal.
        $scope.loadPage = function (url) {
            $http.get(url).success(function (res) {
                $scope.data = res;
            }).error(function (res) {
                alert('error');
            });
        };

        //Buscar un tipo de encuesta.
        $scope.search = function (keyword) {
            if (keyword == null || keyword == "") {
                $scope.data = PollTypeSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/polltypes/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }
    }

    function PollTypesEditCtrl($scope, $window, $stateParams, ToastService, pollType) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/views/form.html';

        //Obtener los registros del campo
        $scope.pollType = pollType;
    }

    function PollTypesCreateCtrl($scope, $window, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/views/form.html';
    }

    function PollTypesFormCtrl($stateParams, $scope, $window, $state, PollTypeSrv, ToastService) {
     
        //Guardar un tipo de encuesta.
        $scope.save = function () {
            PollTypeSrv.save($scope.pollType,
                function (response) {
                    ToastService.success(response.message);
                    $state.go('polls/poll-type');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un tipo de encuesta
        $scope.cancel = function () {
            $state.go('polls/poll-type');
        };
    }
})();