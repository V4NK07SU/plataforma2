(function(){
    'use strict';

    angular
        .module('app.modules.polls.surveys', [

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
                    state: 'polls/survey',
                    config: {
                        url: '/polls/survey',
                        templateUrl: THEME_URL + 'app/modules/polls/survey/views/survey.html',
                        controller: 'PollsSurveysCtrl',
                        controllerAs: 'vm',
                        title: 'Angular Survey',
                        resolve: {

                        }
                    }
                }
            ];
        }
}());
