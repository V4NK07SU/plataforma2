(function() {
    'use strict';

    angular.module('app.modules.polls.pollSubquestion')
    .controller('PollSubquestionCtrl', ['$scope', '$window', PollSubquestionCtrl])
    .controller('PollSubquestionIndexCtrl', ['$scope', '$window', 'PollSubquestionSrv', 'ToastService', 'DialogService', '$state', '$http', PollSubquestionIndexCtrl])
    .controller('PollSubquestionCreateCtrl', ['$scope', '$window', 'PollSubquestionSrv', 'ToastService', '$state', PollSubquestionCreateCtrl])
    .controller('PollSubquestionEditCtrl', ['$scope', '$window', '$stateParams', 'pollSubquestion', 'PollSubquestionSrv', 'ToastService', '$state', PollSubquestionEditCtrl]);


    function PollSubquestionCtrl($scope, $window) {
    }


    function PollSubquestionIndexCtrl($scope, $window, PollSubquestionSrv, ToastService, DialogService, $state, $http) {
   
        var vm = this;
        $scope.data = {};



        $scope.data = PollSubquestionSrv.get();
        //ToastService.info('Se han listado los Tipos de Encuesta!');

                     

        $scope.deletePollSubquestion = function (pollSubquestionId) {
           //console.log(pollSubquestionId);
            DialogService.confirm('Eliminar tipo de encuesta', 'Desea continuar?')
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
            $state.go('modules/polls/poll-subquestions/edit', { id: id });
        };


        $scope.new = function () {
            $state.go('modules/polls/poll-subquestions/create');
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


                //Buscar un tipo de encuesta.
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

    
    function PollSubquestionEditCtrl($scope, $window, $stateParams, pollSubquestion, PollSubquestionSrv, ToastService, $state) {
         $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';


         $scope.optionsQuestion = [{
            value: 1,
            text: 1
        }, {
            value: 2,
            text: 2
        }, {
            value: 3,
            text: 3
        }];

         
        $scope.pollSubquestion = pollSubquestion;
        console.log($scope.pollSubquestion);

       
        $scope.save = function() {  
            PollSubquestionSrv.save($scope.pollSubquestion,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-subquestions/index');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-subquestions/index');
        };
    }


    function PollSubquestionCreateCtrl($scope, $window, PollSubquestionSrv, ToastService, $state) {
         $scope.formUrl = THEME_URL + '/app/modules/polls/poll-subquestion/views/form.html';

        $scope.optionsQuestion = [{
            value: 1,
            text: 1
        }, {
            value: 2,
            text: 2
        }, {
            value: 3,
            text: 3
        }];


         $scope.pollSubquestion = {};

      
        $scope.save = function() {  
            PollSubquestionSrv.save($scope.pollSubquestion,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-subquestions/index');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de un tipo de pregunta.
        $scope.cancel = function (id) {
            $state.go('modules/polls/poll-subquestions/index');
        };

    }
})();