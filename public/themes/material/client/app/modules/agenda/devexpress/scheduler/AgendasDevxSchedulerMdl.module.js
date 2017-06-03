(function(){
    'use strict';

    angular
        .module('app.modules.agendas.devexpress.scheduler', [

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
                    state: 'agendas/devexpress/scheduler',
                    config: {
                        url: '/agendas/devexpress/scheduler',
                        templateUrl: THEME_URL + 'app/modules/agenda/devexpress/scheduler/views/scheduler.html',
                        controller: 'AgendasDevxSchedulerCtrl',
                        controllerAs: 'vm',
                        title: 'DevExpress Angular Scheduler',
                        resolve: {

                        }
                    }
                }
            ];
        }

}());
