

(function() {
    'use strict';

    angular.module('app.modules.polls.pollAnswer')
    
    .controller('PollAnswersFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollAnswerSrv', 'ToastService',
         PollAnswersFormCtrl])
    .controller('PollAnswersIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollAnswerSrv', 'ToastService', 'DialogService',
         PollAnswersIndexCtrl])
    .controller('PollAnswersCreateCtrl', [
        '$scope', '$window',  
        'ToastService',
         PollAnswersCreateCtrl])
    .controller('PollAnswersEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollAnswer',
        PollAnswersEditCtrl]);


    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersIndexCtrl($scope, $window, $state, $http, PollAnswerSrv, ToastService, DialogService) {

        var vm = this;
        $scope.data = {};


        //Obtener respuestas.
        $scope.data = PollAnswerSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Respuestas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Respuestas!');
            });

                     
        //DELETE PollType
        $scope.deleteAnswer = function (pollAnswerId) {
           console.log(pollAnswerId);
            DialogService.confirm('Eliminar tipo de encuesta', 'Desea continuar?')
            .then(() => {
                PollAnswerSrv.delete({ id: pollAnswerId }, function (response) {
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
            console.log(id);
            $state.go('polls/pollsanswer/edit', { id: id });
        };

        //New Poll answer.
        $scope.new = function () {
            $state.go('polls/pollsanswer/create');
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

       //Buscar una respuesta.
        $scope.search = function(keyword){ 
            if(keyword == null || keyword == "")
            $scope.data = PollAnswerSrv.get();
            console.log("keyword");
            $scope.keyword = "";
        
       if(keyword){
           $http.get(SITE_URL + '/api/polls/pollanswers/search/' + keyword).success(function (res){
               $scope.data = res;
           }).error(function(res){
               alert('error');
           });
       };
       }
    }


    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersCreateCtrl($scope, $window, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-answer/views/form.html';
       
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    
    function PollAnswersEditCtrl($scope, $window, $stateParams, ToastService, pollAnswer) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-answer/views/form.html'; 
      
        $scope.pollanswer = pollAnswer;
   
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function PollAnswersFormCtrl($stateParams, $scope, $window, $state, PollAnswerSrv, ToastService) {

        $scope.save = function() {  
            PollAnswerSrv.save($scope.pollanswer,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/pollsanswer');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //CANCEL answer CREATE
        $scope.cancel = function (id) {
            $state.go('polls/pollsanswer');
        };



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