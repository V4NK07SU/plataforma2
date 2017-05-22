(function() {
	'use strict';
	angular.module('app.modules.agenda.hours')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			//Index
			$stateProvider.state('agenda/hour', {
				url: '/agenda/hour',
				templateUrl: THEME_URL + 'app/modules/agenda/hours/views/index.html',
				controller: 'AgendaHourIndexCtrl',
				resolve: {
					AgendaHourSrv: 'AgendaHourSrv',
					hours: function (AgendaHourSrv) {
						return AgendaHourSrv.get().$promise;
					}
					 
				}
			});

			//Edit
		$stateProvider.state('agenda/hour/edit', {
				url: '/agenda/hour/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/hours/views/edit.html',
				controller: 'AgendaHourEditCtrl',
				resolve: {
					AgendaHourSrv: 'AgendaHourSrv',
					hours: function (AgendaHourSrv,$stateParams) {
						return AgendaHourSrv.get({id: $stateParams.id}).$promise;
					}
					 
				}
			});
			
			//Create
		$stateProvider.state('agenda/hour/create', {
				url: '/agenda/hour/create',
				templateUrl: THEME_URL + 'app/modules/agenda/hours/views/create.html',
				controller: 'AgendaHourCreateCtrl',
				resolve: {
					AgendaHourSrv: 'AgendaHourSrv',
					hours: function (AgendaHourSrv,$stateParams) {
						return AgendaHourSrv.get({id: $stateParams.id}).$promise; 
					}
					 
				}
			});


		}]);
})();