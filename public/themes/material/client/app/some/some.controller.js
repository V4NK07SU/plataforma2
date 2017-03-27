(function () {
    'use strict';

    angular
        .module('app.some')
        .controller('SomeListCtrl', ['$scope', '$mdDialog', SomeListCtrl]);

        function SomeListCtrl ($scope, $mdDialog)
        {
            var self = this;
            self.readonly = false;
            $scope.messages = [
                {id: 1, title: "Message A", selected: false},
                {id: 2, title: "Message B", selected: true},
                {id: 3, title: "Message C", selected: true},
            ];

            $scope.settings = [
                { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'zmdi zmdi-wifi-alt', enabled: true },
                { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'zmdi zmdi-bluetooth', enabled: false },
            ];

            $scope.navigateTo = function(to, event) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('Navigating')
                        .content('Imagine being taken to ' + to)
                        .ariaLabel('Navigation demo')
                        .ok('Neat!')
                        .targetEvent(event)
                );
            };
            $scope.doSecondaryAction = function(event) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('Secondary Action')
                        .content('Secondary actions can be used for one click actions')
                        .ariaLabel('Secondary click demo')
                        .ok('Neat!')
                        .targetEvent(event)
                );
            };
        }
})();