(function () {
    'use strict';

    angular.module('app.modules.health-record.admin-schedule', [
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
                state: 'health-records/admin-schedule',
                config: {
                    url: '/health-records/admin-schedule',
                    templateUrl: 'app/modules/health-record/admin-schedule/views/index.html',
                    controller: 'HealthRecordsAdminScheduleCtrl',
                    controllerAs: 'dp',
                    title: 'Programación de Administrador',
                    resolve: {

                    }
                }
            }
        ];
    }
})();