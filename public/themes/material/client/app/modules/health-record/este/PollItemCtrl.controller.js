(function() {
    'use strict';

    angular.module('app.modules.polls.pollItem')
        .controller('PollItemFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollItemSrv', 'ToastService',
         PollItemFormCtrl])
    .controller('PollItemIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollItemSrv', 'ToastService', 'DialogService',
         PollItemIndexCtrl])
    .controller('PollItemCreateCtrl', [
        '$scope', '$window',  
        'ToastService', 'poll',
         PollItemCreateCtrl])
    .controller('PollItemEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'pollItem', 'poll',
        PollItemEditCtrl]);

   	function PollItemIndexCtrl($scope, $window, $state, $http, PollItemSrv, ToastService, DialogService) {
     $scope.formVisibility = false; 
     $scope.showFormQuestion = function () {
            $scope.formVisibility =true;
            console.log($scope.formVisibility);
        };


    $scope.formVisibilityAnswer = false; 
     $scope.showFormAnswer = function () {
            $scope.formVisibilityAnswer =true;
            console.log($scope.formVisibilityAnswer);
        };

    $scope.formVisibilitySubQuetion = false;  
    $scope.showFormsubquetion= function(){
    $scope.formVisibilitySubQuetion=true;
    console.log($scope.formVisibilitySubQuetion);
}
  $scope.formVisibilityanswerSubQuetion = false;  
    $scope.showFormanswerSubQuetion= function(){
    $scope.formVisibilityanswerSubQuetion=true;
    console.log($scope.formVisibilityanswerSubQuetion);
}
        

       
    }

    function PollItemCreateCtrl($scope, $window, ToastService, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

       //Obtener las encuestas (Relación)
        $scope.poll = poll;
    }
    function PollItemEditCtrl($scope, $window, $stateParams, ToastService, pollItem, poll) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-item/views/form.html';

        //Obtener los datos del registro
        $scope.pollItem = pollItem;

       //Obtener las encuestas (Relación)
        $scope.poll = poll;
    }

    function PollItemFormCtrl($stateParams, $scope, $window, $state, PollItemSrv, ToastService) {
        
        //Guardar item.
        $scope.save = function () {
            PollItemSrv.save($scope.pollItem,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-item');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de un item.
        $scope.cancel = function (id) {
            $state.go('polls/poll-item');
        };
    }

 })();