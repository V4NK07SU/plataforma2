(function () {
    'use strict';
    angular.module('app.modules.polls.pollBank', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/bank-poll', {
                    url: '/polls/bank-poll',
                    templateUrl: THEME_URL + 'app/modules/polls/bank-poll/views/index.html',
                    resolve: {
                        PollSrv: 'PollSrv',
                        poll: function (PollSrv) {
                            return PollSrv.get().$promise;
                        },
                        pollType: function (PollTypeSrv) {
                            return PollTypeSrv.get({id: 'all'}).$promise;
                        },
                         pollItem: function (PollItemSrv) {
                            return PollItemSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'BankPollsIndexCtrl'
                });
            }]);
})();