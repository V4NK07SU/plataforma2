(function () {

    "use strict";

    angular.module('app.services')
        .factory('competencieSrv', ['$resource', competencieSrv]);

    function competencieSrv($resource) {
        return $resource(
            SITE_URL + '/api/evaluations/competencies/:id',
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