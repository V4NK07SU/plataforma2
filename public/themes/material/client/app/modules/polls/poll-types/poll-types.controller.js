(function() {
    'use strict';

    angular.module('app.modules.polls.poll-types')
        .controller('PollTypesCtrl', ['$scope', '$window', PollTypesCtrl])
        .controller('PollTypesIndexCtrl', ['$scope', '$window', 'PollTypesSrv', 'ToastService', 'DialogService', '$state', PollTypesIndexCtrl])
        .controller('PollTypesFormCtrl', ['$scope', '$window', '$state', 'PollTypesSrv', 'ToastService', '$stateParams', PollTypesFormCtrl]);

    function PollTypesCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    
    function PollTypesIndexCtrl($scope, $window, PollTypesSrv, ToastService, DialogService, $state) {


        var vm = this;
        vm.data = {};

        $scope.current_page = null;
        $scope.from = null;
        $scope.last_page = null
        $scope.next_page = null;
        $scope.total = null;
        $scope.per_page = null;
        $scope.last_page = null;
        $scope.next_page_url = null;
        $scope.prev_page_url = null;
        $scope.from = null;
        $scope.to = null;
        $scope.PollTypes = [];

        //INDEX
        $scope.data = PollTypesSrv.get(function (response) {
                    angular.forEach(response.data, function(v, i) {
                    $scope.PollTypes[i] = v;
                });
                $scope.PollTypes = response.data;
                if ($scope.PollTypes.length > 0) {
                    ToastService.info('Se obtubieron los tipos de encuesta!');
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando los tipos de encuesta!');
            });
               
               
        //DELETE PollType
        $scope.deletePollType = function (pollTypeId) {
           console.log(pollTypeId);
            DialogService.confirm('Eliminar tipo de encuesta', 'Desea continuar?')
            .then(() => {
                PollTypesSrv.delete({ id: pollTypeId }, function (response) {
                    $scope.data.data.splice($scope.data.data.indexOf(pollTypeId), 1);
                    console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });
        };

        //EDIT POLLTYPE.
        $scope.editPollType = function (id) {
            //console.log(id);
            $state.go('modules/polls/poll-types/poll-types-form', { id: id });
        };

    }

        function PollTypesFormCtrl($scope, $window, $state, PollTypesSrv, ToastService, $stateParams) {


        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-types/poll-types-form';
        //console.log($stateParams.id);
        //console.log($scope.formUrl);


         $scope.polltype = PollTypesSrv.get({id: $stateParams.id},
            function (response) {

            },
            function (response) {
                angular.forEach(response.data.errors, function(v, i) {
                    ToastService.error(v[0]);
                });
            }
        );
        console.log($scope.polltype);
        $scope.save = function() {     
            PollTypesSrv.save($scope.polltype,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('modules/polls/poll-types/poll-types-index');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }        
    }

})();