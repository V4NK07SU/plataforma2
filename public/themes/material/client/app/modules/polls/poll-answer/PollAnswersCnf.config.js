(function () {
    'use strict';
    angular.module('app.modules.polls.pollAnswer', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/pollsanswer', {
                    url: '/polls/pollsanswer',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/index.html',
                    resolve: {
                        PollAnswerSrv: 'PollAnswerSrv',
                        pollAnswer: function (PollAnswerSrv) {
                            return PollAnswerSrv.get().$promise;
                        }
                    },
                    controller: 'PollAnswersIndexCtrl'
                });

                $stateProvider.state('polls/pollsanswer/edit', {
                    url: '/polls/pollsanswer/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/edit.html',
                    resolve: {
                        PollAnswerSrv: 'PollAnswerSrv',
                        pollAnswer: function (PollAnswerSrv, $stateParams) {
                            return PollAnswerSrv.get({id: $stateParams.id}).$promise;
                        },
                        pollQuestions: function (PollQuestionSrv) {
                            return PollQuestionSrv.get().$promise;
                        }  
                    },
                    controller: 'PollAnswersEditCtrl'
                });

                $stateProvider.state('polls/pollsanswer/create', {
                    url: '/polls/pollsanswer/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-answer/views/create.html',
                    controller: 'PollAnswersCreateCtrl',
                    resolve: {
                        pollQuestions: function (PollQuestionSrv) {
                            return PollQuestionSrv.get().$promise;
                        }   
                    }
                });
            }]);
})();