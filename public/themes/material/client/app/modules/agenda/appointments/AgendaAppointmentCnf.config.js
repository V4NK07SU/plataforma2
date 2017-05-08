(function() {
	'use strict';
	angular.module('app.modules.agenda.appointments')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		//INDEX
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);

			$stateProvider.state('agenda/appointments', {
				url: '/agenda/appointments',
				templateUrl: THEME_URL + 'app/modules/agenda/appointments/views/index.html',
				controller: 'AgendaAppointmentsIndexCtrl',
				resolve: {
					AgendaAppointmentSrv: 'AgendaAppointmentSrv',
					agendaAppointments: function (AgendaAppointmentSrv) {
						return AgendaAppointmentSrv.get().$promise;
					}					
				}
			});	

			//EDIT
			$stateProvider.state('agenda/appointments/edit', {
				url: '/agenda/appointments/edit/:id',
				templateUrl: THEME_URL + 'app/modules/agenda/appointments/views/edit.html',
				controller: 'AgendaAppointmentsEditCtrl',
				resolve: {
					AgendaAppointmentSrv: 'AgendaAppointmentSrv',
					appointments: function (AgendaAppointmentSrv, $stateParams) {
						return AgendaAppointmentSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});		
			//CREATE
				$stateProvider.state('agenda/appointments/create', {
				url: '/agenda/appointments/create',
				templateUrl: THEME_URL + 'app/modules/agenda/appointments/views/create.html',
				controller: 'AgendaAppointmentsCreateCtrl',
				resolve: {
					AgendaAppointmentSrv: 'AgendaAppointmentSrv',
					appointments: function (AgendaAppointmentSrv, $stateParams) {
						return AgendaAppointmentSrv.get({id: $stateParams.id}).$promise;
					}					
				}
			});			
		}]);
})();