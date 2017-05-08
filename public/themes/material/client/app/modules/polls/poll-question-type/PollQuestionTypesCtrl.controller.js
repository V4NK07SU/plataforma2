(function () {
    'use strict';

    angular.module('app.modules.polls.pollQuestionType')

    .controller('PollQuestionTypesFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollQuestionTypeSrv', 'ToastService',
         PollQuestionTypesFormCtrl])
    .controller('PollQuestionTypeIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollQuestionTypeSrv', 'ToastService', 'DialogService',
         PollQuestionTypeIndexCtrl])
    .controller('PollQuestionTypeCreateCtrl', [
        '$scope', '$window',  
        'ToastService',
         PollQuestionTypeCreateCtrl])
    .controller('PollQuestionTypeEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollQuestionType',
        PollQuestionTypeEditCtrl]);

 
    function PollQuestionTypeIndexCtrl($scope, $window, $state, $http, PollQuestionTypeSrv, ToastService, DialogService) {
        var vm = this;
        $scope.data = {};

        //Obtener tipos de pregunta.
        $scope.data = PollQuestionTypeSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron Tipos de Pregunta!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los Tipos de Pregunta!');
            });


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
            $state.go('polls/poll-question-type/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
        $scope.new = function () {
            $state.go('polls/poll-question-type/create');
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

    function PollQuestionTypeCreateCtrl($scope, $window, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question-type/views/form.html';
    }

    function PollQuestionTypeEditCtrl($scope, $window, $stateParams, ToastService, pollQuestionType) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-question-type/views/form.html';

        //console.log(pollQuestionType);
        $scope.pollQuestionType = pollQuestionType;


    }

      function PollQuestionTypesFormCtrl($stateParams, $scope, $window, $state, PollQuestionTypeSrv, ToastService) {
      
        //Guardar tipo de pregunta editada.
        $scope.save = function () {
            PollQuestionTypeSrv.save($scope.pollQuestionType,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-question-type');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un tipo de pregunta.
        $scope.cancel = function (id) {
            $state.go('polls/poll-question-type');
        };
    }
})();