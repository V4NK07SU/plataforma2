(function() {
    'use strict';

    angular.module('app.modules.polls.poll-answer')
        .controller('PollAnswerCtrl', ['$scope', '$window', PollAnswerCtrl])
<<<<<<< HEAD
        .controller('PollAnswerIndexCtrl', ['$scope', '$window', 'PollAnswerSrv', PollAnswerIndexCtrl])
        .controller('PollAnswerFormCtrl', ['$scope', '$window', 'PollAnswerSrv', PollAnswerFormCtrl]);
=======
        .controller('PollAnswerIndexCtrl', ['$scope', '$window', PollAnswerIndexCtrl])
        .controller('PollAnswerFormCtrl', ['$scope', '$window', PollAnswerFormCtrl]);
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c

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

<<<<<<< HEAD
    function PollAnswerIndexCtrl($scope, $window, PollAnswerSrv) {

        $scope.pollAnswerList = {};
        $scope.pollAnswerList.data = []; 

        $scope.pollAnswerList = PollAnswerSrv.get();



=======
    function PollAnswerIndexCtrl($scope, $window) {
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
        $scope.list = [{
                id: '1',
                title: 'Titulo 1',
                description: 'Description 1 ...',
                value: 'Amarillo'

            },
            {
                id: '2',
                title: 'Titulo 2',
                description: 'Description 2 ...',
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