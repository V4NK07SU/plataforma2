(function () {
	'use strict';
	angular.module('app.modules.health-record.typedimension')
		.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
			//INDEX
			function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
				$sceDelegateProvider.resourceUrlWhitelist(['**']);

				$stateProvider.state('health-record/typedimension', {
					url: '/health-record/typedimension',
					templateUrl: THEME_URL + 'app/modules/health-record/typedimension/views/index.html',
					controller: 'HealthTypeDimensionIndexCtrl',
					resolve: {
						HealthTypeDimensionSrv: 'HealthTypeDimensionSrv',
						healthTypeDimension: function (HealthTypeDimensionSrv) {
							return HealthTypeDimensionSrv.get().$promise;
						}
					}
				});

				//EDIT
				$stateProvider.state('health-record/typedimension/edit', {
					url: '/health-record/typedimension/edit/:id',
					templateUrl: THEME_URL + 'app/modules/health-record/typedimension/views/edit.html',
					controller: 'HealthTypeDimensionEditCtrl',
					resolve: {
						HealthTypeDimensionSrv: 'HealthTypeDimensionSrv',
						typedimension: function (HealthTypeDimensionSrv, $stateParams) {
							return HealthTypeDimensionSrv.get({ id: $stateParams.id }).$promise;
						},

						dimensions: function (HealthDimensionSrv) {
						return HealthDimensionSrv.get({id:'all'}).$promise;	
					},
						types: function (HealthTypeSrv) {
						return HealthTypeSrv.get({id:'all'}).$promise;				
					}
					}
				
			
				});
				//CREATE
				$stateProvider.state('health-record/typedimension/create', {
					url: '/health-record/typedimension/create',
					templateUrl: THEME_URL + 'app/modules/health-record/typedimension/views/create.html',
					controller: 'HealthTypeDimensionCreateCtrl',
					resolve: {
					dimensions: function (HealthDimensionSrv) {
						return HealthDimensionSrv.get({id:'all'}).$promise;	
					},
						types: function (HealthTypeSrv) {
						return HealthTypeSrv.get({id:'all'}).$promise;				
					}
					}
				});
			}]);
})();