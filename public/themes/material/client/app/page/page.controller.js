(function () {
    'use strict';

    angular.module('app.page')
    .controller('invoiceCtrl', ['$scope', '$window', invoiceCtrl])
    .controller('authCtrl', [
        '$rootScope','$scope', '$window', '$location', '$auth', '$state', 
        'ToastService', 'AuthSrv',
        authCtrl])
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

    function authCtrl($rootScope, $scope, $window, $location, $auth, $state, ToastService, AuthSrv) {
        if($auth.isAuthenticated()) {
            $state.go('dashboard');
            ToastService.show('Ya se encuentra autenticado!');
        }
        $scope.user = {
            email: '',
            password: '',
            first_name: '',
            last_name: ''
        };

        $scope.login = function() {                       
            AuthSrv.userLogin($scope.user);
        }

        $scope.signup = function() {
            $location.url('/')
        }

        $scope.reset = function() {
            $location.url('/')
        }

        $scope.unlock = function() {
            $location.url('/')
        }     

        function failedLogin(response) {
            if (response.status === 422) {
                ToastService.error('Ingrece un email o password validos!');
            }

            if (response.status === 401) {
                ToastService.error('El email o la clave no coinciden!');
            }
        }
    }

    

})(); 



