(function () {

	"use strict";

	angular.module('app.services')
	.factory('AgendaDiarySrv', ['$resource', AgendaDiarySrv]);

	function AgendaDiarySrv($resource) {
		return $resource(
			SITE_URL + '/api/agendas/agenda/:id',
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