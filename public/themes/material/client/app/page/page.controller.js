(function () {
    'use strict';

    angular.module('app.page')
    .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
    .controller('authCtrl', ['$scope', '$window', '$location', authCtrl])
        .controller('usersCtrl', ['$scope', '$window', '$location'], usersCtrl);

    function usersCtrl($scope, $window, $location) {
        var vm = this;

        vm.loginData = {
            email: '',
            password: ''
        };

        vm.registerData = {
            name: '',
            email: '',
            password: ''
        }

        vm.forgot_passwordData = {
            email: ''
        }

    }

    function invoiceCtrl($scope, $window) {
        var printContents, originalContents, popupWin;
        
        $scope.printInvoice = function() {
            printContents = document.getElementById('invoice').innerHTML;
            originalContents = document.body.innerHTML;        
            popupWin = window.open();
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
            popupWin.document.close();
        }
    }

    function authCtrl($scope, $window, $location) {
        $scope.login = function() {
            $location.url('/')
        }

        $scope.signup = function() {
            $location.url('/')
        }

        $scope.reset =    function() {
            $location.url('/')
        }

        $scope.unlock =    function() {
            $location.url('/')
        }     
    }

})(); 



