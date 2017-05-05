(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaServiceSrv', ['$resource', AgendaServiceSrv]);

    function AgendaServiceSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/services/:id',
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