/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthDimensionSrv', ['$resource', HealthDimensionSrv]);

    function HealthDimensionSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/dimension/:id',
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