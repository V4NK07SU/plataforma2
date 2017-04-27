(function() {
    'use strict';
    angular.module('app.example')
        .controller('ExamplePageCtrl', ['$scope', ExamplePageCtrl]);

    function ExamplePageCtrl($scope) {
        $scope.algo = 'Un texto!';
    }

})();