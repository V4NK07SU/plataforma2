(function () {
    'use strict';
    angular.module('app.modules.polls.userPoll', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/user-poll', {
                    url: '/polls/user-poll',
                    templateUrl: THEME_URL + 'app/modules/polls/user-poll/views/index.html',
                    controller: 'pollUserPollIndexCtrl',
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
                    
                    }
                                   
                });

            }]);
})();