(function () {
    "use strict";

    angular.module("app.services")
        .factory("PollTypesSrv", ['$resource', PollTypesSrv]);

    function PollTypesSrv($resource) {
        var resource = $resource(SITE_URL + '/api/polls/polltypes/:id', {id:'@id'});
        return resource;
    }
}());