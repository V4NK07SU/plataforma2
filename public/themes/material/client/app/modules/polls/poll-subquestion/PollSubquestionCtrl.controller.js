(function() {
    'use strict';

    angular.module('app.modules.polls.pollSubquestion')
    .controller('PollSubquestionCtrl', ['$scope', '$window', PollSubquestionCtrl])
    .controller('PollSubquestionIndexCtrl', ['$scope', '$window', 'PollSubquestionSrv', 'ToastService', 'DialogService', '$state', '$http', PollSubquestionIndexCtrl])
    .controller('PollSubquestionCreateCtrl', ['$scope', '$window', 'PollSubquestionSrv', 'ToastService', '$state', '$http', PollSubquestionCreateCtrl])
    .controller('PollSubquestionEditCtrl', ['$scope', '$window', '$stateParams', 'pollSubquestion', 'PollSubquestionSrv', 'ToastService', '$state', '$http', PollSubquestionEditCtrl]);


    function PollSubquestionCtrl($scope, $window) {
    }


    function PollSubquestionIndexCtrl($scope, $window, PollSubquestionSrv, ToastService, DialogService, $state, $http) {
   
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
 

        $scope.editPollSubquestion = function (id) {
            console.log(id);
            $state.go('polls/poll-subquestion/edit', { id: id });
        };


        $scope.new = function () {
            $state.go('polls/poll-subquestion/create');
        };
   
  
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

    
    function PollSubquestionEditCtrl($scope, $window, $stateParams, pollSubquestion, PollSubquestionSrv, ToastService, $state, $http) {
       $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';

       //Consumiendo servicio REST de todas las preguntas. 
       $http.get(SITE_URL + '/api/polls/pollsubquestionsquestionsindex').success(function (res){
                //console.log(res);
                $scope.questions = res;
        }).error(function(res){
                 alert('error');
        });

        $scope.pollSubquestion = pollSubquestion;
        //console.log( $scope.pollSubquestion);
        //Guardar subpregunta editada.
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

        //Cancelar la edición de una subpregunta.
        $scope.cancel = function (id) {
            $state.go('polls/poll-subquestion');
        };
    }


    function PollSubquestionCreateCtrl($scope, $window, PollSubquestionSrv, ToastService, $state, $http) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';

        $scope.questions = [];

        //Consumiendo servicio REST de todas las preguntas. 
        $http.get(SITE_URL + '/api/polls/pollsubquestionsquestionsindex').success(function (res){
                //console.log(res);
                $scope.questions = res;
                console.log($scope.questions);
        }).error(function(res){
                 alert('error');
        });


        $scope.pollSubquestion = {};

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

        //Cancelar la creación de un tipo de pregunta.
        $scope.cancel = function (id) {
            $state.go('polls/poll-subquestion');
        };

    }
})();