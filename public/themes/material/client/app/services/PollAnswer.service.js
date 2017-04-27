(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollAnswerSrv', ['$resource', PollAnswerSrv]);

	function PollAnswerSrv($resource) {
		return $resource(SITE_URL + '/api/polls/pollanswers/:id', {id: '@id'});
	}
	
}());