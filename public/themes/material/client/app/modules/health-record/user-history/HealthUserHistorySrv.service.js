(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthHistorySrv', ['$resource', HealthHistorySrv]);

    function HealthHistorySrv($resource) {
        return $resource(
            SITE_URL + '/api/health/history/:id',
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