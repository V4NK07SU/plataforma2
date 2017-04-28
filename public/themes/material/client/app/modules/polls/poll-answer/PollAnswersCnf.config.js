(function () {
    'use strict';
    angular.module('app.modules.polls.poll-answer', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-answer', {
                    url: '/polls/poll-answer',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/index.html',
                    resolve: {
                        PollAnswersSrv: 'PollAnswersSrv',
                        answer: function (PollAnswersSrv) {
                            return PollAnswersSrv.get().$promise;
                        }
                    },
                    controller: 'PollAnswersIndexCtrl'
                });

                $stateProvider.state('polls/poll-answer/edit', {
                    url: '/polls/poll-answer/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/edit.html',
                    resolve: {
                        PollAnswersSrv: 'PollAnswersSrv',
                        $stateParams: '$stateParams',
                        answer: function (PollAnswersSrv, $stateParams) {
                            return PollAnswersSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollAnswersEditCtrl'
                });

                $stateProvider.state('polls/poll-answer/create', {
                    url: '/polls/poll-answer/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/create.html',
                    controller: 'PollAnswersCreateCtrl',
                    resolve: {
                   PollAnswersSrv: 'PollAnswersSrv',
                   answer: function (PollAnswersSrv, $stateParams) {
                            return PollAnswersSrv.get({id: $stateParams.id}).$promise;
                    }
                    }
                });
            }]);
})();