(function() {
    'use strict';

    angular.module('app.modules.polls.poll-question')
        .controller('PollQuestionCtrl', ['$scope', '$window', PollQuestionCtrl])
        .controller('PollQuestionIndexCtrl', ['$scope', '$window', PollQuestionIndexCtrl])
        .controller('PollQuestionFormCtrl', ['$scope', '$window', PollQuestionFormCtrl]);

        function PollQuestionCtrl($scope, $window) {

        }

        function PollQuestionFormCtrl ($scope, $window) {

        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
        $scope.item = '1';
        $scope.questionType='1';

        $scope.optionsItem = [{
                valueItem: 1,
                text: 'Datos personales'

            },
            {
                valueItem: 2,
                text: 'Datos laborales'

            },
            {
                valueItem: 3,
                text: 'Estudios'

            },

             {
                valueItem: 4,
                text: 'Referencias'

            }
        ];

         $scope.optionsQuestionType = [{
                valueType: 5,
                text: 'De respuesta abierta'

            },
            {
                valueType: 6,
                text: 'De respuesta cerrada'

            },
            {
                valueType: 7,
                text: 'De seleccion multiple'

            },

              {
                valueType: 8,
                text: 'De seleccion unica'

            }
        ];

        
}



   	function PollQuestionIndexCtrl($scope, $window) {
        $scope.list = [{
                id: '1',
                item: 'Datos Personales',
                questionType: 'De respuesta abierta',
                title: 'Titulo 1',
                description: 'Description 1 ...',
               

            },
            {
                id: '2',
                item: 'Datos Laborales',
                questionType: 'De respuesta abierta',
                title: 'Titulo 2',
                description: 'Description 2 ...',
                

            },
            {
                id: '3',
                item: 'Estudios',
                questionType: 'De respuesta abierta',
                title: 'Titulo 3',
                description: 'Description 3 ...',
                

            },
            {
                id: '4',
                item: 'Referencias',
                questionType: 'De respuesta abierta',
                title: 'Titulo 4',
                description: 'Description 4 ...',
                

            }
        ];
    }


 })();