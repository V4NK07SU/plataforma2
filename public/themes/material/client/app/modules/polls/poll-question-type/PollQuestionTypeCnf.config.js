(function () {
    'use strict';
    angular.module('app.modules.polls.pollQuestionType', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-question-type', {
                    url: '/polls/poll-question-type',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/index.html',
                    resolve: {
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                        pollQuestionType: function (PollQuestionTypeSrv) {
                            return PollQuestionTypeSrv.get().$promise;
                        }
                    },
                    controller: 'PollQuestionTypeIndexCtrl'
                });

                $stateProvider.state('polls/poll-question-type/edit', {
                    url: '/polls/poll-question-type/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/edit.html',
                    resolve: {
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                        pollQuestionType: function (PollQuestionTypeSrv, $stateParams) {
                            return PollQuestionTypeSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollQuestionTypeEditCtrl'
                });

                $stateProvider.state('polls/poll-question-type/create', {
                    url: '/polls/poll-question-type/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/create.html',
                    resolve: {

                    },
                    controller: 'PollQuestionTypeCreateCtrl'
                });
            }]);
})();