(function() {
    'use strict';

    angular.module('app.modules.polls.poll')
        .controller('PollsCtrl', ['$scope', '$window', PollsCtrl])
        .controller('PollsIndexCtrl', ['$scope', '$window', PollsIndexCtrl])
        .controller('PollsFormCtrl', ['$scope', '$window', PollsFormCtrl]);

        function PollsCtrl($scope, $window) {

        }

        function PollsFormCtrl ($scope, $window) {

        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
        $scope.pollType = '1';

        $scope.optionsType = [
        {
                value: 1,
                text: ''

            },
        {
                value: 2,
                text: 'Descriptiva'

            },
            {
                value: 3,
                text: 'Analitica'

            },
            {
                value: 4,
                text: 'De respuesta abierta'

            }
        ];

        }




   	function PollsIndexCtrl($scope, $window) {
        $scope.list = [{
                id: '1',
                title: 'Titulo 1',
                description: 'Description 1 ...',
                pollType: 'Descriptiva'

            },
            {
                id: '2',
                title: 'Titulo 2',
                description: 'Description 2 ...',
                pollType: 'Analitica'

            },
            {
                id: '3',
                title: 'Titulo 3',
                description: 'Description 3 ...',
                pollType: 'De respuesta abierta'

            },
        
        ];
    }
 })();