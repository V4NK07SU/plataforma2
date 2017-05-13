(function () {
    'use strict';
    angular.module('app.modules.polls.pollItem', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/view-user/poll-item', {
                    url: '/polls/view-user/poll-item',
                    templateUrl: THEME_URL + 'app/modules/polls/view-user/polls/poll-item/views/index.html',
                    resolve: {
                        PollItemSrv: 'PollItemSrv',
                        pollItem: function (PollItemSrv) {
                            return PollItemSrv.get().$promise;
                        }
                    },
                    controller: 'PollItemIndexCtrl'
                });

                $stateProvider.state('polls/poll-item/edit', {
                    url: '/polls/poll-item/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/view-user/polls/poll-item/views/index.html',
                    resolve: {
                        PollItemSrv: 'PollItemSrv',
                        pollItem: function (PollItemSrv, $stateParams) {
                            return PollItemSrv.get({id: $stateParams.id}).$promise;
                        },
                        poll: function(PollSrv) {
                            return PollSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollItemEditCtrl'
                });

                $stateProvider.state('polls/poll-item/create', {
                    url: '/polls/poll-item/create',
                    templateUrl: THEME_URL + 'app/modules/polls/view-user/polls/poll-item/views/index.html',
                    resolve: {
                        poll: function(PollSrv) {
                            return PollSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollItemCreateCtrl'
                });
            }]);
})();