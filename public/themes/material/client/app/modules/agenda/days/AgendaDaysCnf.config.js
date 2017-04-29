(function() {
	'use strict';
	angular.module('app.modules.agenda.days')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/days', {
				url: '/agenda/days',
				templateUrl: THEME_URL + 'app/modules/agenda/days/views/index.html',
				controller: 'AgendaDaysIndexCtrl',
				resolve: {
					AgendaDaySrv: 'AgendaDaySrv',
					agendaDays: function (AgendaDaySrv) {
						return AgendaDaySrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/days/edit', {
				url: '/agenda/days/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/days/views/edit.html',
				controller: 'AgendaDaysEditCtrl',
				resolve: {
					AgendaDaySrv: 'AgendaDaySrv',
					days: function (AgendaDaySrv, $stateParams) {
						return AgendaDaySrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/days/create', {
				url: '/agenda/days/create',
				templateUrl: THEME_URL + 'app/modules/agenda/days/views/form.html',
				controller: 'AgendaDaysEditCtrl',
				resolve: {
					AgendaDaySrv: 'AgendaDaySrv',
					days: function (AgendaDaySrv, $stateParams) {
						return AgendaDaySrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();