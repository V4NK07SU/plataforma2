(function() {
	'use strict';
	angular.module('app.modules.health.types')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health/types', {
				url: '/health/types',
				templateUrl: THEME_URL + 'app/modules/health/types/views/index.html',
				controller: 'HealthTypesIndexCtrl',
				resolve: {
					HealthTypeSrv: 'HealthTypeSrv',
					healthService: function (HealthTypeSrv) {
						return HealthTypeSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health/types/edit', {
				url: '/health/types/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health/types/views/edit.html',
				controller: 'HealthTypesEditCtrl',
				resolve: {
					HealthTypeSrv: 'HealthTypeSrv',
					types: function (HealthTypeSrv, $stateParams) {
						return HealthTypeSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health/types/create', {
				url: '/health/types/create',
				templateUrl: THEME_URL + 'app/modules/health/types/views/create.html',
				controller: 'HealthTypesCreateCtrl',
				resolve: {				
				}
			});			
		}]);
})();