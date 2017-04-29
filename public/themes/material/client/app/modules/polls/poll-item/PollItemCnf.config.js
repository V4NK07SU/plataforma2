(function () {
    'use strict';
    angular.module('app.modules.polls.pollItem', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-items/index', {
                    url: '/modules/polls/poll-items/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-item/views/index.html',
                    resolve: {
                        PollItemSrv: 'PollItemSrv',
                        pollItem: function (PollItemSrv) {
                            return PollItemSrv.get().$promise;
                        }
                    },
                    controller: 'PollItemIndexCtrl'
                });

                $stateProvider.state('modules/polls/poll-items/edit', {
                    url: '/modules/polls/poll-items/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-item/views/edit.html',
                    resolve: {
                        PollItemSrv: 'PollItemSrv',
                        pollItem: function (PollItemSrv, $stateParams) {
                            return PollItemSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollItemEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-items/create', {
                    url: '/modules/polls/poll-items/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-item/views/create.html',
                    resolve: {

                    },
                    controller: 'PollItemCreateCtrl'
                });
            }]);
})();