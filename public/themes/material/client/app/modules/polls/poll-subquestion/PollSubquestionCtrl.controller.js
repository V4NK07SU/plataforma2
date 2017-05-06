(function() {
    'use strict';

    angular.module('app.modules.polls.pollSubquestion')
    .controller('PollSubquestionsFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollSubquestionSrv', 'PollQuestionSrv', 'ToastService',
         PollSubquestionsFormCtrl])
    .controller('PollSubquestionIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollSubquestionSrv', 'ToastService', 'DialogService',
         PollSubquestionIndexCtrl])
    .controller('PollSubquestionCreateCtrl', [
        '$scope', '$window',  
        'ToastService', 'questions',
         PollSubquestionCreateCtrl])
    .controller('PollSubquestionEditCtrl', [
        '$scope', '$window', '$stateParams',
        'questions', 'ToastService', 'pollSubquestion',
        PollSubquestionEditCtrl]);

    function PollSubquestionIndexCtrl($scope, $window, $state, $http, PollSubquestionSrv, ToastService, DialogService) {
   
        var vm = this;
        $scope.data = {};

        //Obtener las Subpreguntas
        $scope.data = PollSubquestionSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Subpreguntas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Subpreguntas!');
            });
                     
        //Borrar una subpregunta.
        $scope.deletePollSubquestion = function (pollSubquestionId) {
           //console.log(pollSubquestionId);
            DialogService.confirm('Eliminar Subpregunta', 'Desea continuar?')
            .then(() => {
                PollSubquestionSrv.delete({ id: pollSubquestionId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(pollSubquestionId), 1);
                    $scope.data = PollSubquestionSrv.get();
                    //console.log(response);
                    ToastService.success(response.message);
                    //$state.go('modules/polls/poll-types/index');
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });

        };
 
        //Editar una subpregunta
        $scope.editPollSubquestion = function (id) {
            console.log(id);
            $state.go('polls/poll-subquestion/edit', { id: id });
        };

        //Crear una nueba Subpregunta.
        $scope.new = function () {
            $state.go('polls/poll-subquestion/create');
        };
        
        //paginación
        $scope.loadPage = function (url) {
            //console.log(url);
            $http.get(url).success(function (res) {
                //console.log(res);
                $scope.data = res;              
            }).error(function (res) {
                alert('error');
            });
        };


        //Buscar un sunpreguntas de encuesta.
        $scope.search = function(keyword) {

            if (keyword == null || keyword == "") {
                 $scope.data = PollSubquestionSrv.get();
                 console.log("keyword");
                 $scope.keyword = "";
            
            }
            if (keyword) {
                    $http.get(SITE_URL + '/api/polls/pollsubquestions/search/' + keyword).success(function (res){
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function(res){
                    alert('error');
                });
            } 
        }
        
    }

    function PollSubquestionEditCtrl($scope, $window, $stateParams, questions, ToastService, pollSubquestion) {
       $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';

       //Obtener los datos del registro
        $scope.pollSubquestion = pollSubquestion;

        //obtener preguntas (Relación)
        $scope.questions = questions;
        console.log(questions);
    }

    function PollSubquestionCreateCtrl($scope, $window,  ToastService, questions) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';

        //obtener preguntas (Relación)
        $scope.questions = questions;
        console.log(questions);
    }

    function PollSubquestionsFormCtrl($stateParams, $scope, $window, $state, PollSubquestionSrv,PollQuestionSrv, ToastService) {

        //Guardar una nueva subpregunta
        $scope.save = function() {  
            PollSubquestionSrv.save($scope.pollSubquestion,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-subquestion');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de una subpregunta.
        $scope.cancel = function () {
            $state.go('polls/poll-subquestion');
        };

    }
})();