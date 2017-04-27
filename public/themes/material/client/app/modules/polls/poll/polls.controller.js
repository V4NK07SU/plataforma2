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
                title: 'Encuesta a egresados',
                description: 'En cuesta realizada a los egresados o proximos graduandos.',
                pollType: 'Descriptiva'

            },
            {
                id: '2',
                title: 'Encuesta a inscritos',
                description: 'Encuesta aplicada a los aspirantes a ser alumnos de la CORHUILA',
                pollType: 'Analitica'

            },
            {
                id: '3',
                title: 'Encuesta a estudiantes general',
                description: 'Encuesta aplicada a todos los estudiantes de la CORHUILA',
                pollType: 'De respuesta abierta'

            },
        
        ];
    }
 })();