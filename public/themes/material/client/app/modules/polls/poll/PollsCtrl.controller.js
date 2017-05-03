(function() {
    'use strict';

    angular.module('app.modules.polls.poll')
        .controller('PollsCtrl', ['$scope', '$window', PollsCtrl])
        .controller('PollsIndexCtrl', ['$scope', '$window', 'PollSrv', 'ToastService', 'DialogService', '$state', '$http', PollsIndexCtrl])
        .controller('PollsFormCtrl', ['$scope', '$window', PollsFormCtrl])
        .controller('PollsCreateCtrl', ['$scope', '$window', 'PollSrv', 'ToastService', '$state', '$http', 'PollTypesSrv', PollsCreateCtrl])
        .controller('PollsEditCtrl', ['$scope', '$window', '$stateParams', 'poll', 'PollSrv', 'ToastService', '$state', '$http', 'PollTypesSrv', PollsEditCtrl]);
        function PollsCtrl($scope, $window) {

        }

        function PollsFormCtrl ($scope, $window) {

        }


   	function PollsIndexCtrl($scope, $window, PollSrv, ToastService, DialogService, $state, $http) {
        
        var vm = this;
        $scope.data = {};

        //Obtener las encuestas
        $scope.data = PollSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Encuestas!');
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Encuestas!');
            });
                     
        //Borrar una encuesta
        $scope.deletePoll = function (pollId) {
           console.log(pollId);
            DialogService.confirm('Eliminar Encuesta', 'Desea continuar?')
            .then(() => {
                PollSrv.delete({ id: pollId }, function (response) {
                     $scope.data = PollSrv.get();
                    //$scope.data.data.splice($scope.data.data.indexOf(pollId), 1);
                    //console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });
        };
 
        //Editar una encuesta.
        $scope.editPoll = function (id) {
            console.log(id);
            $state.go('polls/poll/edit', { id: id });
        };

        //Crear un una encuesta.
        $scope.new = function () {
            $state.go('polls/poll/create');
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

         //Buscar una encuesta
        $scope.search = function(keyword) {

            if (keyword == null || keyword == "") {
                 $scope.data = PollSrv.get();
                 console.log("keyword");
                 $scope.keyword = "";
            }
            if (keyword) {
                    $http.get(SITE_URL + '/api/polls/polls/search/' + keyword).success(function (res){
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function(res){
                    alert('error');
                });
            } 
        }
    }


      function PollsCreateCtrl($scope, $window, PollSrv, ToastService, $state, $http, PollTypesSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll/views/form.html';

        //Obtener todos los tipos de encuesta.
        $scope.pollType = {};
        $scope.pollType = PollTypesSrv.get();
       
        $scope.poll = {};
        //Guardar una encuesta editada.
        $scope.save = function() {  
            PollSrv.save($scope.poll,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
           
         //Cancelar la creación de encuesta.
        $scope.cancel = function (id) {
            $state.go('polls/poll');
        };
      }


      function PollsEditCtrl($scope, $window, $stateParams, poll, PollSrv, ToastService, $state, $http, PollTypesSrv) {
          $scope.formUrl = THEME_URL + '/app/modules/polls/poll/views/form.html';

        //console.log(pollQuestionType);
        $scope.poll = poll;

        //Obtener todos los tipos de encuesta.
        $scope.pollType = {};
        $scope.pollType = PollTypesSrv.get();
       
        //Guardar encuesta editada.
        $scope.save = function() {  
            PollSrv.save($scope.poll,
                function(response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de una encuesta
        $scope.cancel = function (id) {
            $state.go('polls/poll');
        };
      }
 })();