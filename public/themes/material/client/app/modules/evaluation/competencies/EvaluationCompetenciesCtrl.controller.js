/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.evaluation.competencies')
        .controller('EvaluationCompetenciesCtrl', ['$scope', '$window', EvaluationCompetenciesCtrl])
        .controller('EvaluationCompetenciesIndexCtrl', [
            '$scope', '$window', '$state', 'competencieSrv', 'ToastService', 'DialogService','$http',
            EvaluationCompetenciesIndexCtrl])
        .controller('EvaluationCompetenciesShowCtrl', ['$scope', '$window', EvaluationCompetenciesShowCtrl])
        .controller('EvaluationCompetenciesCreateCtrl', ['$scope', '$window', EvaluationCompetenciesCreateCtrl])
        .controller('EvaluationCompetenciesEditCtrl', [
            '$scope', '$window', '$stateParams', 'competencieSrv', 'ToastService', '$state', 'competencies',
            EvaluationCompetenciesEditCtrl])
        .controller('EvaluationCompetenciesFormCtrl', ['$scope', '$window', EvaluationCompetenciesFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCompetenciesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCompetenciesIndexCtrl($scope, $window, $state, competencieSrv, ToastService, DialogService,$http) {


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
        $scope.competencies = [];

   
        //Index
        $scope.data = competencieSrv.get(
            function (response) {
                ToastService.info('Se obtubieron los competencias!');
                angular.forEach(response.data, function(v, i) {
                    $scope.competencies[i] = v;
                });
                $scope.competencies = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las competencias!');
            });

        //edit
        $scope.editCompetencie = function (id) {
            $state.go('evaluation/competencies/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('evaluation/competencies/create');
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

        $scope.searchCompetencies = function (keyword) {

            if (keyword == null || keyword == ""){          
                $scope.data = competencieSrv.get();
                console.log("keyword");
                $scope.keyword = "";

                }       

            

            if (keyword) {
                $http.get(SITE_URL + '/api/evaluations/competencies/search/' + keyword ).success(function (res) {
                $scope.data = res;
                }).error(function(res) {
                 lert('error');
                });
            };           
        
        
    }
        


        //ELIMINAR competnecia

       $scope.deleteCompetencie = function (competenciesId) {

           //console.log(competenciesId);
            DialogService.confirm('Eliminar competencia', 'Desea continuar?')
            .then(() => {
                competencieSrv.delete({ id: competenciesId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(competenciesId), 1);
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
    function EvaluationCompetenciesShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCompetenciesCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCompetenciesEditCtrl($scope, $window, $stateParams, competencieSrv, ToastService, $state, competencies) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/competencies/views/form.html';
        //console.log($stateParams.id);
        $scope.competencies = competencies;

        $scope.save = function() {
          console.log($scope.competencies);
            competencieSrv.save($scope.competencies,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('evaluation/competencies');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        } 


        $scope.cancel = function (id) {
            $state.go('evaluation/competencies');
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationCompetenciesFormCtrl($scope, $window, $state, competencieSrv, ToastService, $stateParams) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/competencies/views/form.html';
        

         $scope.competencies = competencieSrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.competencieSrv);

    }

})();