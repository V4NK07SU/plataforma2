(function() {
	'use strict';
	angular.module('app.modules.agenda.riskVariables')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/riskvariables', {
				url: '/agenda/riskvariables',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/index.html',
				controller: 'AgendaRiskVariablesIndexCtrl',
				resolve: {
					AgendaRiskVariableSrv: 'AgendaRiskVariableSrv',
					riskVariables: function (AgendaRiskVariableSrv) {
						return AgendaRiskVariableSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/riskvariables/edit', {
				url: '/agenda/riskvariables/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/edit.html',
				controller: 'AgendaRiskVariablesEditCtrl',
				resolve: {
					AgendaRiskVariableSrv: 'AgendaRiskVariableSrv',
					phenomenas: function(AgendaPhenomenaSrv){
						return AgendaPhenomenaSrv.get({id: 'all'}).$promise;
					},
					riskVariables: function (AgendaRiskVariableSrv, $stateParams) {
						return AgendaRiskVariableSrv.get({id: $stateParams.id}).$promise;
					}
					
				}
			});	

			//CREATE
				$stateProvider.state('agenda/riskvariables/create', {
				url: '/agenda/riskvariables/create',
				templateUrl: THEME_URL + 'app/modules/agenda/RiskVariables/views/create.html',
				controller: 'AgendaRiskVariablesCreateCtrl',
				resolve: {
					phenomenas: function(AgendaPhenomenaSrv){
						return AgendaPhenomenaSrv.get({id: 'all'}).$promise;
					}					
				}
			});			
		}]);
})();