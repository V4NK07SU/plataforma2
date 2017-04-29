/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('BlogAuthorSrv', ['$resource', BlogAuthorSrv]);

    function BlogAuthorSrv($resource) {
        return $resource(
            SITE_URL + '/api/blog/authors/:id',
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
                stripTrailingSlashes: true
            }
        );
    }

}());