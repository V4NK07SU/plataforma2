(function () {
    'use strict';
    angular.module('app.modules.polls.pollType', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-type', {
                    url: '/polls/poll-type',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/index.html',
                    resolve: {
                        PollTypesSrv: 'PollTypesSrv',
                        pollType: function (PollTypesSrv) {
                            return PollTypesSrv.get().$promise;
                        }
                    },
                    controller: 'PollTypesIndexCtrl'
                });

                $stateProvider.state('polls/poll-type/edit', {
                    url: '/polls/poll-type/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/edit.html',
                    resolve: {
                        PollTypesSrv: 'PollTypesSrv',
                        pollType: function (PollTypesSrv, $stateParams) {
                            return PollTypesSrv.get({ id: $stateParams.id }).$promise;
                        }
                    },
                    controller: 'PollTypesEditCtrl'
                });

                $stateProvider.state('polls/poll-type/create', {
                    url: '/polls/poll-type/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-types/views/create.html',
                    resolve: {

                    },
                    controller: 'PollTypesCreateCtrl'
                });
            }]);
})();