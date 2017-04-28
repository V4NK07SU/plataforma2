/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaHourSrv', ['$resource', AgendaHourSrv]);

    function AgendaHourSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/horas/:id',
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