(function() {

    'use strict';

    angular
        .module("app.services")
        .factory("UserService", ['$resource', UserService]);

    function UserService($resource) {
        return $resource(SITE_URL + '/api/users/all');
    }

}());