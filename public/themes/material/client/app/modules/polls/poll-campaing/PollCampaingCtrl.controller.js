(function () {
    'use strict';

    angular.module('app.modules.polls.pollCampaing')
        .controller('PollCampaingIndexCtrl', [
            '$scope', '$window', '$state', '$http',
            'pollCampaings', 'PollCampaingSrv', 'ToastService', 'DialogService',
            PollCampaingIndexCtrl])
        .controller('PollCampaingEditCtrl', [
            '$scope', '$window', 'moment', '$stateParams', '$state',
            'pollCampaings', 'PollCampaingSrv', 'ToastService',
            PollCampaingEditCtrl])
        .controller('PollCampaingCreateCtrl', [
            '$scope', '$window', '$state', 'moment',
            'PollCampaingSrv', 'ToastService', 'pollsCheckBox',
            PollCampaingCreateCtrl]);

    function PollCampaingIndexCtrl($scope, $window, $state, $http, pollCampaings, PollCampaingSrv, ToastService, DialogService) {

        var vm = this;
        $scope.data = {};

        //Obtener  las campañas de encuesta
        $scope.data = PollCampaingSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Campañas de Encuesta!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Campañas de Encuesta!');
            });


        //Eliminar una campaña
        $scope.deletePollCampaing = function (pollCampaingId) {
            //console.log(pollCampaingId);
            DialogService.confirm('Eliminar la Campaña de Encuesta', 'Desea continuar?')
                .then(() => {
                    PollCampaingSrv.delete({ id: pollCampaingId }, function (response) {
                        $scope.data = PollCampaingSrv.get();
                        ToastService.success(response.message);
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
            $http.get(url).success(function (res) {
                $scope.data = res;
            }).error(function (res) {
                alert('error');
            });
        };

        //Buscar una campaña.
        $scope.search = function (keyword) {
            if (keyword == null || keyword == "") {
                $scope.data = PollCampaingSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollcampaings/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }
    }


    function PollCampaingCreateCtrl($scope, $window, $state, moment, PollCampaingSrv, ToastService, pollsCheckBox) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';
        
        $scope.pollsCheckBox = pollsCheckBox;

        $scope.pollcampaing = {};
        //Guardar la creación de una campaña.
        $scope.save = function () {
            $scope.pollcampaing.start_at = moment($scope.pollcampaing.start_at).format('YYYY-MM-DD');
            $scope.pollcampaing.finish_at = moment($scope.pollcampaing.finish_at).format('YYYY-MM-DD');
            PollCampaingSrv.save($scope.pollcampaing,
                function (response) {
                    ToastService.success(response.message);
                    $state.go('polls/poll-campaing');
                }, function (response) {
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la creación de una campaña.
        $scope.cancel = function (id) {
            $state.go('polls/poll-campaing');
        };
    }

    function PollCampaingEditCtrl($scope, $window, moment, $stateParams, $state, pollCampaings, PollCampaingSrv, ToastService) {
        $scope.formUrl = THEME_URL + '/app/modules/polls/poll-campaing/views/form.html';

        $scope.pollcampaing = pollCampaings;
        console.log($scope.pollcampaing);

        $scope.pollcampaing.start_at = new Date($scope.pollcampaing.start_at);
        $scope.pollcampaing.finish_at = new Date($scope.pollcampaing.finish_at);

        //Guardar una campaña editada.
        $scope.save = function () {
            $scope.pollcampaing.start_at = moment($scope.pollcampaing.start_at).format('YYYY-MM-DD');
            $scope.pollcampaing.finish_at = moment($scope.pollcampaing.finish_at).format('YYYY-MM-DD');
            PollCampaingSrv.save($scope.pollcampaing,
                function (response) {
                    console.log(response);
                    ToastService.success(response.message);
                    $state.go('polls/poll-campaing');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
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