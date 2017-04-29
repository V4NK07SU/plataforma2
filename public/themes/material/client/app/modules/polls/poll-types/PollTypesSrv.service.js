<<<<<<< HEAD
/**
 *
 */
(function () {

    "use strict";

    angular.module('app.services')
        .factory('PollTypesSrv', ['$resource', PollTypesSrv]);

    function PollTypesSrv($resource) {
        return $resource(
            SITE_URL + '/api/polls/poll-types/:id',
           {
=======
(function () {

	"use strict";

	angular.module('app.services')
	.factory('PollTypesSrv', ['$resource', PollTypesSrv]);

	function PollTypesSrv($resource) {
		return $resource(
			SITE_URL + '/api/polls/polltypes/:id',
	     	{
>>>>>>> develop
                id: '@id'
            },
            {

                update: {
                    method: 'PUT'
                },
                get: {
<<<<<<< HEAD
                    method: 'GET', 
                    cache: false
                }
            },
            {
                stripTrailingSlashes: false
            }
        );
        
      }

=======
                    method: 'GET', cache: false
                },
            },
            {
                stripTrailingSlashes: true
            }
		);
	}
	
>>>>>>> develop
}());