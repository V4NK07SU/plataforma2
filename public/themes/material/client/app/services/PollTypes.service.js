(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollTypesSrv', ['$resource', PollTypesSrv]);

	function PollTypesSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/polltypes/:id',
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