(function() {
    'use strict';

    angular.module('app.modules.polls.poll-subquestion').controller('PollSubquestionCtrl', ['$scope', '$window', PollSubquestionCtrl]).controller('PollSubquestionIndexCtrl', ['$scope', '$window', 'PollSubquestionSrv', PollSubquestionIndexCtrl]).controller('PollSubquestionFormCtrl', ['$scope', '$window', PollSubquestionFormCtrl]);

    function PollSubquestionCtrl($scope, $window) {}

    function PollSubquestionFormCtrl($scope, $window) {
        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
        $scope.question = '1';
        $scope.optionsQuestion = [{
            value: 1,
            text: 'Pregunta #1'
        }, {
            value: 2,
            text: 'Pregunta #2'
        }, {
            value: 3,
            text: 'Pregunta #3'
        }];
    }

    function PollSubquestionIndexCtrl($scope, $window, PollSubquestionSrv) {
        $scope.pollSubquestionList = {};
        $scope.pollSubquestionList.data = [];
        $scope.pollSubquestionList = PollSubquestionSrv.get();
        $scope.list = [{
            id: '1',
            question: 'Pregunta #1',
            title: 'Titulo 1',
            description: 'Description 1 ...',
        }, {
            id: '2',
            question: 'Pregunta #2',
            title: 'Titulo 2',
            description: 'Description 2 ...',
        }, {
            id: '3',
            question: 'Pregunta #3',
            title: 'Titulo 3',
            description: 'Description 3 ...',
        }, {
            id: '4',
            question: 'Pregunta #4',
            title: 'Titulo 4',
            description: 'Description 4 ...',
        }];
    }
})();