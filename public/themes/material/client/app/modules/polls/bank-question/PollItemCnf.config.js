(function () {
    'use strict';
    angular.module('app.modules.polls.pollBankQuestion', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);

                $stateProvider.state('polls/bank-question/item/create', {
                    url: '/polls/bank-question/item/create',
                    templateUrl: THEME_URL + 'app/modules/polls/bank-question/views/index.html',
                    resolve: {
                        PollItemSrv: 'PollItemSrv',
                        pollItem: function (PollItemSrv) {
                            return PollItemSrv.get().$promise;
                        }
                    },
                    controller: 'PollBankQuestionIndexCtrl'
                });

         
            }]);
})();