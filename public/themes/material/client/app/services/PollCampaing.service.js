 (function () {

	"use strict";

	angular.module('app.services')
	.factory('PollCampaingSrv', ['$resource', PollCampaingSrv]);

	function PollCampaingSrv($resource) {
		return $resource(SITE_URL + '/api/polls/pollcampaings/:id', {id: '@id'});
	}
	
}());