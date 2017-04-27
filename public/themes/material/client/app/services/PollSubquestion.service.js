(function() {
    "use strict";
    angular.module('app.services').factory('PollSubquestionSrv', ['$resource', PollSubquestionSrv]);

    function PollSubquestionSrv($resource) {
        return $resource(SITE_URL + '/api/polls/pollsubquestions/:id', {
            id: '@id'
        });
    }
}());