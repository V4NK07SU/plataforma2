(function() {
	'use strict';
	angular.module('app.modules.health-record.dimensions')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/dimensions', {
				url: '/health-record/dimensions',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions/views/index.html',
				controller: 'HealthDimensionIndexCtrl',
				resolve: {
					HealthDimensionSrv: 'HealthDimensionSrv',
					Dimension: function (HealthDimensionSrv) {
						return HealthDimensionSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/dimensions/edit', {
				url: '/health-record/dimensions/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions/views/edit.html',
				controller: 'HealthDimensionEditCtrl',
				resolve: {
					HealthDimensionSrv: 'HealthDimensionSrv',
					dimensions_categories: function (HealthDimensionCategorieSrv) {
						return HealthDimensionCategorieSrv.get({id:'all'}).$promise;
					},
					dimensions: function (HealthDimensionSrv, $stateParams) {
						return HealthDimensionSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/dimensions/create', {
				url: '/health-record/dimensions/create',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions/views/create.html',
				controller: 'HealthDimensionCreateCtrl',
				resolve: {
					
					dimensions_categories: function (HealthDimensionCategorieSrv) {
						return HealthDimensionCategorieSrv.get({id:'all'}).$promise;
					}					
				}
			});			
		}]);
})();