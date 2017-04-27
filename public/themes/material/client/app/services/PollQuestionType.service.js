(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollQuestionTypeSrv', ['$resource', PollQuestionTypeSrv]);

	function PollQuestionTypeSrv($resource) {
		return $resource(SITE_URL + '/api/polls/pollquestiontypes/:id', {id: '@id'});
	}
	
}());