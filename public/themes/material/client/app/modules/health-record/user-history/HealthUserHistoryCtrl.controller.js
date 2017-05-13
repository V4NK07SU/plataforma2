(function() {
    'use strict';

    angular.module('app.modules.health-record.user-history')
        .controller('HealthUserHistoryFormCtrl', ['$scope', '$window', '$state', 'ToastService',
         HealthUserHistoryFormCtrl])
    .controller('HealthUserHistoryIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'HealthDimensionSrv', 'ToastService', 'DialogService', 'types', 'dimensions','users','$log','$q','$timeout',
         HealthUserHistoryIndexCtrl])
    .controller('HealthUserHistoryCreateCtrl', ['$scope', 
         HealthUserHistoryCreateCtrl])
    .controller('HealthUserHistoryEditCtrl', ['$scope', '$window','$state','ToastService',  
        HealthUserHistoryEditCtrl]);

   	function HealthUserHistoryIndexCtrl($scope, $window, $state, $http, HealthDimensionSrv, ToastService, DialogService, types, dimensions,users
       ) {

        $scope.types = types; 
        $scope.users=users;

        $scope.dimensionsList = dimensions;           
        $scope.dimensionsHistory = [];        

        $scope.history = {};
        
        var dim = new Object();

        function Dim(dimension) {
            this.id = dimension.id;
            this.title = dimension.title;
            this.description = dimension.description;
            this.value = '';
        }


        $scope.agregarHistory = function (dimension) {
            console.log(dimension);
            var newDim;
            angular.forEach($scope.dimensionsList.data, function(v, i) {
                if(v.id == dimension) {
                    newDim = new Dim(v);
                }
            });
            $scope.dimensionsHistory.push(newDim);

            console.log($scope.dimensionsHistory);

            
        };
        //------------------------------------------------------------------------------//
        
        $scope.dimensionsListRecord = dimensions;
        $scope.dimensionsRecord = [];

        $scope.record = {};

        var pim = new Object();

        function Pim(dimensions) {
            this.id = dimensions.id;
            this.title = dimensions.title;
            this.description = dimensions.description;
            this.value = '';
        }

       $scope.agregarRecord = function (dimensions) {
            console.log(dimensions);
            var newPim;
            angular.forEach($scope.dimensionsListRecord.data, function(d, i) {
                if(d.id == dimensions) {
                    newPim = new Pim(d);
                }
            });
            $scope.dimensionsRecord.push(newPim);

            console.log($scope.dimensionsRecord);
        };
   
    };

    //-------------------------------------------------------------------------------//

        var $scope = this;
      
        // list of `state` value/display objects
        $scope.states = loadAll();
        $scope.querySearch   = querySearch;
        $scope.selectedItemChange = selectedItemChange;
        $scope.searchTextChange   = searchTextChange;
        $scope.newState = newState;
        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }


    function querySearch (query) {
            var results = query ? $scope.states.filter( createFilterFor(query) ) : $scope.states,
                    deferred;
           
        }



   function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                            Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                            Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                            Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                            North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                            South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                            Wisconsin, Wyoming';
            return allStates.split(/, +/g).map( function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

            function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }












    function HealthUserHistoryCreateCtrl($scope) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

       //Obtener las encuestas (Relación)
    }
    function HealthUserHistoryEditCtrl($scope) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

    }

    function HealthUserHistoryFormCtrl($scope, $window, $state, ToastService) {
        
    }

 })();