(function() {
	'use strict';
	angular.module('app.modules.agenda.phenomena')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/phenomena', {
				url: '/agenda/phenomena',
				templateUrl: THEME_URL + 'app/modules/agenda/phenomenas/views/index.html',
				controller: 'AgendaPhenomenaIndexCtrl',
				resolve: {
					AgendaPhenomenaSrv: 'AgendaPhenomenaSrv',
					phenomenas: function (AgendaPhenomenaSrv) {
						return AgendaPhenomenaSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/phenomena/edit', {
				url: '/agenda/phenomena/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/phenomenas/views/edit.html',
				controller: 'AgendaPhenomenaEditCtrl',
				resolve: {
					AgendaPhenomenaSrv: 'AgendaPhenomenaSrv',
					phenomenas: function (AgendaPhenomenaSrv, $stateParams) {
						return AgendaPhenomenaSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/phenomena/create', {
				url: '/agenda/phenomena/create',
				templateUrl: THEME_URL + 'app/modules/agenda/phenomenas/views/form.html',
				controller: 'AgendaPhenomenaCreateCtrl',
				resolve: {			
				}
			});			
		}]);
})();