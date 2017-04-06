(function() {
<<<<<<< HEAD
    angular.module("app.services").service("DialogService", ["$mdDialog", DialogService]);
=======
    angular.module("app.services")
        .service("DialogService", ["$mdDialog", DialogService]);
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c

    function DialogService($mdDialog) {
        var vm = this;
        vm.$mdDialog = $mdDialog;
<<<<<<< HEAD
=======

>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
        vm.fromTemplate = function(template, options) {
            if (!template) {
                return false;
            }
<<<<<<< HEAD
            if (!options) {
                options = {};
            }
            options.templateUrl = template + '.dialog.html'
            return vm.$mdDialog.show(options);
        }
        vm.hide = function(params) {
            return vm.$mdDialog.hide(params);
        }
        vm.cancel = function() {
            return vm.$mdDialog.cancel();
        }
        vm.alert = function(title, content, params) {
            var alert = vm.$mdDialog.alert(params).title(title).content(content).ariaLabel(content).ok('Ok');
            vm.$mdDialog.show(alert);
        }
        vm.confirm = function(title, content, params) {
            var confirm = vm.$mdDialog.confirm(params).title(title).content(content).ariaLabel(content).ok('Ok').cancel('Cancel');
            return vm.$mdDialog.show(confirm);
        }
        vm.prompt = function(title, content, placeholder, params) {
            var prompt = vm.$mdDialog.prompt(params).title(title).textContent(content).placeholder(placeholder).ariaLabel(placeholder).ok('Ok').cancel('Cancel');
=======

            if (!options) {
                options = {};
            }

            options.templateUrl = template + '.dialog.html'

            return vm.$mdDialog.show(options);
        }

        vm.hide = function(params) {
            return vm.$mdDialog.hide(params);
        }

        vm.cancel = function() {
            return vm.$mdDialog.cancel();
        }

        vm.alert = function(title, content, params) {
            var alert = vm.$mdDialog.alert(params)
                .title(title)
                .content(content)
                .ariaLabel(content)
                .ok('Ok');

            vm.$mdDialog.show(alert);
        }

        vm.confirm = function(title, content, params) {
            var confirm = vm.$mdDialog.confirm(params)
                .title(title)
                .content(content)
                .ariaLabel(content)
                .ok('Ok')
                .cancel('Cancel');

            return vm.$mdDialog.show(confirm);
        }

        vm.prompt = function(title, content, placeholder, params) {
            var prompt = vm.$mdDialog.prompt(params)
                .title(title)
                .textContent(content)
                .placeholder(placeholder)
                .ariaLabel(placeholder)
                .ok('Ok')
                .cancel('Cancel');

>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
            return vm.$mdDialog.show(prompt);
        }
    };
}());