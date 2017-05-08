/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('UserFamilyCompositionSrv', ['$resource', UserFamilyCompositionSrv]);

    function UserFamilyCompositionSrv($resource) {
        return $resource(
            SITE_URL + '/api/health/userfamilycomposition/:id',
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