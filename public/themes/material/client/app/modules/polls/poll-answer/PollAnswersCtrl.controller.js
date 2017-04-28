/**
 *
 */
/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.polls.poll-answer')
        .controller('PollAnswersCtrl', ['$scope', '$window', PollAnswersCtrl])
        .controller('PollAnswersIndexCtrl', ['$scope', '$window', 'PollAnswersSrv', 'ToastService', 'DialogService', '$state', '$http', PollAnswersIndexCtrl])
        .controller('PollAnswersFormCtrl', ['$scope', '$window', '$state', 'PollAnswersSrv', 'ToastService', '$stateParams', PollAnswersFormCtrl])
        .controller('PollAnswersCreateCtrl', ['$scope', '$window', 'PollAnswersSrv', 'ToastService', '$state', PollAnswersCreateCtrl])
        .controller('PollAnswersEditCtrl', ['$scope', '$window', '$stateParams', 'answer', 'PollAnswersSrv', 'ToastService', '$state', PollAnswersEditCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersIndexCtrl($scope, $window, PollAnswersSrv, ToastService, DialogService, $state, $http) {

          var vm = this;
        $scope.data = {};


        //INDEX
        $scope.data = PollAnswersSrv.get();
        //ToastService.info('Se han listado los Tipos de Encuesta!');

                     
        //DELETE PollType
        $scope.deleteAnswer = function (pollAnswerId) {
           console.log(pollAnswerId);
            DialogService.confirm('Eliminar tipo de encuesta', 'Desea continuar?')
            .then(() => {
                PollAnswersSrv.delete({ id: pollAnswerId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(pollAnswerId), 1);
                    console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });
        };
 
        //EDIT answer.
        $scope.editAnswer = function (id) {
            //console.log(id);
            $state.go('polls/poll-answer/edit', { id: id });
        };

        //New Poll answer.
        $scope.new = function () {
        $state.go('polls/poll-answer/create');
        };
   
        //Paginate.
        $scope.loadPage = function (url) {
            //console.log(url);
            $http.get(url).success(function (res) {
                //console.log(res);
                $scope.data = res;              
            }).error(function (res) {
                alert('error');
            });
        };

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersCreateCtrl($scope, $window, PollAnswersSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-answer/views/form.html';
        $scope.pollanswer = {};

        console.log($scope.pollanswer);
        $scope.save = function() {  
            PollAnswersSrv.save($scope.pollanswer,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-answer/index');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //CANCEL answer CREATE
        $scope.cancel = function (id) {
            $state.go('polls/poll-answer');
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersEditCtrl($scope, $window, $stateParams,answer, PollAnswersSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-answer/views/form.html'; //para mostrar vista
     
        $scope.pollanswer = answer; //esta variable answer va arriba en la injeccion
        console.log($scope.pollanswer);

        //Guardar tipo de encuesta editada.
        $scope.save = function() {  
            PollAnswersSrv.save($scope.pollanswer,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-answer/edit');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //CANCELAR LA EDICION.
        $scope.cancel = function (id) {
            $state.go('polls/poll-answer');
        };
 
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersFormCtrl($scope, $window) {

   $scope.formUrl = THEME_URL + '/app/modules/polls/poll-answer/views/form.html';
 
        console.log($scope.pollanswer);

        $scope.title = '';

        $scope.description = '';

        $scope.value = '';

      $scope.optionsValue = [{
                value: 1,
                text: 'Rojo'
                  
         
            },
            {
                value: 2,
                text: 'Amarillo'

            },
            {
                value: 3,
                text: 'Verde'

            }
        ];                                                          
    }              

        

})();