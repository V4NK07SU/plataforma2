(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollItemSrv', ['$resource', PollItemSrv]);

	function PollItemSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/pollitems/:id',
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