/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.types')
        .controller('HealthTypesCtrl', ['$scope', '$window', HealthTypesCtrl])
        .controller('HealthTypesIndexCtrl', ['$scope', '$window', '$state', 'HealthTypeSrv', 'ToastService', 'DialogService','$http',
            HealthTypesIndexCtrl])
        .controller('HealthTypesShowCtrl', ['$scope', '$window', HealthTypesShowCtrl])
        .controller('HealthTypesCreateCtrl', ['$scope','dimensions',
            HealthTypesCreateCtrl])
        .controller('HealthTypesEditCtrl', ['$scope','types',
            HealthTypesEditCtrl])
        .controller('HealthTypesFormCtrl', ['$scope', '$window', '$state', 'ToastService', 
        'HealthTypeSrv', 
            HealthTypesFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */ 
    function HealthTypesCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesIndexCtrl($scope, $window, $state, HealthTypeSrv, ToastService, DialogService,$http) {


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
        $scope.types = [];

   
        //Index
        $scope.data = HealthTypeSrv.get(
            function (response) {
                if($scope.data.data.length > 0){
                ToastService.info('Se obtubieron Tipos de Historia!');
                angular.forEach(response.data, function(v, i) {
                    $scope.types[i] = v;
                });
                $scope.types = response.data;
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando Tipos de Historia!');
            });

        //edit
        $scope.editTypes = function (id) {
            $state.go('health-record/types/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/types/create');
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
        
        //Search
        $scope.search = function (keyword){
            if (keyword  == null || keyword == "") {
                $scope.data = HealthTypeSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
            console.log(keyword);
            $http.get(SITE_URL + '/api/health/types/search/' + keyword).success(function (res){
                $scope.data = res;
                console.log($scope.data);
            }).error(function (res) {
                alert('error');
                // body...
            });
        }
        }


        //ELIMINAR 

       $scope.deleteService = function (serviceId) {

           //console.log(serviceId);
            DialogService.confirm('Eliminar Tipo de Historia', 'Desea continuar?')
            .then(() => {
                HealthTypeSrv.delete({ id: serviceId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(serviceId), 1);
                    $scope.data = HealthTypeSrv.get();
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
    function HealthTypesShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesCreateCtrl($scope, dimensions) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/types/views/form.html';

            $scope.type = {
            dimensions: []
        };

      
        $scope.dimensions = dimensions.data;  

        $scope.exists = function (dimension) {
            var ret =false;
            angular.forEach($scope.type.dimensions, function(v, i) {                
                if(v.id === dimension.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

        
   
        $scope.toggle = function (dimension) {
            var idx = -1;            
            angular.forEach($scope.type.dimensions, function(v, i) {                
                if(v.id === dimension.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.type.dimensions.splice(idx, 1);
            } else {
                $scope.type.dimensions.push(dimension)
            }
            console.log($scope.type.dimensions);
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesEditCtrl($scope, types) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/types/views/form.html';
        var vm = this;  
        vm.data = types; 
        

       
        $scope.dimensions = vm.data.dimensions;
    
        $scope.type = vm.data.type;
        console.log($scope.type);
        

     
        $scope.exists = function (dimension) {
            var ret =false;
            angular.forEach($scope.type.dimensions, function(v, i) {                
                if(v.id === dimension.id) {
                    ret = true;
                }
            });
            return ret;
        }; 

      
        $scope.toggle = function (dimension) {
            var idx = -1;            
            angular.forEach($scope.type.dimensions, function(v, i) {                
                if(v.id === dimension.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.type.dimensions.splice(idx, 1);
            } else {
                $scope.type.dimensions.push(dimension)
            }
            console.log($scope.type.dimensions);
        };
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthTypesFormCtrl($scope, $window, $state, ToastService, HealthTypeSrv ) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/types/views/form.html';
        $scope.save = function() {
          console.log($scope.type);
            HealthTypeSrv.save($scope.type,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/types');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        } 
          //cancel
         $scope.cancel = function () {
            $state.go('health-record/types');
        };
    }

})();