(function () {

    "use strict";

    angular.module('app.services')
        .factory('HealthRecordSrv', ['$resource', HealthRecordSrv]);

    function HealthRecordSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/record/:id',
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