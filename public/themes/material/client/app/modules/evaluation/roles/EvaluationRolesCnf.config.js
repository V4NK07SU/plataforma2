(function() {
	'use strict';
	angular.module('app.modules.evaluation.roles')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('evaluation/roles', {
				url: '/evaluation/roles',
				templateUrl: THEME_URL + 'app/modules/evaluation/roles/views/index.html',
				controller: 'EvaluationRolesIndexCtrl',
				resolve: {
					EvaluationRolesSrv: 'EvaluationRolesSrv',
					roles: function (EvaluationRolesSrv) {
						return EvaluationRolesSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('evaluation/roles/edit', {
				url: '/evaluation/roles/edit/:id',
				templateUrl: THEME_URL + 'app/modules/evaluation/roles/views/edit.html',
				controller: 'EvaluationRolesEditCtrl',
				resolve: {
					EvaluationRolesSrv: 'EvaluationRolesSrv',
					roles: function (EvaluationRolesSrv, $stateParams) {
						return EvaluationRolesSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('evaluation/roles/create', {
				url: '/evaluation/roles/create',
				templateUrl: THEME_URL + 'app/modules/evaluation/roles/views/form.html',
				controller: 'EvaluationRolesEditCtrl',
				resolve: {
					EvaluationRolesSrv: 'EvaluationRolesSrv',
					roles: function (EvaluationRolesSrv, $stateParams) {
						return EvaluationRolesSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();