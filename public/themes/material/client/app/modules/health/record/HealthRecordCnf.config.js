(function() {
	'use strict';
	angular.module('app.modules.health-record.record')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/record', {
				url: '/health-record/record',
				templateUrl: THEME_URL + 'app/modules/health-record/record/views/index.html',
				controller: 'HealthRecordIndexCtrl',
				resolve: {
					HealthRecordSrv: 'HealthRecordSrv',
					healthService: function (HealthRecordSrv) {
						return HealthRecordSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/record/edit', {
				url: '/health-record/record/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/record/views/edit.html',
				controller: 'HealthRecordEditCtrl',
				resolve: {
					HealthRecordSrv: 'HealthRecordSrv',
					types: function (HealthRecordSrv, $stateParams) {
						return HealthRecordSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/record/create', {
				url: '/health-record/record/create',
				templateUrl: THEME_URL + 'app/modules/health-record/record/views/create.html',
				controller: 'HealthRecordCreateCtrl',
				resolve: {				
				}
			});			
		}]);
})();