(function() {
    'use strict';
    
    angular.module('app.modules.polls.poll-campaing')
    .controller('PollCampaingCtrl', ['$scope', '$window', PollCampaingCtrl])
    .controller('PollCampaingIndexCtrl', ['$scope', '$window', 'pollCampaings', 'PollCampaingSrv', 'ToastService', 'DialogService', '$state', '$http', PollCampaingIndexCtrl])
    .controller('PollCampaingFormCtrl', ['$scope', '$window', PollCampaingFormCtrl])
    .controller('PollCampaingEditCtrl', ['$scope', '$window', 'moment', '$stateParams', 'pollCampaings', 'PollCampaingSrv', 'ToastService', '$state', PollCampaingEditCtrl])
    .controller('PollCampaingCreateCtrl', ['$scope', '$window', 'moment', 'PollCampaingSrv', 'ToastService', '$state', PollCampaingCreateCtrl]);
    
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

    function PollCampaingIndexCtrl($scope, $window, pollCampaings, PollCampaingSrv, ToastService, DialogService, $state, $http) {

        var vm = this;
        $scope.data = {};

        $scope.data = PollCampaingSrv.get();
        console.log($scope.data);
        //ToastService.info('Se han listado los Tipos de Encuesta!');
          
        //Eliminar una campaña
        $scope.deletePollCampaing = function (pollCampaingId) {
           //console.log(pollCampaingId);
            DialogService.confirm('Eliminar la Campaña de Encuesta', 'Desea continuar?')
            .then(() => {
                PollCampaingSrv.delete({ id: pollCampaingId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(pollCampaingId), 1);
                    $scope.data = PollCampaingSrv.get();
                    //console.log(response);
                    ToastService.success(response.message);
                    //$state.go('modules/polls/poll-types/index');
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });
        };
 
        //Editar una camapaña.
        $scope.editPollCampaing = function (id) {
            console.log(id);
            $state.go('polls/poll-campaing/edit', { id: id });
        };

        //Crear una campaña nueva .
        $scope.new = function () {
            $state.go('polls/poll-campaing/create');
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

        //Buscar una campaña.
        $scope.search = function(keyword) {

            if (keyword == null || keyword == "") {
                 $scope.data = PollCampaingSrv.get();
                 console.log("keyword");
                 $scope.keyword = "";
            
            }
            if (keyword) {
                    $http.get(SITE_URL + '/api/polls/pollcampaings/search/' + keyword).success(function (res){
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function(res){
                    alert('error');
                });
            } 
        }

    }


    function PollCampaingCreateCtrl($scope, $window, moment, PollCampaingSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';
        
        $scope.pollcampaing = {};

            //Guardar la creación de una campaña.
            $scope.save = function() {  
            $scope.pollcampaing.start_at = moment($scope.pollcampaing.start_at).format('YYYY-MM-DD');
            $scope.pollcampaing.finish_at = moment($scope.pollcampaing.finish_at).format('YYYY-MM-DD');
                PollCampaingSrv.save($scope.pollcampaing,
                    function(response) {
                        console.log(response);
                        ToastService.success(response.message);
                        $state.go('polls/poll-campaing');
                    }, function(response) {
                        console.log(response);
                        angular.forEach(response.data.errors, function(v, i) {
                            ToastService.error(v[0]);
                        });
                    });
            }

            //Cancelar la creación de una campaña.
            $scope.cancel = function (id) {
                $state.go('polls/poll-campaing');
            };
    }

    function PollCampaingEditCtrl($scope, $window, moment, $stateParams, pollCampaings, PollCampaingSrv, ToastService, $state) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';

        $scope.pollcampaing = pollCampaings;
        console.log($scope.pollcampaing);

        $scope.pollcampaing.start_at = new Date($scope.pollcampaing.start_at);
        $scope.pollcampaing.finish_at = new Date($scope.pollcampaing.finish_at);

        //Guardar una campaña editada.
        $scope.save = function() {  
            $scope.pollcampaing.start_at = moment($scope.pollcampaing.start_at).format('YYYY-MM-DD');
            $scope.pollcampaing.finish_at = moment($scope.pollcampaing.finish_at).format('YYYY-MM-DD');
            PollCampaingSrv.save($scope.pollcampaing,
                function(response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-campaing');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición de una campaña.
        $scope.cancel = function (id) {
            $state.go('polls/poll-campaing');
        };
    }
})();