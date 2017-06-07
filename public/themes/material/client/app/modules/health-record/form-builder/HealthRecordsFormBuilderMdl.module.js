(function(){
    'use strict';

    angular
        .module('app.modules.health-records.form-builder', [

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
                    state: 'health-records/form-builder',
                    config: {
                        url: '/health-records/form-builder',
                        templateUrl: THEME_URL + 'app/modules/health-record/form-builder/views/form-builder.html',
                        controller: 'HealthRecordsFormBuilderCtrl',
                        controllerAs: 'vm',
                        title: 'Angular Form Builder',
                        resolve: {

                        }
                    }
                }
            ];
        }
}());
