(function() {
    'use strict';

    angular.module('app.tasks')
        .controller('TasksCtrl', ['$scope', 'TasksService', 'TasksCategoriesService', TasksCtrl]);

    function TasksCtrl($scope, TasksService, TasksCategoriesService) {
        var vm = this;
        vm.someVar = 'Some Text!';
        vm.tasks = {};
        vm.tasks = TasksService.get();
        console.log(vm.tasks);
    }

})();