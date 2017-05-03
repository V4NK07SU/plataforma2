(function () {
    'use strict';

    angular.module('app.modules.polls.pollQuestionType')
        .controller('PollQuestionTypesCtrl', ['$scope', '$window', PollQuestionTypeCtrl])
        .controller('PollQuestionTypeIndexCtrl', ['$scope', '$window', 'PollQuestionTypeSrv', 'ToastService', 'DialogService', '$state', '$http', PollQuestionTypeIndexCtrl])
        .controller('PollQuestionTypeCreateCtrl', ['$scope', '$window', 'PollQuestionTypeSrv', 'ToastService', '$state', PollQuestionTypeCreateCtrl])
        .controller('PollQuestionTypeEditCtrl', ['$scope', '$window', '$stateParams', 'pollQuestionType', 'PollQuestionTypeSrv', 'ToastService', '$state', PollQuestionTypeEditCtrl]);

    function PollQuestionTypeCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollQuestionTypeIndexCtrl($scope, $window, PollQuestionTypeSrv, ToastService, DialogService, $state, $http) {
        var vm = this;
        $scope.data = {};

        //Obtener tipos de pregunta
        $scope.data = PollQuestionTypeSrv.get();
        //ToastService.info('Se han listado los Tipos de Pregunta!');

        //DELETE deletePollQuestionType
        $scope.deletePollQuestionType = function (pollQuestionTypeId) {
            console.log(pollQuestionTypeId);
            DialogService.confirm('Eliminar tipo de pregunta', 'Desea continuar?')
                .then(() => {
                    PollQuestionTypeSrv.delete({ id: pollQuestionTypeId }, function (response) {
                        $scope.data = PollQuestionTypeSrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(pollQuestionTypeId), 1);
                        //console.log(response);
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar los tipos de pregunta.
        $scope.editPollQuestionType = function (id) {
            console.log(id);
            $state.go('modules/polls/poll-question-types/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
        $scope.new = function () {
            $state.go('modules/polls/poll-question-types/create');
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
                $scope.data = PollQuestionTypeSrv.get();
                console.log("keyword");
                $scope.keyword = "";

            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollquestiontypes/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }

    }

    function PollQuestionTypeCreateCtrl($scope, $window, PollQuestionTypeSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question-type/views/form.html';

        $scope.pollQuestionType = {};

        //Guardar un tipo de pregunta nuevo.
        $scope.save = function () {
            PollQuestionTypeSrv.save($scope.pollQuestionType,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-question-types/index');
                }, function (response) {
                    //console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un tipo de pregunta.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-question-types/index');
        };
    }

    function PollQuestionTypeEditCtrl($scope, $window, $stateParams, pollQuestionType, PollQuestionTypeSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question-type/views/form.html';

        //console.log(pollQuestionType);
        $scope.pollQuestionType = pollQuestionType;

        //Guardar tipo de encuesta editada.
        $scope.save = function () {
            PollQuestionTypeSrv.save($scope.pollQuestionType,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-question-types/index');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un tipo de encuesta.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-question-types/index');
        };
    }

})();