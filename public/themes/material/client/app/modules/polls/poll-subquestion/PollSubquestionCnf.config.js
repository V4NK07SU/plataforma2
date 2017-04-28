(function () {
    'use strict';
    angular.module('app.modules.polls.pollSubquestion', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-subquestions/index', {
                    url: '/modules/polls/poll-subquestions/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/index.html',
                    resolve: {
                        PollSubquestionSrv: 'PollSubquestionSrv',
                        pollSubquestion: function (PollSubquestionSrv) {
                            return PollSubquestionSrv.get().$promise;
                        }
                    },
                    controller: 'PollSubquestionIndexCtrl'
                });

                $stateProvider.state('modules/polls/poll-subquestions/edit', {
                    url: '/modules/polls/poll-subquestions/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/edit.html',
                    resolve: {
                        PollSubquestionSrv: 'PollSubquestionSrv',
                        pollSubquestion: function (PollSubquestionSrv, $stateParams) {
                            return PollSubquestionSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollSubquestionEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-subquestions/create', {
                    url: '/modules/polls/poll-subquestions/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/create.html',
                    resolve: {

                    },
                    controller: 'PollSubquestionCreateCtrl'
                });
            }]);
})();