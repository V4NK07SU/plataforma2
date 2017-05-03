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
					ServiceSrv: 'ServiceSrv',
					agendaService: function (ServiceSrv) {
						return ServiceSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/service/edit', {
				url: '/agenda/service/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/services/views/edit.html',
				controller: 'AgendaServiceEditCtrl',
				resolve: {
					ServiceSrv: 'ServiceSrv',
					services: function (ServiceSrv, $stateParams) {
						return ServiceSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/service/create', {
				url: '/agenda/service/create',
				templateUrl: THEME_URL + 'app/modules/agenda/services/views/create.html',
				controller: 'AgendaServiceCreateCtrl',
				resolve: {
					ServiceSrv: 'ServiceSrv',
					services: function (ServiceSrv, $stateParams) {
						return ServiceSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();