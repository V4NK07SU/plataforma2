(function() {
	'use strict';
	angular.module('app.modules.health-record.public')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/public', {
				url: '/health-record/public',
				templateUrl: THEME_URL + 'app/modules/health-record/public/views/index.html',
				controller: 'HealthPublicIndexCtrl',
				resolve: {
					//HealthRecordSrv: 'HealthRecordSrv',
					//Record: function (HealthRecordSrv) {
					//	return HealthRecordSrv.get().$promise;
					//}					
				}
			});			
		}]);
})();