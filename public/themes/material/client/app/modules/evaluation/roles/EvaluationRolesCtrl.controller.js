/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.evaluation.roles')
        .controller('EvaluationRolesCtrl', ['$scope', '$window', EvaluationRolesCtrl])
        .controller('EvaluationRolesIndexCtrl', ['$scope', '$window', '$state', 'EvaluationRolesSrv', 'ToastService', 'DialogService','$http',
            EvaluationRolesIndexCtrl])
        .controller('EvaluationRolesShowCtrl', ['$scope', '$window', EvaluationRolesShowCtrl])
        .controller('EvaluationRolesCreateCtrl', ['$scope', '$window', EvaluationRolesCreateCtrl])
        .controller('EvaluationRolesEditCtrl', [
            '$scope', '$window', '$stateParams', 'EvaluationRolesSrv', 'ToastService', '$state', 'roles',
            EvaluationRolesEditCtrl])
        .controller('EvaluationRolesFormCtrl', ['$scope', '$window', EvaluationRolesFormCtrl]);

    /**
     *e
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationRolesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationRolesIndexCtrl($scope, $window, $state, EvaluationRolesSrv, ToastService, DialogService,$http) {


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
        $scope.roles = [];

        
        //Index
        $scope.data = EvaluationRolesSrv.get(
            function (response) {
                ToastService.info('Se obtubieron los roles!');
                angular.forEach(response.data, function(v, i) {
                    $scope.roles[i] = v;
                });
                $scope.roles = response.data;
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los roles!');
            });

        //edit
        $scope.editRoles = function (id) {
            $state.go('evaluation/roles/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('evaluation/roles/create');
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


        $scope.searchRoles = function (keyword) {

            if (keyword == null || keyword == ""){          
                $scope.data = EvaluationRolesSrv.get();
                console.log("keyword");
                $scope.keyword = "";

                }       

            

            if (keyword) {
                $http.get(SITE_URL + '/api/evaluations/roles/search/' + keyword ).success(function (res) {
                $scope.data = res;
                }).error(function(res) {
                 lert('error');
                });
            };           
        
        
    }

        //ELIMINAR roles

       $scope.deleteRoles = function (rolesId) {

           //console.log(rolesId);
            DialogService.confirm('Eliminar rol', 'Desea continuar?')
            .then(() => {
                EvaluationRolesSrv.delete({ id: rolesId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(rolesId), 1);
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
    function EvaluationRolesShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationRolesCreateCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationRolesEditCtrl($scope, $window, $stateParams, EvaluationRolesSrv, ToastService, $state, roles) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/roles/views/form.html';
        //console.log($stateParams.id);
        $scope.roles = roles;


        

        $scope.save = function() {
          console.log($scope.roles);
            EvaluationRolesSrv.save($scope.roles,
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


        
        $scope.cancel = function (id) {
            $state.go('evaluation/roles');
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function EvaluationRolesFormCtrl($scope, $window, $state, EvaluationRolesSrv, ToastService, $stateParams) {
        $scope.formUrl = THEME_URL + '/app/modules/evaluation/roles/views/form.html';
        //console.log($stateParams.id);
        //console.log($scope.formUrl);

         $scope.roles = EvaluationRolesSrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.EvaluationRolesSrv);

    }

})();