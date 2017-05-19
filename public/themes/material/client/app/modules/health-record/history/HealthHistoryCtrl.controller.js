/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.history')
        .controller('HealthHistoryCtrl', ['$scope', '$window', HealthHistoryCtrl])
        .controller('HealthHistoryIndexCtrl', ['$scope', '$window', '$state', 'ToastService', 'DialogService','$http',
            'HealthHistorySrv', 
            HealthHistoryIndexCtrl])
        .controller('HealthHistoryShowCtrl', ['$scope', '$window', 
        HealthHistoryShowCtrl])
        .controller('HealthHistoryCreateCtrl', ['$scope', 'moment','ToastService','$state', 'HealthHistorySrv','record','users',
         HealthHistoryCreateCtrl])
        .controller('HealthHistoryEditCtrl', ['$scope','moment', 'ToastService','$state', 'HealthHistorySrv',
        'history','record','users',
            HealthHistoryEditCtrl])
        .controller('HealthHistoryFormCtrl', ['$scope', '$window',
        HealthHistoryFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthHistoryCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthHistoryIndexCtrl($scope, $window, $state,  ToastService, DialogService, $http, HealthHistorySrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = HealthHistorySrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron las historias!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las historias!');
            });

        //edit
        $scope.editHistory = function (id) {
            $state.go('health-record/history/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/history/create');
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
                 $scope.data= HealthHistorySrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/history/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteHistory = function (histories) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Historia', 'Desea continuar?')
            .then(() => {
                HealthHistorySrv.delete({ id: histories.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(histories), 1);
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
    function HealthHistoryShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthHistoryCreateCtrl($scope , moment ,ToastService,$state, HealthHistorySrv,record,users) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/history/views/form.html';
        $scope.record=record;
        $scope.users=users;
        
        $scope.history = {};

        console.log($scope.history);
        $scope.save = function() { 

            $scope.history.date = moment($scope.history.date).format('YYYY-MM-DD'),

            HealthHistorySrv.save($scope.history,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/history');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

              $scope.cancel = function (id) {
            $state.go('health-record/history');
        };

        

    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthHistoryEditCtrl($scope, moment,  ToastService, $state, HealthHistorySrv,history,record,users) {

        $scope.formUrl = THEME_URL + '/app/modules/health-record/history/views/form.html';

        
        //console.log($stateParams.id);
        $scope.history = {};
        $scope.history = history;
        $scope.record=record;
        $scope.users=users;
    

        $scope.history.date = new Date($scope.history.date);
       
        $scope.save = function() {    
            $scope.history.date = moment($scope.history.date).format('YYYY-MM-DD');
             
            
            HealthHistorySrv.save($scope.history,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/history');

                },
                function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }
        
               $scope.cancel = function (id) {
            $state.go('health-record/history');
        };

       
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthHistoryFormCtrl($scope, $window) {
    }

})();