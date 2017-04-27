(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollItemsSrv', ['$resource', PollItemsSrv]);

	function PollItemsSrv($resource) {
		return $resource(SITE_URL + '/api/polls/pollitems/:id', {id: '@id'});
	}
	
}());