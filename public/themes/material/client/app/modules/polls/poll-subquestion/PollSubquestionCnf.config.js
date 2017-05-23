(function () {
    'use strict';
    angular.module('app.modules.polls.pollSubquestion', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-subquestion', {
                    url: '/polls/poll-subquestion',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/index.html',
                    resolve: {
                        PollSubquestionSrv: 'PollSubquestionSrv',
                        pollSubquestion: function (PollSubquestionSrv) {
                            return PollSubquestionSrv.get().$promise;
                        }
                    },
                    controller: 'PollSubquestionIndexCtrl'
                });

                $stateProvider.state('polls/poll-subquestion/edit', {
                    url: '/polls/poll-subquestions/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/edit.html',
                    resolve: {
                        PollSubquestionSrv: 'PollSubquestionSrv',
                        PollQuestionSrv: 'PollQuestionSrv',
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                         pollSubquestion: function (PollSubquestionSrv, $stateParams) {
                            return PollSubquestionSrv.get({id: $stateParams.id}).$promise;
                        },
                         questions: function(PollQuestionSrv) {
                            return PollQuestionSrv.get({id: 'all'}).$promise;
                        },
                         questionstype: function(PollQuestionTypeSrv) {
                            return PollQuestionTypeSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollSubquestionEditCtrl'
                });

                $stateProvider.state('polls/poll-subquestion/create', {
                    url: '/polls/poll-subquestion/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-subquestion/views/create.html',
                    resolve: {
                        PollQuestionSrv: 'PollQuestionSrv',
                        PollQuestionTypeSrv: 'PollQuestionTypeSrv',
                        questions: function(PollQuestionSrv) {
                            return PollQuestionSrv.get({id: 'all'}).$promise;
                        },
                         questionstype: function(PollQuestionTypeSrv) {
                            return PollQuestionTypeSrv.get({id: 'all'}).$promise;
                        }

                    },
                    controller: 'PollSubquestionCreateCtrl'
                });
            }]);
})();