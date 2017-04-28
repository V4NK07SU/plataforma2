/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('BlogUserSrv', ['$resource', BlogUserSrv]);

    function BlogUserSrv($resource) {
        return $resource(
            SITE_URL + '/api/blog/users/:id',
            {
                id: '@id'
            },
            {

                update: {
                    method: 'PUT'
                },
                get: {
                    method: 'GET', cache: false
                },
            },
            {
                stripTrailingSlashes: false
            }
        );
    }

}());