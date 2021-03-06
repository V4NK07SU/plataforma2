(function() {
    'use strict';

    angular.module('app.modules.polls.poll')

    .controller('PollsFormCtrl', [
        '$stateParams', '$scope', '$window', '$state', 
        'PollSrv', 'ToastService',
         PollsFormCtrl])
    .controller('PollsIndexCtrl', [
        '$scope', '$window', '$state', '$http', 
        'PollSrv', 'ToastService', 'DialogService',
         PollsIndexCtrl])
    .controller('PollsCreateCtrl', [
        '$scope', '$window',  
        'ToastService','pollType', 'AuthSrv', 'pollItem',
         PollsCreateCtrl])
    .controller('PollsEditCtrl', [
        '$scope', '$window', '$stateParams',
        'ToastService', 'poll', 'pollType',
        PollsEditCtrl]);

   	function PollsIndexCtrl($scope, $window, $state, $http, PollSrv, ToastService, DialogService) {
        
        var vm = this;
        $scope.data = {};

        //Obtener las encuestas
        $scope.data = PollSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Encuestas!');
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Encuestas!');
            });
                     
        //Borrar una encuesta
        $scope.deletePoll = function (pollId) {
           console.log(pollId);
            DialogService.confirm('Eliminar Encuesta', 'Desea continuar?')
            .then(() => {
                PollSrv.delete({ id: pollId }, function (response) {
                     $scope.data = PollSrv.get();
                    //$scope.data.data.splice($scope.data.data.indexOf(pollId), 1);
                    //console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });
        };
 
        //Editar una encuesta.
        $scope.editPoll = function (id) {
            console.log(id);
            $state.go('polls/poll/edit', { id: id });
        };

        //Crear un una encuesta.
        $scope.new = function () {
            $state.go('polls/poll/create');
        };
   
        //Paginación de la pagina principal.
        $scope.loadPage = function (url) {
            //console.log(url);
            $http.get(url).success(function (res) {
                //console.log(res);
                $scope.data = res;              
            }).error(function (res) {
                alert('error');
            });
        };

         //Buscar una encuesta
        $scope.search = function(keyword) {

            if (keyword == null || keyword == "") {
                 $scope.data = PollSrv.get();
                 console.log("keyword");
                 $scope.keyword = "";
            }
            if (keyword) {
                    $http.get(SITE_URL + '/api/polls/polls/search/' + keyword).success(function (res){
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function(res){
                    alert('error');
                });
            } 
        }
    }

      function PollsCreateCtrl($scope, $window, ToastService, pollType, AuthSrv, pollItem) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll/views/form.html';

        //Obtener los tipos de encuestas (Relación)
        $scope.pollType = pollType;

        //Obtener el ID del usuario Logeado.
        $scope.poll = {
            poll_items: [],
            user_id: AuthSrv.getAttribute('id')
        }
      
      $scope.items = pollItem.data;


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

      function PollsEditCtrl($scope, $window, $stateParams, ToastService, poll, pollType) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll/views/form.html';

         //Obtener los tipos de encuestas (Relación)
        $scope.pollType = pollType;


        var vm = this;  
        vm.data = poll; 

        //Obtener datos de la encuesta sobre el registro de la campaña.
        $scope.poll = vm.data.polls;
        //Obtener datos de la campaña
        $scope.items = vm.data.items;

       
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


     function PollsFormCtrl ($stateParams, $scope, $window, $state, PollSrv, ToastService) {

        //Guardar encuesta editada.
        $scope.save = function() {  
            PollSrv.save($scope.poll,
                function(response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de una encuesta
        $scope.cancel = function () {
            $state.go('polls/poll');
        };
    }
 })();