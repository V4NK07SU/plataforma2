(function() {
	'use strict';
	angular.module('app.modules.evaluation.commitmentsAnswer')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('evaluation/answer', {
				url: '/evaluation/answer',
				templateUrl: THEME_URL + 'app/modules/evaluation/commitments-answers/views/index.html',
				controller: 'EvaluationCommitmentsAnswerIndexCtrl',
				resolve: {
					EvaluationAnswerSrv: 'EvaluationAnswerSrv',
					answer: function (EvaluationAnswerSrv) {
						return EvaluationAnswerSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('evaluation/answer/edit', {
				url: '/evaluation/answer/edit/:id',
				templateUrl: THEME_URL + 'app/modules/evaluation/commitments-answers/views/edit.html',
				controller: 'EvaluationCommitmentsAnswerEditCtrl',
				resolve: {
					EvaluationAnswerSrv: 'EvaluationAnswerSrv',
					answer: function (EvaluationAnswerSrv, $stateParams) {
						return EvaluationAnswerSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('evaluation/answer/create', {
				url: '/evaluation/answer/create',
				templateUrl: THEME_URL + 'app/modules/evaluation/commitments-answers/views/form.html',
				controller: 'EvaluationCommitmentsAnswerEditCtrl',
				resolve: {
					EvaluationAnswerSrv: 'EvaluationAnswerSrv',
					answer: function (EvaluationAnswerSrv, $stateParams) {
						return EvaluationAnswerSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();