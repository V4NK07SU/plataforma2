(function () {
    'use strict';

    angular.module('app.modules.polls.pollQuestion')
        .controller('PollQuestionCtrl', ['$scope', '$window', PollQuestionCtrl])
        .controller('PollQuestionIndexCtrl', ['$scope', '$window', 'PollQuestionSrv', 'ToastService', 'DialogService', '$state', '$http', PollQuestionIndexCtrl])
        .controller('PollQuestionCreateCtrl', ['$scope', '$window', 'PollQuestionSrv', 'ToastService', '$state', PollQuestionCreateCtrl])
        .controller('PollQuestionEditCtrl', ['$scope', '$window', '$stateParams', 'pollQuestion', 'PollQuestionSrv', 'ToastService', '$state', PollQuestionEditCtrl]);

    function PollQuestionCtrl($scope, $window) {

    }

    function PollQuestionFormCtrl($scope, $window) {

    }

    function PollQuestionIndexCtrl($scope, $window, PollQuestionSrv, ToastService, DialogService, $state, $http) {
        var vm = this;
        $scope.data = {};

        //Obtener  preguntas
        $scope.data = PollQuestionSrv.get();
        //ToastService.info('Se han listado las Preguntas!');

        //DELETE Preguntas
        $scope.deletePollQuestion = function (pollQuestionId) {
            console.log(pollQuestionId);
            DialogService.confirm('Eliminar tipo de pregunta', 'Desea continuar?')
                .then(() => {
                    PollQuestionSrv.delete({ id: pollQuestionId }, function (response) {
                        $scope.data = PollQuestionSrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(pollQuestionId), 1);
                        //console.log(response);
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar pregunta.
        $scope.editPollQuestion = function (id) {
            console.log(id);
            $state.go('modules/polls/poll-questions/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
        $scope.new = function () {
            $state.go('modules/polls/poll-questions/create');
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
                $scope.data = PollQuestionSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollquestions/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }


    }


    function PollQuestionCreateCtrl($scope, $window, PollQuestionSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question/views/form.html';

        $scope.optionsItem = [{
            valueItem: 1,
            text: 'Datos personales'

        },
        {
            valueItem: 2,
            text: 'Datos laborales'

        },
        {
            valueItem: 3,
            text: 'Estudios'

        },

        {
            valueItem: 4,
            text: 'Referencias'

        }
        ];

        $scope.optionsQuestionType = [{
            valueType: 5,
            text: 'De respuesta abierta'

        },
        {
            valueType: 6,
            text: 'De respuesta cerrada'

        },
        {
            valueType: 7,
            text: 'De seleccion multiple'

        },

        {
            valueType: 8,
            text: 'De seleccion unica'

        }
        ];

    }

    function PollQuestionEditCtrl($scope, $window, $stateParams, pollQuestion, PollQuestionSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question/views/form.html';

        //console.log(pollQuestion);
        $scope.pollQuestion = pollQuestion;
       

        $scope.optionsItem = [{
            valueItem: 1,
            text: 'Datos personales'

        },
        {
            valueItem: 2,
            text: 'Datos laborales'

        },
        {
            valueItem: 3,
            text: 'Estudios'

        },

        {
            valueItem: 4,
            text: 'Referencias'

        }
        ];



        $scope.optionsQuestionType = [{
            valueType: 5,
            text: 'De respuesta abierta'

        },
        {
            valueType: 6,
            text: 'De respuesta cerrada'

        },
        {
            valueType: 7,
            text: 'De seleccion multiple'

        },

        {
            valueType: 8,
            text: 'De seleccion unica'

        }
        ];


        //Guardarpregunta editada.
        $scope.save = function () {
            PollQuestionSrv.save($scope.pollQuestion,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-questions/index');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición una pregunta de encuesta.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-questions/index');
        };
    }

})();