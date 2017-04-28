(function () {

    "use strict";

    angular.module('app.services')
        .factory('DependencieSrv', ['$resource', DependencieSrv]);

    function DependencieSrv($resource) {
        return $resource(
            SITE_URL + '/api/evaluations/dependencies/:id',
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