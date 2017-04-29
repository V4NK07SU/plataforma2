(function () {

    "use strict";

    angular.module('app.services')
        .factory('EvaluationRolesSrv', ['$resource', EvaluationRolesSrv]);

    function EvaluationRolesSrv($resource) {
        return $resource(
            SITE_URL + '/api/evaluations/roles/:id',
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