(function() {
    'use strict';

    angular.module('app.modules.polls.poll-item')
        .controller('PollItemCtrl', ['$scope', '$window', PollItemCtrl])
        .controller('PollItemIndexCtrl', ['$scope', '$window', PollItemIndexCtrl])
        .controller('PollItemFormCtrl', ['$scope', '$window', PollItemFormCtrl]);

        function PollItemCtrl($scope, $window) {

        }

        function PollItemFormCtrl ($scope, $window) {

        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
        $scope.poll = '1';

        $scope.optionsPoll = [

{
                value: 1,
                text: ''

            },
        {
                value: 2,
                text: 'Encuesta Egresados'

            },
            {
                value: 3,
                text: 'Encuesta Estudiantes'

            },
            {
                value: 4,
                text: 'Encuesta Docentes'

            }
        ];

        }




   	function PollItemIndexCtrl($scope, $window) {
        $scope.list = [{
                id: '1',
               
                title: 'Titulo 1',
                description: 'Description 1 ...',
                 poll: 'Encuesta Egresados',
               

            },
            {
                id: '2',
                
                title: 'Titulo 2',
                description: 'Description 2 ...',
                poll: 'Encuesta Estudiantes',
                

            },
            {
                id: '3',
                
                title: 'Titulo 3',
                description: 'Description 3 ...',
                poll: 'Encuesta Docentes',
                

            },
      
        ];
    }
 })();