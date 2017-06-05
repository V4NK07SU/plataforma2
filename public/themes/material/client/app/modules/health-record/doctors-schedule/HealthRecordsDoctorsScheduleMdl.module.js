(function () {
    'use strict';

    angular.module('app.modules.health-record.doctors-schedule', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ])
        .run(appRun);

    appRun.$inject = ['RouteHelperPvd'];
    /* @ngInject */
    function appRun(RouteHelperPvd) {
        RouteHelperPvd.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'health-records/doctors-schedule',
                config: {
                    url: '/health-records/doctors-schedule',
                    templateUrl: 'app/modules/health-record/doctors-schedule/views/schedules.html',
                    controller: 'HealthRecordsDoctorsScheduleCtrl',
                    controllerAs: 'vm',
                    title: 'Programación de Doctores',
                    resolve: {

                    }
                }
            }
        ];
    }
})();