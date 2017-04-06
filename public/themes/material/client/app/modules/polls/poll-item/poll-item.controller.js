(function() {
    'use strict';

    angular.module('app.modules.polls.poll-item')
        .controller('PollItemCtrl', ['$scope', '$window', PollItemCtrl])
<<<<<<< HEAD
        .controller('PollItemIndexCtrl', ['$scope', '$window', 'PollItemsSrv', PollItemIndexCtrl])
        .controller('PollItemFormCtrl', ['$scope', '$window', PollItemFormCtrl]);

        function PollItemCtrl($scope, $window) {
=======
        .controller('PollItemIndexCtrl', ['$scope', '$window', PollItemIndexCtrl])
        .controller('PollItemFormCtrl', ['$scope', '$window', PollItemFormCtrl]);

        function PollItemCtrl($scope, $window) {

>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
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
<<<<<<< HEAD
=======

>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
            }
        ];

        }




<<<<<<< HEAD
   	function PollItemIndexCtrl($scope, $window, PollItemsSrv) {



        $scope.pollItemsList = {};
        $scope.pollItemsList.data = []; 

        $scope.pollItemsList = PollItemsSrv.get();




=======
   	function PollItemIndexCtrl($scope, $window) {
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
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