(function () {
    'use strict';

    angular.module('app.page')
    .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
    .controller('authCtrl', ['$scope', '$window', '$location', '$http', '$timeout', '$auth', 'AuthSrv', 'ToastService', authCtrl])
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

    function authCtrl($scope, $window, $location, $http, $timeout, $auth, AuthSrv, ToastService) {

        if($auth.isAuthenticated()) {
            $state.go('dashboard');
            ToastService.show('Ya se encuentra autenticado!');
        }
        $scope.user = {
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            uid: ''
        };
        $scope.login = function() {
            AuthSrv.userLogin($scope.user);        
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



