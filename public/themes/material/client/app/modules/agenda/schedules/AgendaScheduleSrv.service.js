/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaScheDuleSrv', ['$resource', AgendaScheDuleSrv]);

    function AgendaScheDuleSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/schedules/:id',
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