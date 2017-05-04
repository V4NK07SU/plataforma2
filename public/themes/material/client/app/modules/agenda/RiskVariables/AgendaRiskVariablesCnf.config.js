(function() {
	'use strict';
	angular.module('app.modules.agenda.RiskVariables')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/RiskVariables', {
				url: '/agenda/RiskVariables',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/index.html',
				controller: 'AgendaRiskVariablesIndexCtrl',
				resolve: {
					AgendaRiskVariableSrv: 'AgendaRiskVariableSrv',
					agendaRiskVariables: function (AgendaRiskVariableSrv) {
						return AgendaRiskVariableSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/RiskVariables/edit', {
				url: '/agenda/RiskVariables/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/edit.html',
				controller: 'AgendaRiskVariablesEditCtrl',
				resolve: {
					AgendaRiskVariableSrv: 'AgendaRiskVariableSrv',
					RiskVariables: function (AgendaRiskVariableSrv, $stateParams) {
						return AgendaRiskVariableSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/RiskVariables/create', {
				url: '/agenda/RiskVariables/create',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/create.html',
				controller: 'AgendaRiskVariablesCreateCtrl',
				resolve: {
					AgendaRiskVariableSrv: 'AgendaRiskVariableSrv',
					RiskVariables: function (AgendaRiskVariableSrv, $stateParams) {
						return AgendaRiskVariableSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();