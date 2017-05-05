(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaPhenomenaSrv', ['$resource', AgendaPhenomenaSrv]);

    function AgendaPhenomenaSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/phenomenas/:id',
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