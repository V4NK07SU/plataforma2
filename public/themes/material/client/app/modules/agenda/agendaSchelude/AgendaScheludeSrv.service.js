(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaScheludeSrv', ['$resource', AgendaScheludeSrv]);

    function AgendaScheludeSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/agendaSchelude/:id',
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