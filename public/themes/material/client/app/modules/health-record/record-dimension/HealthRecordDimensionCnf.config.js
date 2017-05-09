(function() {
	'use strict';
	angular.module('app.modules.health-record.record-dimension')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/record-dimension', {
				url: '/health-record/record-dimension',
				templateUrl: THEME_URL + 'app/modules/health-record/record-dimension/views/index.html',
				controller: 'HealthRecordDimensionIndexCtrl',
				resolve: {
					HealthRecordDimensionSrv: 'HealthRecordDimensionSrv',
					RecordDimension: function (HealthRecordDimensionSrv) {
						return HealthRecordDimensionSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/record-dimension/edit', {
				url: '/health-record/record-dimension/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/record-dimension/views/edit.html',
				controller: 'HealthRecordDimensionEditCtrl',
				resolve: {
					HealthRecordDimensionSrv: 'HealthRecordDimensionSrv',
					dimensions: function (HealthDimensionSrv) {
						return HealthDimensionSrv.get({id:'all'}).$promise;
					},
					record_dimension: function (HealthRecordDimensionSrv, $stateParams) {
						return HealthRecordDimensionSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/record-dimension/create', {
				url: '/health-record/record-dimension/create',
				templateUrl: THEME_URL + 'app/modules/health-record/record-dimension/views/create.html',
				controller: 'HealthRecordDimensionCreateCtrl',
				resolve: {
					
					dimensions: function (HealthDimensionSrv) {
						return HealthDimensionSrv.get({id:'all'}).$promise;
					}					
				}
			});			
		}]);
})();