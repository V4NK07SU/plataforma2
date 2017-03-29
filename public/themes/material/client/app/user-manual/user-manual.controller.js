(function() {
    'use strict';

    angular
        .module('app.userManual')
        .controller('userManualCtrl', ['$scope', '$http', userManualCtrl]);


    function userManualCtrl($scope, $http) {
        var vm = this;

        this.pageTitle = "USER_MANUAL_INDEX_TITLE";


    }

})();