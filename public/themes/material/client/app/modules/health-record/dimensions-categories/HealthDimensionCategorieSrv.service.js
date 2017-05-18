/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthDimensionCategorieSrv', ['$resource', HealthDimensionCategorieSrv]);

    function HealthDimensionCategorieSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/dimension/categories/:id',
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