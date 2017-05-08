(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthTypeDimensionSrv', ['$resource', HealthTypeDimensionSrv]);

    function HealthTypeDimensionSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/type/dimension/:id',
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