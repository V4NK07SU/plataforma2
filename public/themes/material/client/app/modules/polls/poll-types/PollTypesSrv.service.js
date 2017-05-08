
(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollTypeSrv', ['$resource', PollTypeSrv]);

	function PollTypeSrv($resource) {
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