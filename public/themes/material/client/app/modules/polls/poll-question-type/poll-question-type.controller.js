(function() {
    'use strict';

    angular.module('app.modules.polls.poll-question-type')
    .controller('PollQuestionTypeCtrl', ['$scope', '$window', PollQuestionTypeCtrl])
    .controller('PollQuestionTypeIndexCtrl', ['$scope', '$window', 'PollQuestionTypeSrv', PollQuestionTypeIndexCtrl])
    .controller('PollQuestionTypeFormCtrl', ['$scope', '$window', 'PollQuestionTypeSrv', PollQuestionTypeFormCtrl]);

    function PollQuestionTypeCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollQuestionTypeFormCtrl($scope, $window, PollQuestionTypeSrv) {
        $scope.title = 'Titulo';
        $scope.description = 'Descripcion';
    }

    function PollQuestionTypeIndexCtrl($scope, $window, PollQuestionTypeSrv) {
        $scope.pollQuestionTypeList = {};
        $scope.pollQuestionTypeList.data = [];
        $scope.pollQuestionTypeList = PollQuestionTypeSrv.get();
        $scope.list = [{
            id: '1',
            title: 'Titulo 1',
            description: 'Description 1 ...',
        }, ];
    }

})();