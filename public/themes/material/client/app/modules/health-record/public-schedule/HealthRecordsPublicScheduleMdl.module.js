(function () {
    'use strict';

    angular.module('app.modules.health-record.public-schedule', [
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
                state: 'health-records/public-schedule',
                config: {
                    url: '/health-records/public-schedule',
                    templateUrl: 'app/modules/health-record/public-schedule/views/schedules.html',
                    controller: 'HealthRecordsPublicScheduleCtrl',
                    controllerAs: 'vm',
                    title: 'Programación de Publico',
                    resolve: {

                    }
                }
            }
        ];
    }
})();