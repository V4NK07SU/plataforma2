(function() {
    angular.module("app.services")
        .service("ToastService", ["$mdToast", ToastService]);

    function ToastService($mdToast) {
        var vm = this;
        vm.$mdToast = $mdToast;
        vm.position = 'top right';
        vm.action = 'OK';
        vm.delay = 6000;

        vm.show = function(content) {
            if (!content) {
                return false;
            }

            return vm.$mdToast.show(
                vm.$mdToast.simple()
                .content(content)
                .position(vm.position)
                .action(vm.action)
                .hideDelay(vm.delay)
            );
        }

        vm.success = function(content) {
            if (!content) {
                return false;
            }

            return vm.$mdToast.show(
                vm.$mdToast.simple()
                .content(content)
                .position(vm.position)
                .theme('success')
                .action(vm.action)
                .hideDelay(vm.delay)
            );
        }

        vm.error = function(content) {
            if (!content) {
                return false;
            }

            return vm.$mdToast.show(
                vm.$mdToast.simple()
                .content(content)
                .position(vm.position)
                .theme('error')
                .action(vm.action)
                .hideDelay(vm.delay)
            );
        }

        vm.warning = function(content) {
            if (!content) {
                return false;
            }

            return vm.$mdToast.show(
                vm.$mdToast.simple()
                .content(content)
                .position(vm.position)
                .theme('warning')
                .action(vm.action)
                .hideDelay(vm.delay)
            );
        }

        vm.info = function(content) {
            if (!content) {
                return false;
            }

            return vm.$mdToast.show(
                vm.$mdToast.simple()
                .content(content)
                .position(vm.position)
                .theme('info')
                .action(vm.action)
                .hideDelay(vm.delay)
            );
        }

    };
}());