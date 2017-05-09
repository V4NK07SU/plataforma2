(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthTypeSrv', ['$resource', HealthTypeSrv]);

    function HealthTypeSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/types/:id',
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