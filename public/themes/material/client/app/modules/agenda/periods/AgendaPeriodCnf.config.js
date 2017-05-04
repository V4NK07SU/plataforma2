(function() {
	'use strict';
	angular.module('app.modules.agenda.periods')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);
			$stateProvider.state('agenda/period', {
				url: '/agenda/period',
				templateUrl: THEME_URL + 'app/modules/agenda/periods/views/index.html',
				controller: 'AgendaPeriodIndexCtrl',
				resolve: {
					AgendaPeriodSrv: 'AgendaPeriodSrv',
					AgendaPeriods: function (AgendaPeriodSrv) {
						return AgendaPeriodSrv.get().$promise;
					}
					 
				}
			});


		$stateProvider.state('agenda/period/edit', {
				url: '/agenda/period/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/periods/views/edit.html',
				controller: 'AgendaPeriodEditCtrl',
				resolve: {
					AgendaPeriodSrv: 'AgendaPeriodSrv',
					periods: function (AgendaPeriodSrv,$stateParams) {
						return AgendaPeriodSrv.get({id: $stateParams.id}).$promise;
					}
					 
				}
			});
			
		$stateProvider.state('agenda/period/create', {
				url: '/agenda/period/create',
				templateUrl: THEME_URL + 'app/modules/agenda/periods/views/create.html',
				controller: 'AgendaPeriodCreateCtrl',
				resolve: {
					AgendaPeriodSrv: 'AgendaPeriodSrv',
					periods: function (AgendaPeriodSrv,$stateParams) {
						return AgendaPeriodSrv.get({id: $stateParams.id}).$promise; 
					}
					 
				}
			});


		}]);
})();