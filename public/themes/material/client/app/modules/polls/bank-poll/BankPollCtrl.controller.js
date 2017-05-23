(function() {
    'use strict';

    angular.module('app.modules.polls.pollBank')

    .controller('BankPollsIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollSrv', 'ToastService', 'DialogService','poll','pollType','pollItem','AuthSrv',
         BankPollsIndexCtrl]);

    function BankPollsIndexCtrl($scope, $window, $state, $http, PollSrv, ToastService, DialogService, poll, pollType, pollItem, AuthSrv) {
         //Obtener los tipos de encuestas (Relación)
        $scope.pollType = pollType;

        //Obtener el ID del usuario Logeado.
        $scope.poll = {
            poll_items: [],
            user_id: AuthSrv.getAttribute('id')
        }
      
      $scope.items = pollItem.data;
            /**
            foreach ($pollItem as item) {
            $PollQuestion = PollQuestion::create([
                    'title'                    => $question['title'],
                    'description'              => $question['description'],
                    'poll_question_type_id'    => $question['poll_question_type_id'],
                    'risk_var_id'              => $question['risk_var_id'],
                    'poll_item_id'             => $pollItem->id
                ]);

            */

        //Marcar los checkbox dependiendo del item a la que pertenezca la encuesta
        $scope.exists = function (item) {
            var ret =false;
            angular.forEach($scope.poll.poll_items, function(v, i) {                
                if(v.id === item.id) {
                    ret = true;
                }
            });
            return ret;
        }; 



        //Mostrar el JSON de las encuestas seleccionadas.
        $scope.toggle = function (item) {
            var idx = -1;            
            angular.forEach($scope.poll.poll_items, function(v, i) {                
                if(v.id === item.id) {
                    idx = i;
                }
            });
            if (idx > -1) {
                $scope.poll.poll_items.splice(idx, 1);
            } else {
                $scope.poll.poll_items.push(item)
            }
            console.log($scope.poll.poll_items);
        };


       }

 })();