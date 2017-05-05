(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaRiskVariableSrv', ['$resource', AgendaRiskVariableSrv]);

    function AgendaRiskVariableSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/riskvariables/:id',
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