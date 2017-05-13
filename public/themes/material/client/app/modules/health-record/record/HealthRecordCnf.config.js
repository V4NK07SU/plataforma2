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
					Record: function (HealthRecordSrv) {
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
					types: function (HealthTypeSrv) {
						return HealthTypeSrv.get({id:'all'}).$promise;
					},
					record: function (HealthRecordSrv, $stateParams) {
						return HealthRecordSrv.get({id: $stateParams.id}).$promise;
					},
					users: function (UsersSrv) {
						return UsersSrv.get({id:'all'}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/record/create', {
				url: '/health-record/record/create',
				templateUrl: THEME_URL + 'app/modules/health-record/record/views/create.html',
				controller: 'HealthRecordCreateCtrl',
				resolve: {
					
					types: function (HealthTypeSrv) {
						return HealthTypeSrv.get({id:'all'}).$promise;
					},

						users: function (UsersSrv) {
						return UsersSrv.get({id:'all'}).$promise;
					}						
				}
			});			
		}]);
})();