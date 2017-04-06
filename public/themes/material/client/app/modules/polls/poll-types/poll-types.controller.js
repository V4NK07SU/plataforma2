(function() {
    'use strict';

    angular.module('app.modules.polls.poll-types')
        .controller('PollTypesCtrl', ['$scope', '$window', PollTypesCtrl])
        .controller('PollTypesIndexCtrl', ['$scope', '$window', 'PollTypesSrv', PollTypesIndexCtrl])
        .controller('PollTypesFormCtrl', ['$scope', '$window', '$stateParams', '$resource', 'ToastService', 'PollTypesSrv', PollTypesFormCtrl]);

    function PollTypesCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';

    }

    function PollTypesFormCtrl($scope, $window, $stateParams, $resource, ToastService) {

        $scope.pollType = {
            title: '',
            description: ''
        };

        $scope.formTitle = 'Crear';

        $scope.back = function () {
            $window.history.back();
        };

        if ($stateParams.id) {
            $scope.formTitle = "Actualizar"
        }

        $scope.save = function() {

            var resource = $resource(SITE_URL + '/api/polls/polltypes/:id', {id:'@id'});
            var newResource = new resource();
            newResource.title = $scope.pollType.title;
            newResource.description = $scope.pollType.description;
            newResource.$save(function (response) {
                console.log(response);
            }, function (response) {
                ToastService.error(response.data.errors[0]);
            });

        };

        $scope.title = 'Titulo';
        $scope.description = 'Bla bla bbla bla';
        $scope.value = '1';

        $scope.optionsValue = [{
                value: 1,
                text: 'Rojo'

            },
            {
                value: 2,
                text: 'Amarillo'

            },
            {
                value: 3,
                text: 'Verde'

            }
        ];
    }

    function PollTypesIndexCtrl($scope, $window, PollTypesSrv) {

        $scope.data = {};

        $scope.data = PollTypesSrv.get();

        $scope.list = [{
                id: '1',
                title: 'Titulo 1',
                description: 'Description 1 ...',
                value: '1'

            },
            {
                id: '2',
                title: 'Titulo 2',
                description: 'Description 2 ...',
                value: '2'

            },
            {
                id: '3',
                title: 'Titulo 3',
                description: 'Description 3 ...',
                value: '3'

            },
            {
                id: '4',
                title: 'Titulo 4',
                description: 'Description 4 ...',
                value: '4'

            }
        ];
    }

})();