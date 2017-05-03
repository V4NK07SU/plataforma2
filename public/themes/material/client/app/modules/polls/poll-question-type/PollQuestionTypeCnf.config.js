(function () {
    'use strict';
    angular.module('app.modules.polls.pollQuestionType', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-question-types/index', {
                    url: '/modules/polls/poll-question-types/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/index.html',
                    resolve: {
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                        pollQuestionType: function (PollQuestionTypeSrv) {
                            return PollQuestionTypeSrv.get().$promise;
                        }
                    },
                    controller: 'PollQuestionTypeIndexCtrl'
                });

                $stateProvider.state('modules/polls/poll-question-types/edit', {
                    url: '/modules/polls/poll-question-types/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/edit.html',
                    resolve: {
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                        pollQuestionType: function (PollQuestionTypeSrv, $stateParams) {
                            return PollQuestionTypeSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollQuestionTypeEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-question-types/create', {
                    url: '/modules/polls/poll-question-types/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-question-type/views/create.html',
                    resolve: {

                    },
                    controller: 'PollQuestionTypeCreateCtrl'
                });
            }]);
})();