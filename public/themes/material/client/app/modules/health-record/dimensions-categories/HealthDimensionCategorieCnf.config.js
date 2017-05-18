(function() {
	'use strict';
	angular.module('app.modules.health-record.dimensions-categories')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/dimensions-categories', {
				url: '/health-record/dimensions-categories',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions-categories/views/index.html',
				controller: 'HealthDimensionCategorieIndexCtrl',
				resolve: {
					HealthDimensionCategorieSrv: 'HealthDimensionCategorieSrv',
					DimensionCategories: function (HealthDimensionCategorieSrv) {
						return HealthDimensionCategorieSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/dimensions-categories/edit', {
				url: '/health-record/dimensions-categories/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions-categories/views/edit.html',
				controller: 'HealthDimensionCategorieEditCtrl',
				resolve: {
					HealthDimensionCategorieSrv: 'HealthDimensionCategorieSrv',
					dimensions_categories: function (HealthDimensionCategorieSrv, $stateParams) {
						return HealthDimensionCategorieSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/dimensions-categories/create', {
				url: '/health-record/dimensions-categories/create',
				templateUrl: THEME_URL + 'app/modules/health-record/dimensions-categories/views/create.html',
				controller: 'HealthDimensionCategorieCreateCtrl',
				resolve: {
				
									
				}
			});			
		}]);
})();