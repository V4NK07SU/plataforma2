/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.user-family-composition')
        .controller('UserFamilyCompositionCtrl', ['$scope', '$window', 
        UserFamilyCompositionCtrl])
        .controller('UserFamilyCompositionIndexCtrl', ['$scope', '$window', '$state','ToastService', 'DialogService','$http',
        'UserFamilyCompositionSrv',
            UserFamilyCompositionIndexCtrl])
        .controller('UserFamilyCompositionShowCtrl', ['$scope', '$window', UserFamilyCompositionShowCtrl])
        .controller('UserFamilyCompositionCreateCtrl', ['$scope','users',
         UserFamilyCompositionCreateCtrl])
        .controller('UserFamilyCompositionEditCtrl', ['$scope',
        'user_family_composition','users',
        UserFamilyCompositionEditCtrl])
        .controller('UserFamilyCompositionFormCtrl', ['$scope', '$window', '$state', 'ToastService',
        'UserFamilyCompositionSrv', 
        UserFamilyCompositionFormCtrl]);

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UserFamilyCompositionCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UserFamilyCompositionIndexCtrl($scope, $window, $state,  ToastService, DialogService, $http,UserFamilyCompositionSrv) {
        

        var vm = this;
        vm.data = {};        
        $scope.data = {};

   
        //Index
        $scope.data = UserFamilyCompositionSrv.get(
            function (response) {
                  if ($scope.data.data.length > 0){
                ToastService.info('Se obtuvieron la composicion familiar!');
                /*
                angular.forEach(response.data, function(v, i) {
                    $scope.periods[i] = v;
                });
                */
                $scope.data = response;
                  }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando la composicion familiar!');
            });

        //edit
        $scope.editFamilyComposition = function (id) {
            $state.go('health-record/user-family-composition/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/user-family-composition/create');
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
                 $scope.data= UserFamilyCompositionSrv.get();
                 console.log("keyword");
                 $scope.keyword="";
             }
             if (keyword){
            
            $http.get ( SITE_URL + '/api/health/userfamilycomposition/search/' + keyword).success(function (res){

                $scope.data=res;
                $scope.keyword="";
            
            }).error(function(res){
                alert('error');
            });
        }
    };
        


        //ELIMINAR AUTHOR

       $scope.deleteFamilyComposition = function (family_composition) {

           //console.log(authorId);
            DialogService.confirm('Eliminar Composicion Familiar', 'Desea continuar?')
            .then(() => {
                UserFamilyCompositionSrv.delete({ id: family_composition.id }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(family_composition), 1);
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
    function UserFamilyCompositionShowCtrl($scope, $window) {

    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UserFamilyCompositionCreateCtrl($scope, users) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/user-family-composition/views/form.html';

        $scope.users=users;
    
  
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UserFamilyCompositionEditCtrl($scope, user_family_composition,users) {

        $scope.formUrl = THEME_URL + '/app/modules/health-record/user-family-composition/views/form.html';
        //console.log($stateParams.id);
        $scope.user_family_composition = user_family_composition;
        $scope.users=users;
        
    }

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function UserFamilyCompositionFormCtrl($scope, $window, $state,  ToastService,UserFamilyCompositionSrv ) {
        $scope.formUrl = THEME_URL + '/app/modules/health-record/user-family-composition/views/form.html';
      

         $scope.save = function() {  
           
            UserFamilyCompositionSrv.save($scope.user_family_composition,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('health-record/user-family-composition');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
         }

       

        //cancel

           $scope.cancel = function (id) {
            $state.go('health-record/user-family-composition');
        };

    }

})();