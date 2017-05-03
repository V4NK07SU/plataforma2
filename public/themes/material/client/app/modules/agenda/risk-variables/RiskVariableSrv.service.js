(function () {

    "use strict";

    angular.module('app.services')
        .factory('RiskVariableSrv', ['$resource', PhenomenaSrv]);

    function PhenomenaSrv($resource) {
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