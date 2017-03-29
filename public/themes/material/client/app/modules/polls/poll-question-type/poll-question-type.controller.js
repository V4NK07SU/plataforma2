(function() {
    'use strict';

    angular.module('app.modules.polls.poll-question-type')
        .controller('PollQuestionTypeCtrl', ['$scope', '$window', PollQuestionTypeCtrl])
        .controller('PollQuestionTypeIndexCtrl', ['$scope', '$window', PollQuestionTypeIndexCtrl])
        .controller('PollQuestionTypeFormCtrl', ['$scope', '$window', PollQuestionTypeFormCtrl]);

    function PollQuestionTypeCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollQuestionTypeFormCtrl($scope, $window) {
        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
       
        
    }

    function PollQuestionTypeIndexCtrl($scope, $window) {
        $scope.list = [{
                id: '1',
                title: 'Titulo 1',
                description: 'Description 1 ...',
                

            },
          
        ];
    }

})();