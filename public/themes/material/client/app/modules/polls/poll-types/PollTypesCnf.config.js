(function () {
    'use strict';
    angular.module('app.modules.polls.pollType', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-types/index', {
                    url: '/modules/polls/poll-types/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/index.html',
                    resolve: {
                        PollTypesSrv: 'PollTypesSrv',
                        pollType: function (PollTypesSrv) {
                            return PollTypesSrv.get().$promise;
                        }
                    },
                    controller: 'PollTypesIndexCtrl'
                });

                $stateProvider.state('modules/polls/poll-types/edit', {
                    url: '/modules/polls/poll-types/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/edit.html',
                    resolve: {
                        PollTypesSrv: 'PollTypesSrv',
                        pollType: function (PollTypesSrv, $stateParams) {
                            return PollTypesSrv.get({ id: $stateParams.id }).$promise;
                        }
                    },
                    controller: 'PollTypesEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-types/create', {
                    url: '/modules/polls/poll-types/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/create.html',
                    resolve: {

                    },
                    controller: 'PollTypesCreateCtrl'
                });
            }]);
})();