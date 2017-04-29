(function() {
	'use strict';
	angular.module('app.modules.evaluation.competencies')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('evaluation/competencies', {
				url: '/evaluation/competencies',
				templateUrl: THEME_URL + 'app/modules/evaluation/competencies/views/index.html',
				controller: 'EvaluationCompetenciesIndexCtrl',
				resolve: {
					competencieSrv: 'competencieSrv',
					competencies: function (competencieSrv) {
						return competencieSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('evaluation/competencies/edit', {
				url: '/evaluation/competencies/edit/:id',
				templateUrl: THEME_URL + 'app/modules/evaluation/competencies/views/edit.html',
				controller: 'EvaluationCompetenciesEditCtrl',
				resolve: {
					competencieSrv: 'competencieSrv',
					competencies: function (competencieSrv, $stateParams) {
						return competencieSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('evaluation/competencies/create', {
				url: '/evaluation/competencies/create',
				templateUrl: THEME_URL + 'app/modules/evaluation/competencies/views/form.html',
				controller: 'EvaluationCompetenciesEditCtrl',
				resolve: {
					competencieSrv: 'competencieSrv',
					competencies: function (competencieSrv, $stateParams) {
						return competencieSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();