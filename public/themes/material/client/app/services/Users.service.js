(function() {
    angular.module("app").factory("Users", ["ApiService", "Restangular", function(ApiService, Restangular) {
        var service = {
            getUsers: getUsers,
            getUser: getUser
        };

        // get examples from server by using Restangular
        function getUsers() {
            return Restangular.all('users').getList();
        }

        // get example with given id from server by using Restangular
        function getUser(userId) {
            return Restangular.one('users', userId).get();
        }

        return service;
    }]);
}());