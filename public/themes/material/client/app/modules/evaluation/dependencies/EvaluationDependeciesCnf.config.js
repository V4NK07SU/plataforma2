(function() {
	'use strict';
	angular.module('app.modules.evaluation.dependencies')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('evaluation/dependencies', {
				url: '/evaluation/dependencies',
				templateUrl: THEME_URL + 'app/modules/evaluation/dependencies/views/index.html',
				controller: 'EvaluationDependencieIndexCtrl',
				resolve: {
					DependencieSrv: 'DependencieSrv',
					Dependencies: function (DependencieSrv) {
						return DependencieSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('evaluation/dependencies/edit', {
				url: '/evaluation/dependencies/edit/:id',
				templateUrl: THEME_URL + 'app/modules/evaluation/dependencies/views/edit.html',
				controller: 'EvaluationDependencieEditCtrl',
				resolve: {
					DependencieSrv: 'DependencieSrv',
					dependencies: function (DependencieSrv, $stateParams) {
						return DependencieSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('evaluation/dependencies/create', {
				url: '/evaluation/dependencies/create',
				templateUrl: THEME_URL + 'app/modules/evaluation/dependencies/views/form.html',
				controller: 'EvaluationDependencieEditCtrl',
				resolve: {
					DependencieSrv: 'DependencieSrv',
					dependencies: function (DependencieSrv, $stateParams) {
						return DependencieSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();