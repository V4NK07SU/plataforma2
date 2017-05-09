(function() {
	'use strict';
	angular.module('app.modules.health-record.history')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/history', {
				url: '/health-record/history',
				templateUrl: THEME_URL + 'app/modules/health-record/history/views/index.html',
				controller: 'HealthHistoryIndexCtrl',
				resolve: {
					HealthHistorySrv: 'HealthHistorySrv',
					History: function (HealthHistorySrv) {
						return HealthHistorySrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/history/edit', {
				url: '/health-record/history/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/history/views/edit.html',
				controller: 'HealthHistoryEditCtrl',
				resolve: {
					HealthHistorySrv: 'HealthHistorySrv',
					
					history: function (HealthHistorySrv, $stateParams) {
						return HealthHistorySrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/history/create', {
				url: '/health-record/history/create',
				templateUrl: THEME_URL + 'app/modules/health-record/history/views/create.html',
				controller: 'HealthHistoryCreateCtrl',
				resolve: {
					
					
										
				}
			});			
		}]);
})();