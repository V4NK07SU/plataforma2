(function () {
    'use strict';

    angular.module('app.modules.polls.pollQuestion')
        .controller('PollQuestionCtrl', ['$scope', '$window', PollQuestionCtrl])
        .controller('PollQuestionIndexCtrl', ['$scope', '$window', 'PollQuestionSrv', 'ToastService', 'DialogService', '$state', '$http', PollQuestionIndexCtrl])
        .controller('PollQuestionCreateCtrl', ['$scope', '$window', 'PollQuestionSrv', 'ToastService', '$state', '$http', 'PollItemSrv', 'PollQuestionTypeSrv', PollQuestionCreateCtrl])
        .controller('PollQuestionEditCtrl', ['$scope', '$window', '$stateParams', 'pollQuestion', 'PollQuestionSrv', 'ToastService', '$state', '$http', 'PollItemSrv', 'PollQuestionTypeSrv', PollQuestionEditCtrl]);

    function PollQuestionCtrl($scope, $window) {

    }

    function PollQuestionFormCtrl($scope, $window) {

    }

    function PollQuestionIndexCtrl($scope, $window, PollQuestionSrv, ToastService, DialogService, $state, $http) {
        var vm = this;
        $scope.data = {};

        //Obtener  preguntas
        $scope.data = PollQuestionSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Preguntas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Preguntas!');
            });

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
            $state.go('polls/poll-question/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
        $scope.new = function () {
            $state.go('polls/poll-question/create');
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


    function PollQuestionCreateCtrl($scope, $window, PollQuestionSrv, ToastService, $state, $http, PollItemSrv, PollQuestionTypeSrv) {
       $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question/views/form.html';

       //Obtener el listado de los items
       $scope.pollItems = {};
       $scope.pollItems = PollItemSrv.get();
       
       //Obtener el listados de los tipos de encuesta.
       $scope.pollTypes = {};
       $scope.pollTypes = PollQuestionTypeSrv.get()
     


        $scope.pollQuestion = {};
         //Guardar una nueva pregunta.
        $scope.save = function () {
            PollQuestionSrv.save($scope.pollQuestion,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-question');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

         //Cancelar la creación de una  pregunta.
        $scope.cancel = function (id) {
            $state.go('polls/poll-question');
        };

    }

    function PollQuestionEditCtrl($scope, $window, $stateParams, pollQuestion, PollQuestionSrv, ToastService, $state, $http,  PollItemSrv, PollQuestionTypeSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question/views/form.html';

        //Obtener el listado de los items
        $scope.pollItems = {};
        $scope.pollItems = PollItemSrv.get();
       
        //Obtener el listados de los tipos de encuesta.
        $scope.pollTypes = {};
        $scope.pollTypes = PollQuestionTypeSrv.get()
     


        $scope.pollQuestion = pollQuestion;

        //Guardar pregunta editada.
        $scope.save = function () {
            PollQuestionSrv.save($scope.pollQuestion,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-question');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición una pregunta de encuesta.
        $scope.cancel = function (id) {
            $state.go('polls/poll-question');
        };
    }

})();