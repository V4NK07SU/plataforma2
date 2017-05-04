(function () {
    'use strict';
    angular.module('app.modules.polls.pollQuestion', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-question', {
                    url: '/polls/poll-question',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/index.html',
                    resolve: {
                        PollQuestionSrv: 'PollQuestionSrv',
                        pollQuestion: function (PollQuestionSrv) {
                            return PollQuestionSrv.get().$promise;
                        }
                    },
                    controller: 'PollQuestionIndexCtrl'
                });

                $stateProvider.state('polls/poll-question/edit', {
                    url: '/polls/poll-question/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/edit.html',
                    resolve: {
                        PollQuestionSrv: 'PollQuestionSrv',
                        pollQuestion: function (PollQuestionSrv, $stateParams) {
                            return PollQuestionSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollQuestionEditCtrl'
                });

                $stateProvider.state('polls/poll-question/create', {
                    url: '/polls/poll-question/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/create.html',
                    resolve: {

                    },
                    controller: 'PollQuestionCreateCtrl'
                });
            }]);
})();