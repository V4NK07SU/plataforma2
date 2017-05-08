/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthRecordDimensionSrv', ['$resource', HealthRecordDimensionSrv]);

    function HealthRecordDimensionSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/record/dimension/:id',
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