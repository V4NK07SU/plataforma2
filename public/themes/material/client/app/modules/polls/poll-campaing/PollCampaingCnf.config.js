(function () {
    'use strict';
    angular.module('app.modules.polls.pollCampaing', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/poll-campaing', {
                    url: '/polls/poll-campaing',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/index.html',
                    controller: 'PollCampaingIndexCtrl',
                    resolve: {
                        PollCampaingSrv: 'PollCampaingSrv',
                        pollCampaings: function (PollCampaingSrv) {
                            return PollCampaingSrv.get().$promise;
                        }
                    }                    
                });

                $stateProvider.state('polls/poll-campaing/edit', {
                    url: '/polls/poll-campaing/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/edit.html',
                    resolve: {
                        PollCampaingSrv: 'PollCampaingSrv',
                         pollCampaings: function (PollCampaingSrv, ToastService, $stateParams) {
                            return PollCampaingSrv.get({id: $stateParams.id}).$promise.then(
                                function(response) {
                                    return response;
                                },
                                function(error) {
                                    ToastService.error(error.message);
                                    return false;
                                });
                        }
                    },
                    controller: 'PollCampaingEditCtrl'
                });

                $stateProvider.state('polls/poll-campaing/create', {
                    url: '/polls/poll-campaing/create',
                    templateUrl: THEME_URL + 'app/modules/polls/poll-campaing/views/create.html',
                    resolve: {
                        PollSrv : 'PollSrv',
                        polls: function(PollSrv) {
                            return PollSrv.get({id: 'all'}).$promise;
                        }
                    },
                    controller: 'PollCampaingCreateCtrl'
                });
            }]);
})();