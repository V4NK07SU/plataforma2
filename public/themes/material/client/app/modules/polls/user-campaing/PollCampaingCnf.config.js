(function () {
    'use strict';
    angular.module('app.modules.polls.userCampaing', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/user-campaing', {
                    url: '/polls/user-campaing',
                    templateUrl: THEME_URL + 'app/modules/polls/user-campaing/views/index.html',
                    controller: 'pollUserCampaingIndexCtrl',
                    resolve: {
                        PollCampaingSrv: 'PollCampaingSrv',
                        pollCampaings: function (PollCampaingSrv) {
                            return PollCampaingSrv.get().$promise;
                        },
                        polls: function (PollSrv) {
                            return PollSrv.get({id: 'all'}).$promise;
                        }
                       
                    }
                                   
                });

            }]);
})();