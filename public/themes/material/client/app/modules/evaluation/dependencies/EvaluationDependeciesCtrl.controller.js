/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.evaluation.dependencies')
        .controller('EvaluationDependencieCtrl', ['$scope', '$window', EvaluationDependencieCtrl])
        .controller('EvaluationDependencieIndexCtrl', [
            '$scope', '$window', '$state', 'DependencieSrv', 'ToastService', 'DialogService','$http',
            EvaluationDependencieIndexCtrl])
        .controller('EvaluationDependencieShowCtrl', ['$scope', '$window', EvaluationDependencieShowCtrl])
        .controller('EvaluationDependencieCreateCtrl', ['$scope', '$window', EvaluationDependencieCreateCtrl])
        .controller('EvaluationDependencieEditCtrl', [
            '$scope', '$window', '$stateParams', 'DependencieSrv', 'ToastService', '$state', 'dependencies',
            EvaluationDependencieEditCtrl])
        .controller('EvaluationDependencieFormCtrl', [
            '$scope', '$window', '$state', 'DependencieSrv', 'ToastService', 'DialogService', '$stateParams'
            , EvaluationDependencieFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationDependencieCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationDependencieIndexCtrl($scope, $window, $state, DependencieSrv, ToastService, DialogService,$http) {


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
        $scope.dependencies = [];

   
        //Index
        $scope.data = DependencieSrv.get(
            function (response) {
                ToastService.info('Se obtubieron los Dependencias!');
                angular.forEach(response.data, function(v, i) {
                    $scope.dependencies[i] = v;
                });
                $scope.dependencies = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Dependencias!');
            });

        //edit
        $scope.editDependencie = function (id) {
            $state.go('evaluation/dependencies/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('evaluation/dependencies/create');
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

        $scope.searchDependencies = function (keyword) {

            if (keyword == null || keyword == ""){          
                $scope.data = DependencieSrv.get();
                console.log("keyword");
                $scope.keyword = "";

                }       

            

            if (keyword) {
                $http.get(SITE_URL + '/api/evaluations/dependencies/search/' + keyword ).success(function (res) {
                $scope.data = res;
                }).error(function(res) {
                 lert('error');
                });
            };           
        
        
    }

        


        //ELIMINAR dependencie

       $scope.deleteDependencie = function (dependencieId) {

           //console.log(dependencieId);
            DialogService.confirm('Eliminar Servicio', 'Desea continuar?')
            .then(() => {
                DependencieSrv.delete({ id: dependencieId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(dependencieId), 1);
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
    function EvaluationDependencieShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationDependencieCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationDependencieEditCtrl($scope, $window, $stateParams, DependencieSrv, ToastService, $state, dependencies) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/dependencies/views/form.html';
        //console.log($stateParams.id);
        $scope.dependencies = dependencies;

        $scope.save = function() {
          console.log($scope.dependencies);
            DependencieSrv.save($scope.dependencies,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('evaluation/dependencies');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        } 

        //Cancelar la edición de un tipo de encuesta.
        $scope.cancel = function (id) {
            $state.go('evaluation/dependencies');
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationDependencieFormCtrl($scope, $window, $state, DependencieSrv, ToastService, DialogService, $stateParams) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/dependencies/views/form.html';
        //console.log($stateParams.id);
        //console.log($scope.formUrl);
        /*
         $scope.dependencies = DependencieSrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        */
        $scope.courses = [];
        var vm = this;

        // Creates a new, empty object, as a global
        var course = new Object();
        // Creates three new variables in the global scope.
        var name;
        var gradingareas;
        var finalgrade;

        function Course(index, name, gradingareas, finalgrade) {
            this.index = index;
            this.name = name;
            this.gradingareas = gradingareas;
            this.finalgrade = finalgrade;
            this.questions = [];
        }

        var question = new Object();

        var qTitle, qDescription;

        function Question(title, desc) {
            this.index = 0;
            this.title = title;
            this.description = desc;
        }

        var countQ = 0;

        $scope.addCourse = function(name, gradingareas, finalgrade) {
            console.log(name + countQ + ' ' +gradingareas+' '+finalgrade);
            var index = countQ;
            var newCourse = new Course(index, name + countQ, gradingareas, finalgrade);
            $scope.courses.push(newCourse);
            countQ++;
        };

        $scope.addQuestion = function(index, title, desc) {
            var newQuestion = new Question(title, desc);
            $scope.courses[index].questions.push(newQuestion);
        }        

        $scope.showDialog = function() {
            DialogService.fromTemplate('app/modules/evaluation/dependencies/views/dialogs/course-form',
            {
                clickOutsideToClose: true,
                scope: $scope,
                preserveScope: true, 
                escapeToClose: true
            });
        }

        $scope.biography = 'Some text!';

        $scope.alertText = function(text) {
            ToastService.success(text);
            DialogService.hide();
        }
    }

})();