(function () {
    'use strict';
    angular.module('app.modules.polls.pollAnswer', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/pollsanswer', {
                    url: '/polls/pollsanswer',
                    templateUrl: THEME_URL + 'app/modules/polls/pollsanswer/views/index.html',
                    resolve: {
                        PollAnswersSrv: 'PollAnswersSrv',
                        answer: function (PollAnswersSrv) {
                            return PollAnswersSrv.get().$promise;
                        }
                    },
                    controller: 'PollAnswersIndexCtrl'
                });

                $stateProvider.state('polls/pollsanswer/edit', {
                    url: '/polls/pollsanswer/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/pollsanswer/views/edit.html',
                    resolve: {
                        PollAnswersSrv: 'PollAnswersSrv',
                        $stateParams: '$stateParams',
                        answer: function (PollAnswersSrv, $stateParams) {
                            return PollAnswersSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollAnswersEditCtrl'
                });

                $stateProvider.state('polls/pollsanswer/create', {
                    url: '/polls/pollsanswer/create',
                    templateUrl: THEME_URL + 'app/modules/polls/pollsanswer/views/create.html',
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