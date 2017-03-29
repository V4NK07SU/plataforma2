(function() {
    'use strict';
    angular.module('app.services')
        .factory('TasksCategoriesService', ['$resource', TasksCategoriesService]);

    function TasksCategoriesService($resource) {
        return $resource(SITE_URL + '/api/tasks/categories/:id', { id: '@_id' }, {
            update: {
                method: 'PUT' // this method issues a PUT request
            }
        }, {
            stripTrailingSlashes: false
        });
    }
})();