(function () {
    'use strict';
    angular.module('app.modules.polls.pollCampaing', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('modules/polls/poll-campaing/index', {
                    url: '/modules/polls/poll-campaing/index',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/index.html',
                    controller: 'PollCampaingIndexCtrl',
                    resolve: {
                        PollCampaingSrv: 'PollCampaingSrv',
                        pollCampaings: function (PollCampaingSrv) {
                            return PollCampaingSrv.get().$promise;
                        }
                    }                    
                });

                $stateProvider.state('modules/polls/poll-campaing/edit', {
                    url: '/modules/polls/poll-campaing/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/edit.html',
                    resolve: {
                        PollCampaingSrv: 'PollCampaingSrv',
                         pollCampaings: function (PollCampaingSrv, $stateParams) {
                            return PollCampaingSrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'PollCampaingEditCtrl'
                });

                $stateProvider.state('modules/polls/poll-campaing/create', {
                    url: '/modules/polls/poll-campaing/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/create.html',
                    resolve: {

                    },
                    controller: 'PollCampaingCreateCtrl'
                });
            }]);
})();