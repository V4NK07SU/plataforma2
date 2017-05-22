(function() {
	'use strict';
	angular.module('app.modules.health-record.user-family-composition')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('health-record/user-family-composition', {
				url: '/health-record/user-family-composition',
				templateUrl: THEME_URL + 'app/modules/health-record/user-family-composition/views/index.html',
				controller: 'UserFamilyCompositionIndexCtrl',
				resolve: {
					UserFamilyCompositionSrv: 'UserFamilyCompositionSrv',
					FamilyComposition: function (UserFamilyCompositionSrv) {
						return UserFamilyCompositionSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('health-record/user-family-composition/edit', {
				url: '/health-record/user-family-composition/edit/:id',
				templateUrl: THEME_URL + 'app/modules/health-record/user-family-composition/views/edit.html',
				controller: 'UserFamilyCompositionEditCtrl',
				resolve: {
					UserFamilyCompositionSrv: 'UserFamilyCompositionSrv',
					user_family_composition: function (UserFamilyCompositionSrv, $stateParams) {
						return UserFamilyCompositionSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('health-record/user-family-composition/create', {
				url: '/health-record/user-family-composition/create',
				templateUrl: THEME_URL + 'app/modules/health-record/user-family-composition/views/create.html',
				controller: 'UserFamilyCompositionCreateCtrl',
				resolve: {
					
										
				}
			});			
		}]);
})();