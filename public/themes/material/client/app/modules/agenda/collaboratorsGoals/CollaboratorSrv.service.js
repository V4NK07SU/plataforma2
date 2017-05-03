(function () {

	"use strict";

	angular.module('app.services')
	.factory('CollaboratorSrv', ['$resource', CollaboratorSrv]);

	function CollaboratorSrv($resource) {
		return $resource(
			SITE_URL + '/api/agendas/collaborators/:id',
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