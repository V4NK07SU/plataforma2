(function(){
    'use strict';

    angular
        .module('app.services')
        .factory('UsersRoleSrv', factory)

    factory.$inject = ['$resource'];

    function factory($resource) {
        return $resource(
            SITE_URL + '/api/users/roles/:id',
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
})();