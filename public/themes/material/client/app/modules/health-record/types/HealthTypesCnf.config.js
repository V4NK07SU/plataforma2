(function() {
	'use strict';
	angular.module('app.modules.health-record.types')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/types', {
				url: '/health-record/types',
				templateUrl: THEME_URL + 'app/modules/health-record/types/views/index.html',
				controller: 'HealthTypesIndexCtrl',
				resolve: {
					HealthTypeSrv: 'HealthTypeSrv',
					healthService: function (HealthTypeSrv) {
						return HealthTypeSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/types/edit', {
				url: '/health-record/types/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/types/views/edit.html',
				controller: 'HealthTypesEditCtrl',
				resolve: {
					HealthTypeSrv: 'HealthTypeSrv',
					types: function (HealthTypeSrv, $stateParams) {
						return HealthTypeSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/types/create', {
				url: '/health-record/types/create',
				templateUrl: THEME_URL + 'app/modules/health-record/types/views/create.html',
				controller: 'HealthTypesCreateCtrl',
				resolve: {				
				}
			});			
		}]);
})();