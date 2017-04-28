/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.evaluation.commitmentsAnswer')
        .controller('EvaluationCommitmentsAnswerCtrl', ['$scope', '$window', EvaluationCommitmentsAnswerCtrl])
        .controller('EvaluationCommitmentsAnswerIndexCtrl', [
            '$scope', '$window', '$state', 'EvaluationCommitmentsAnswerSrv', 'ToastService', 'DialogService','$http',
            EvaluationCommitmentsAnswerIndexCtrl])
        .controller('EvaluationCommitmentsAnswerShowCtrl', ['$scope', '$window', EvaluationCommitmentsAnswerShowCtrl])
        .controller('EvaluationCommitmentsAnswerCreateCtrl', ['$scope', '$window', EvaluationCommitmentsAnswerCreateCtrl])
        .controller('EvaluationCommitmentsAnswerEditCtrl', [
            '$scope', '$window', '$stateParams', 'EvaluationCommitmentsAnswerSrv', 'ToastService', '$state', 'answer',
            EvaluationCommitmentsAnswerEditCtrl])
        .controller('EvaluationCommitmentsAnswerFormCtrl', ['$scope', '$window', EvaluationCommitmentsAnswerFormCtrl]);

    /**
     *e
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerIndexCtrl($scope, $window, $state, EvaluationCommitmentsAnswerSrv, ToastService, DialogService,$http) {


        var vm = this;
        vm.data = {};

        $scope.current_page = null;
        $scope.from = null;
        //$scope.last_page = null
        $scope.next_page = null;
        $scope.total = null;
        $scope.per_page = null;
        $scope.last_page = null;
        $scope.next_page_url = null;
        $scope.prev_page_url = null;
        $scope.from = null;
        $scope.to = null;
        $scope.answer = [];

        
        //Index
        $scope.data = EvaluationCommitmentsAnswerSrv.get(
            function (response) {
                ToastService.info('Se obtubieron las respuestas del compromiso!');
                angular.forEach(response.data, function(v, i) {
                    $scope.answer[i] = v;
                });
                $scope.answer = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las respuestas del compromiso!');
            });

        //edit
        $scope.editAnswers = function (id) {
            $state.go('evaluation/answer/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('evaluation/answer/create');
        };

        //Paginate
        
        $scope.loadPage = function(url) {
           // console.log(url);
            $http.get(url).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };
        


        //ELIMINAR roles

       $scope.deleteAnswers = function (answerId) {

           //console.log(answerId);
            DialogService.confirm('Eliminar la respuesta del compromiso', 'Desea continuar?')
            .then(() => {
                EvaluationCommitmentsAnswerSrv.delete({ id: answerId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(answerId), 1);
                    console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });


        };

            

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerEditCtrl($scope, $window, $stateParams, EvaluationCommitmentsAnswerSrv, ToastService, $state, roles) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/roles/views/form.html';
        //console.log($stateParams.id);
        $scope.roles = roles;


        $scope.save = function() {
          console.log($scope.roles);
            EvaluationCommitmentsAnswerSrv.save($scope.roles,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('evaluation/roles');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        } 
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCommitmentsAnswerFormCtrl($scope, $window) {

    }

})();