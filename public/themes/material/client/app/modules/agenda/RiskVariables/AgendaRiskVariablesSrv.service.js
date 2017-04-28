(function () {

    "use strict";

    angular.module('app.services')
        .factory('PhenomenaSrv', ['$resource', PhenomenaSrv]);

    function PhenomenaSrv($resource) {
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