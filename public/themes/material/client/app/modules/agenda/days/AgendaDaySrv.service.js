(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaDaySrv', ['$resource', AgendaDaySrv]);

    function AgendaDaySrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/dias/:id',
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