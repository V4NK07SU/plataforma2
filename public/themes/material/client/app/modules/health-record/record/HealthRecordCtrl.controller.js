/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.record')
        .controller('HealthRecordCtrl', ['$scope', '$window', HealthRecordCtrl])
        .controller('HealthRecordIndexCtrl', ['$scope', '$window', '$state', 'ToastService', 'DialogService','$http',
            'HealthRecordSrv',
            HealthRecordIndexCtrl])
        .controller('HealthRecordShowCtrl', ['$scope', '$window', 
        HealthRecordShowCtrl])
        .controller('HealthRecordCreateCtrl', ['$scope',
        'types','users',
         HealthRecordCreateCtrl])
        .controller('HealthRecordEditCtrl', ['$scope',
        'types','record','users',
            HealthRecordEditCtrl])
        .controller('HealthRecordFormCtrl', ['$scope', '$window', '$state', 'ToastService',
        'HealthRecordSrv',
        HealthRecordFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordIndexCtrl($scope, $window, $state,  ToastService, DialogService, $http, HealthRecordSrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = HealthRecordSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron los registros!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los registros!');
            });

        //edit
        $scope.editRecord = function (id) {
            $state.go('health-record/record/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/record/create');
        };

        //Paginate
        
        $scope.loadPage = function(url) {
            $http.get(url).success(function (res) {                
                $scope.data = res;
            }).error(function(res) {
                alert('error');
            });
        };

         $scope.search = function (keyword) {
             if (keyword == null || keyword ==""){
                 $scope.data= HealthRecordSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/record/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteRecord = function (records) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Registro', 'Desea continuar?')
            .then(() => {
                HealthRecordSrv.delete({ id: records.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(records), 1);
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
    function HealthRecordShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordCreateCtrl($scope, types,users) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/record/views/form.html';

        $scope.types=types;
        $scope.users=users;

    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordEditCtrl($scope, types , record,users) {

        $scope.formUrl = THEME_URL + '/app/modules/health-record/record/views/form.html';
        //console.log($stateParams.id);
        $scope.types = types;
        $scope.record=record;
        $scope.users=users;
        console.log(record);
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthRecordFormCtrl($scope, $window, $state,  ToastService, HealthRecordSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/record/views/form.html';
      

         $scope.save = function() {  
           
            HealthRecordSrv.save($scope.record,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/record');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
         }

     
        //cancel

           $scope.cancel = function (id) {
            $state.go('health-record/record');
        };

    }

})();