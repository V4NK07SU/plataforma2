(function(){
    'use strict';

    angular
        .module('app.modules.agenda.schedule')
        .controller('AgendaScheduleUserScheludeTaskCtrl', AgendaScheduleUserScheludeTaskCtrl)
        AgendaScheduleUserScheludeTaskCtrl.$inject = ['$scope'];
    /** @ngInject */
    function AgendaScheduleUserScheludeTaskCtrl($scope){
        var vm = this;

        $scope.title = 'En desarrollo';

        $scope.scheludeitem= "Hola mundo";
        
        init();

        function init(){
        }

    }

}());