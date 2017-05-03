(function () {
    'use strict';
    angular.module('app.modules.polls.pollQuestion', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-questions/index', {
                    url: '/modules/polls/poll-questions/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/index.html',
                    resolve: {
                        PollQuestionSrv: 'PollQuestionSrv',
                        pollQuestion: function (PollQuestionSrv) {
                            return PollQuestionSrv.get().$promise;
                        }
                    },
                    controller: 'PollQuestionIndexCtrl'
                });

                $stateProvider.state('modules/polls/poll-questions/edit', {
                    url: '/modules/polls/poll-questions/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/edit.html',
                    resolve: {
                        PollQuestionSrv: 'PollQuestionSrv',
                        pollQuestion: function (PollQuestionSrv, $stateParams) {
                            return PollQuestionSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollQuestionEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-questions/create', {
                    url: '/modules/polls/poll-questions/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question/views/create.html',
                    resolve: {

                    },
                    controller: 'PollQuestionCreateCtrl'
                });
            }]);
})();