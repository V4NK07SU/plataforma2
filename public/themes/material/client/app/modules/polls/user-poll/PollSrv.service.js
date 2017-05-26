(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollSrv', ['$resource', PollSrv]);

	function PollSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/polls/:id',
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