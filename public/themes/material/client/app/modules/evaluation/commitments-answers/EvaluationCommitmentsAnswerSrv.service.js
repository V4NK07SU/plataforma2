(function () {

    "use strict";

    angular.module('app.services')
        .factory('EvaluationAnswerSrv', ['$resource', EvaluationAnswerSrv]);

    function EvaluationAnswerSrv($resource) {
        return $resource(
            SITE_URL + '/api/evaluations/commitments/answers/:id',
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