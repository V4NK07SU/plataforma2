(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollQuestionSrv', ['$resource', PollQuestionSrv]);

	function PollQuestionSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/pollquestions/:id',
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