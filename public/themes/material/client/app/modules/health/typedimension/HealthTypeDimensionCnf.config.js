(function () {
	'use strict';
	angular.module('app.modules.health.typedimension')
		.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
			//INDEX
			function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
				$sceDelegateProvider.resourceUrlWhitelist(['**']);

				$stateProvider.state('health/typedimension', {
					url: '/health/typedimension',
					templateUrl: THEME_URL + 'app/modules/health/typedimension/views/index.html',
					controller: 'HealthTypeDimensionIndexCtrl',
					resolve: {
						HealthTypeDimensionSrv: 'HealthTypeDimensionSrv',
						healthTypeDimension: function (HealthTypeDimensionSrv) {
							return HealthTypeDimensionSrv.get().$promise;
						}
					}
				});

				//EDIT
				$stateProvider.state('health/typedimension/edit', {
					url: '/health/typedimension/edit/:id',
					templateUrl: THEME_URL + 'app/modules/health/typedimension/views/edit.html',
					controller: 'HealthTypeDimensionEditCtrl',
					resolve: {
						HealthTypeDimensionSrv: 'HealthTypeDimensionSrv',
						typedimension: function (HealthTypeDimensionSrv, $stateParams) {
							return HealthTypeDimensionSrv.get({ id: $stateParams.id }).$promise;
						}
					}
				});
				//CREATE
				$stateProvider.state('health/typedimension/create', {
					url: '/health/typedimension/create',
					templateUrl: THEME_URL + 'app/modules/health/typedimension/views/create.html',
					controller: 'HealthTypeDimensionCreateCtrl',
					resolve: {
						HealthTypeDimensionSrv: 'HealthTypeDimensionSrv',
						typedimension: function (HealthTypeDimensionSrv, $stateParams) {
							return HealthTypeDimensionSrv.get({ id: $stateParams.id }).$promise;
						},	
						HealthTypeSrv: function (HealthTypeSrv) {
							return HealthTypeSrv.get({ id: 'all' }).$promise;
						},
						/**HealthDimensionSrv: function (HealthDimensionSrv){
							return HealthDimensionSrv.get({id: 'all'}).$promise;
						}	*/				
					}
				});
			}]);
})();