(function() {
	'use strict';
	angular.module('app.modules.agenda.risk-variables')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/risk-variable', {
				url: '/agenda/risk-variable',
				templateUrl: THEME_URL + 'app/modules/agenda/risk-variables/views/index.html',
				controller: 'RiskVariablesIndexCtrl',
				resolve: {
					RiskVariable: 'RiskVariableSrv',
					riskVariables: function (RiskVariableSrv) {
						return RiskVariableSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/risk-variable/edit', {
				url: '/agenda/risk-variable/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/risk-variables/views/edit.html',
				controller: 'RiskVariablesEditCtrl',
				resolve: {
					RiskVariableSrv: 'RiskVariableSrv',
                    phenomenas: function (PhenomenaSrv) {
						return PhenomenaSrv.get().$promise;
					},
					riskVariable: function (RiskVariableSrv, $stateParams) {
						return RiskVariableSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/risk-variable/create', {
				url: '/agenda/risk-variable/create',
				templateUrl: THEME_URL + 'app/modules/agenda/risk-variables/views/create.html',
				controller: 'RiskVariablesCreateCtrl',
				resolve: {
					RiskVariableSrv: 'RiskVariableSrv',
                    PhenomenaSrv: 'PhenomenaSrv',
					phenomenas: function (PhenomenaSrv) {
						return PhenomenaSrv.get().$promise;
					},
                    riskVariable: function(RiskVariableSrv, $stateParams) {
                        return RiskVariableSrv.get({id: $stateParams.id}).$promise;
                    }
				}
			});			
		}]);
})();