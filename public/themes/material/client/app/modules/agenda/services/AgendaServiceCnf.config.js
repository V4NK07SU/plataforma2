(function() {
	'use strict';
	angular.module('app.modules.agenda.services')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/service', {
				url: '/agenda/service',
				templateUrl: THEME_URL + 'app/modules/agenda/services/views/index.html',
				controller: 'AgendaServiceIndexCtrl',
				resolve: {
					AgendaServiceSrv: 'AgendaServiceSrv',
					services: function (AgendaServiceSrv) {
						return AgendaServiceSrv.get().$promise;
					}					
				}
			});	


			//EDIT
			$stateProvider.state('agenda/service/edit', {
				url: '/agenda/service/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/services/views/edit.html',
				controller: 'AgendaServiceEditCtrl',
				resolve: {
					AgendaServiceSrv: 'AgendaServiceSrv',
					services: function (AgendaServiceSrv, $stateParams) {
						return AgendaServiceSrv.get({id: $stateParams.id}).$promise;
					}					
				}

				
			});		
			//CREATE
				$stateProvider.state('agenda/service/create', {
				url: '/agenda/service/create',
				templateUrl: THEME_URL + 'app/modules/agenda/services/views/create.html',
				controller: 'AgendaServiceCreateCtrl',
				resolve: {
							
				}
			});			
		}]);
})();