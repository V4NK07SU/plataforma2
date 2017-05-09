(function() {
	'use strict';
	angular.module('app.modules.agenda.schedule')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);
			$stateProvider.state('agenda/schedule', {
				url: '/agenda/schedule',
				templateUrl: THEME_URL + 'app/modules/agenda/schedules/views/index.html',
				controller: 'AgendaScheduleIndexCtrl',
				resolve: {
					AgendaScheDuleSrv: 'AgendaScheDuleSrv',
					schedule: function (AgendaScheDuleSrv) {
						return AgendaScheDuleSrv.get().$promise;
					}
					 
				}
			});


		$stateProvider.state('agenda/schedule/edit', {
				url: '/agenda/schedule/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/schedules/views/edit.html',
				controller: 'AgendaScheduleEditCtrl',
				resolve: {
					AgendaScheDuleSrv: 'AgendaScheDuleSrv',
					schedule: function (AgendaScheDuleSrv,$stateParams) {
						return AgendaScheDuleSrv.get({id: $stateParams.id}).$promise;
					},
					services: function(AgendaServiceSrv){
						return AgendaServiceSrv.get({id:'all'}).$promise;
					}
				}
					
			});
			
		$stateProvider.state('agenda/schedule/create', {
				url: '/agenda/schedule/create',
				templateUrl: THEME_URL + 'app/modules/agenda/schedules/views/create.html',
				controller: 'AgendaScheduleCreateCtrl',
				resolve: {
					AgendaScheDuleSrv: 'AgendaScheDuleSrv',
					schedule: function (AgendaScheDuleSrv,$stateParams) {
						return AgendaScheDuleSrv.get({id: $stateParams.id}).$promise; 
					},
					 services: function(AgendaServiceSrv){
						return AgendaServiceSrv.get({id:'all'}).$promise;
					}
				}
			});


		}]);
})();