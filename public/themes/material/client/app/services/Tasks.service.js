(function() {
    'use strict';
    angular.module('app.services')
        .factory('TasksService', ['$resource', TasksService]);

    function TasksService($resource) {
        return $resource(SITE_URL + '/api/tasks/:id',
            {
                id: '@_id'
            }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            },
            save: {
                method: 'POST'
            }
        }, {
            stripTrailingSlashes: false
        });
    }
})();