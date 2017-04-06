(function() {
    'use strict';
<<<<<<< HEAD
    angular.module('app.modules.polls.poll-campaing').controller('PollCampaingCtrl', ['$scope', '$window', PollCampaingCtrl]).controller('PollCampaingIndexCtrl', ['$scope', '$window', 'PollCampaingSrv', PollCampaingIndexCtrl]).controller('PollCampaingFormCtrl', ['$scope', '$window', PollCampaingFormCtrl]);
=======

    angular.module('app.modules.polls.poll-campaing')
        .controller('PollCampaingCtrl', ['$scope', '$window', PollCampaingCtrl])
        .controller('PollCampaingIndexCtrl', ['$scope', '$window', PollCampaingIndexCtrl])
        .controller('PollCampaingFormCtrl', ['$scope', '$window', PollCampaingFormCtrl]);
>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c

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
<<<<<<< HEAD
    }

    function PollCampaingIndexCtrl($scope, $window, PollCampaingSrv) {
        $scope.pollCampaingList = {};
        $scope.pollCampaingList.data = [];
        $scope.pollCampaingList = PollCampaingSrv.get();
        
    }
=======
  

    }

    function PollCampaingIndexCtrl($scope, $window) {
        $scope.list = [{
                id: '1',
                title: '14',
                time_at: '2017-12-02',
                value: '1'

            },
            {
                id: '2',
                title: '12',
                time_at: '2017-12-02',
                value: '2'

            },
            {
                id: '3',
                title: '10',
                time_at: '2017-12-02',
                value: '3'

            },
            {
                id: '4',
                title: '17',
                time_at: '2017-12-02',
                value: '4'

            }
        ];
    }

>>>>>>> 046cc4e8027a78c08426f582330cc3ce7281977c
})();