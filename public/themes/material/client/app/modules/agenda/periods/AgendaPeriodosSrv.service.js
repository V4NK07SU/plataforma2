/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaPeriodSrv', ['$resource', AgendaPeriodSrv]);

    function AgendaPeriodSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/periods/:id',
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