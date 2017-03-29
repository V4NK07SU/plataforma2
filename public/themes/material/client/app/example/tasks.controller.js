(function() {
    'use strict';
    angular.module('app.example')
        .controller('TasksCtrl', [
            '$scope',
            '$state',
            '$stateParams',
            'ToastService',
            'DialogService',
            'TasksService',
            'TasksCategoriesService',
            TasksCtrl
        ])
        .controller('TasksCreateCtrl', [
            '$scope',
            '$state',
            '$stateParams',
            'ToastService',
            'DialogService',
            'TasksService',
            'TasksCategoriesService',
            TasksCreateCtrl
        ])
        .controller('TasksEditCtrl', [
            '$scope',
            '$state',
            '$stateParams',
            'ToastService',
            'DialogService',
            'TasksService',
            'TasksCategoriesService',
            TasksEditCtrl
        ]);

    function TasksCtrl(
        $scope,
        $state,
        $stateParams,
        ToastService,
        DialogService,
        TasksService,
        TasksCategoriesService
    ) {
        var vm = this;
        vm.ToastService = ToastService;
        vm.DialogService = DialogService;
        vm.TasksService = TasksService;
        vm.TasksCategoriesService = TasksCategoriesService;
        vm.$scope = $scope;
        vm.$state = $state;
        vm.$stateParams = $stateParams;
        vm.status = '';
        vm.confirmMessage = '';

        vm.tasks = [
            { name: 'Ir de compras', description: 'Ir a hacer el mercado al fruver.', accomplished: true },
            { name: 'Aprender AngularJs', description: 'Aprender de directivas y fabricas.', accomplished: false },
            { name: 'Aprender Laravel', description: 'Aprender de APIs y Conexiones a bases de datos.', accomplished: false }
        ];

        console.log(vm.TasksService.query());

        vm.clickDelete = function(task, event) {

            vm.DialogService.confirm('Eliminar la tarea ' + task + '!', 'Esta seguro de tomar esta acción?')
                .then(() => {
                    vm.confirmMessage = 'Success callback';
                }, () => {
                    vm.confirmMessage = 'Cancel callback';
                });

        }

        vm.clickEdit = function(task, event) {
            vm.$state.go('example/tasks-form');
        }

    }

    function TasksCreateCtrl(
        $scope,
        $state,
        $stateParams,
        ToastService,
        DialogService,
        TasksService,
        TasksCategoriesService
    ) {

        var vm = this;
        vm.ToastService = ToastService;
        vm.DialogService = DialogService;
        vm.TasksService = TasksService;
        vm.TasksCategoriesService = TasksCategoriesService;
        vm.$scope = $scope;
        vm.$stateParams = $stateParams;
        vm.$state = $state;

        vm.action = 'Crear';

        vm.task = new vm.TasksService();

        vm.taskCategories = [{
                'id': 1,
                'name': 'Cat 1',
                'description': 'Some description.'
            },
            {
                'id': 2,
                'name': 'Cat 2',
                'description': 'Some description.'
            },
            {
                'id': 3,
                'name': 'Cat 3',
                'description': 'Some description.'
            },
            {
                'id': 4,
                'name': 'Cat 4',
                'description': 'Some description.'
            },
            {
                'id': 5,
                'name': 'Cat 5',
                'description': 'Some description.'
            },
            {
                'id': 6,
                'name': 'Cat 6',
                'description': 'Some description.'
            },
            {
                'id': 7,
                'name': 'Cat 7',
                'description': 'Some description.'
            },
            {
                'id': 8,
                'name': 'Cat 8',
                'description': 'Some description.'
            },
            {
                'id': 9,
                'name': 'Cat 9',
                'description': 'Some description.'
            }
        ];

        vm.task.name = '';
        vm.task.description = '';
        vm.task.accomplished = false;
        vm.task.categories = [
            1, 2, 3, 9
        ];

        vm.toggle = function(item, list) {
            var idx = list.indexOf(item);
            if (idx > -1) {
                list.splice(idx, 1);
            } else {
                list.push(item);
            }
        };

        vm.exists = function(item, list) {
            return list.indexOf(item) > -1;
        };

        vm.sendTaskForm = function() {
            vm.task.$save(function(response) {
                console.log(response);
            });
        };
        /*
        vm.sendTaskForm = function() {

            var newTask = new vm.TasksService({
                method: 'POST',
                params: {
                    name: vm.task.name,
                    description: vm.task.description,
                    accomplished: vm.task.accomplished,
                    categories: vm.categories
                }
            });
            newTask.$save();
        };
        */

    }

    function TasksEditCtrl(
        $scope,
        $state,
        $stateParams,
        ToastService,
        DialogService,
        TasksService,
        TasksCategoriesService
    ) {
        var vm = this;
        vm.ToastService = ToastService;
        vm.DialogService = DialogService;
        vm.TasksService = TasksService;
        vm.TasksCategoriesService = TasksCategoriesService;
        vm.$scope = $scope;
        vm.$stateParams = $stateParams;
        vm.$state = $state;

        vm.action = 'Editar';

        vm.task = {};
        vm.TasksService.get({ id: vm.$stateParams.id }, function(task, getResponseHeaders) {
            vm.task = task;
        }, function(response) {
            if (response.status === 404) {
                window.history.back();
                vm.ToastService.error('No se encontro la rarea!');
            }
        });
    }

})();