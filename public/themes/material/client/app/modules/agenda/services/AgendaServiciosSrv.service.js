(function () {

    "use strict";

    angular.module('app.services')
        .factory('ServiceSrv', ['$resource', ServiceSrv]);

    function ServiceSrv($resource) {
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