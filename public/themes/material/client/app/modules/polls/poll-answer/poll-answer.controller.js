(function() {
    'use strict';

    angular.module('app.modules.polls.poll-answer')
        .controller('PollAnswerCtrl', ['$scope', '$window', PollAnswerCtrl])
        .controller('PollAnswerIndexCtrl', ['$scope', '$window', 'PollAnswerSrv', PollAnswerIndexCtrl])
        .controller('PollAnswerFormCtrl', ['$scope', '$window', 'PollAnswerSrv', PollAnswerFormCtrl]);

    function PollAnswerCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollAnswerFormCtrl($scope, $window) {
        $scope.title = 'Titulo';

        $scope.description = 'Descripcion';

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

    function PollAnswerIndexCtrl($scope, $window, PollAnswerSrv) {

        $scope.pollAnswerList = {};
        $scope.pollAnswerList.data = []; 
        //$scope.pollAnswerList = PollAnswerSrv.get();
        $scope.pollAnswerList = [{
                id: '1',
                title: 'Indigena',
                description: 'Pertenece al grupo etnico indigena.',
                value: 'Amarillo'

            },
            {
                id: '2',
                title: 'Minusvalido',
                description: 'Pertenece al grupo de minusvalidos',
                value: 'Rojo'

            },
            {
                id: '3',
                title: 'Titulo 3',
                description: 'Description 3 ...',
                value: 'Verde'

            },
           
        ];
    }

})();