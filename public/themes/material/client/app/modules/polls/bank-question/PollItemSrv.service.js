(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollItemQuestionSrv', ['$resource', PollItemQuestionSrv]);

	function PollItemQuestionSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/pollitems/saveall/:id',
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