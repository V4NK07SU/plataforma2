(function () {
    'use strict';
    angular.module('app.modules.polls.poll', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/polls/index', {
                    url: '/modules/polls/polls/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/index.html',
                    resolve: {
                        PollSrv: 'PollSrv',
                        poll: function (PollSrv) {
                            return PollSrv.get().$promise;
                        }
                    },
                    controller: 'PollsIndexCtrl'
                });

                $stateProvider.state('modules/polls/polls/edit', {
                    url: '/modules/polls/polls/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/edit.html',
                    resolve: {
                        PollSrv: 'PollSrv',
                        poll: function (PollSrv, $stateParams) {
                            return PollSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollsEditCtrl'
                });

                $stateProvider.state('modules/polls/polls/create', {
                    url: '/modules/polls/polls/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll/views/create.html',
                    resolve: {

                    },
                    controller: 'PollsCreateCtrl'
                });
            }]);
})();