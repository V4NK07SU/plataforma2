(function() {
    'use strict';
    
    angular.module('app.modules.polls.poll-campaing')
    .controller('PollCampaingCtrl', ['$scope', '$window', PollCampaingCtrl])
    .controller('PollCampaingIndexCtrl', ['$scope', '$window', 'PollCampaingSrv', PollCampaingIndexCtrl])
    .controller('PollCampaingFormCtrl', ['$scope', '$window', PollCampaingFormCtrl]);

    function PollCampaingCtrl($scope, $window) {
        $scope.myVar = 'Foo';
        $scope.datepicker = '';
        $scope.select = '';
        $scope.maxlenght = '';
        $scope.maxlenght2 = '';
    }

    function PollCampaingFormCtrl($scope, $window) {
        $scope.title = '14';
        $scope.description = '2017-12-02';
    }

    function PollCampaingIndexCtrl($scope, $window, PollCampaingSrv) {
        $scope.pollCampaingList = {};
        $scope.pollCampaingList.data = [];
        $scope.pollCampaingList = PollCampaingSrv.get();
        
    }
})();