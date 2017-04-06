(function() {
    'use strict';

    angular.module('app.modules.polls.poll-types')
        .controller('PollTypesCtrl', ['$scope', '$window', PollTypesCtrl])
<<<<<<< HEAD
        .controller('PollTypesIndexCtrl', ['$scope', '$window', 'PollTypesSrv', PollTypesIndexCtrl])
        .controller('PollTypesFormCtrl', ['$scope', '$window','PollTypesSrv', PollTypesFormCtrl]);
=======
        .controller('PollTypesIndexCtrl', ['$scope', '$window', PollTypesIndexCtrl])
        .controller('PollTypesFormCtrl', ['$scope', '$window', PollTypesFormCtrl]);
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c

    function PollTypesCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollTypesFormCtrl($scope, $window) {
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

<<<<<<< HEAD
    function PollTypesIndexCtrl($scope, $window, PollTypesSrv) {

        $scope.pollTypesList = {};
        $scope.pollTypesList.data = []; 

        $scope.pollTypesList = PollTypesSrv.get();

=======
    function PollTypesIndexCtrl($scope, $window) {
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
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