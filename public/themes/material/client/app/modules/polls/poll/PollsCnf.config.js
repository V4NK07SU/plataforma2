(function () {
    'use strict';
    angular.module('app.modules.polls.poll', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll', {
                    url: '/polls/poll',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/index.html',
                    resolve: {
                        PollSrv: 'PollSrv',
                        poll: function (PollSrv) {
                            return PollSrv.get().$promise;
                        }
                    },
                    controller: 'PollsIndexCtrl'
                });

                $stateProvider.state('polls/poll/edit', {
                    url: '/polls/poll/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/edit.html',
                    resolve: {
                        PollSrv: 'PollSrv',
                        poll: function (PollSrv, $stateParams) {
                            return PollSrv.get({id: $stateParams.id}).$promise;
                        },
                        pollType: function (PollTypeSrv) {
                            return PollTypeSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollsEditCtrl'
                });

                $stateProvider.state('polls/poll/create', {
                    url: '/polls/poll/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/create.html',
                    resolve: {
                         pollType: function (PollTypeSrv) {
                            return PollTypeSrv.get({id: 'all'}).$promise;
                        },
                         pollItem: function (PollItemSrv) {
                            return PollItemSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollsCreateCtrl'
                });
            }]);
})();