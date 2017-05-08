(function () {
    'use strict';

    angular.module('app.modules.agenda.collaborator')
        .controller('CollaboratorCtrl', ['$scope', '$window', CollaboratorCtrl])
        .controller('AgendaCollaboratorIndexCtrl', ['$scope', '$window', 'ToastService', 'DialogService', '$state', '$http',
            'AgendaCollaboratorSrv',
            AgendaCollaboratorIndexCtrl])
        .controller('AgendaCollaboratorCreateCtrl', ['$scope',
           'periods', 'services',
            AgendaCollaboratorCreateCtrl])
        .controller('AgendaCollaboratorEditCtrl', ['$scope', 
           'collaborator', 'periods', 'services',
            AgendaCollaboratorEditCtrl])
        .controller('AgendaCollaboratorFormCtrl', ['$scope', 'ToastService', '$state',
             'AgendaCollaboratorSrv',
            AgendaCollaboratorFormCtrl]);

    function CollaboratorCtrl($scope, $window) {

    }



    function AgendaCollaboratorIndexCtrl($scope, $window, ToastService, DialogService, $state, $http ,AgendaCollaboratorSrv) {
        var vm = this;
        $scope.data = {};

        //Obtener  las metas
        $scope.data = AgendaCollaboratorSrv.get(
            function (response) {
               // console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Metas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Metas!');
            });

        //DELETE meta
        $scope.deleteCollaborator = function (collaboratorId) {
            console.log(collaboratorId);
            DialogService.confirm('Eliminar la Meta?', 'Desea continuar?')
                .then(() => {
                    AgendaCollaboratorSrv.delete({ id: collaboratorId }, function (response) {
                        $scope.data = AgendaCollaboratorSrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(collaboratorId), 1);
                        //console.log(response);
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar meta.
        $scope.editCollaborator = function (id) {
            $state.go('agenda/collaborator/edit', { id: id });
        };

        //Crear una meta.
        $scope.new = function () {
            $state.go('agenda/collaborator/create');
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

        //Buscar un tipo de pregunta.
        $scope.search = function (keyword) {

            if (keyword == null || keyword == "") {
                $scope.data = AgendaCollaboratorSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/agendas/collaborators/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }


    }


    function AgendaCollaboratorCreateCtrl($scope, periods, services) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/collaboratorsGoals/views/form.html';        
        $scope.services = services;        
        $scope.periods = periods;


    }

    function AgendaCollaboratorEditCtrl($scope, collaborator, periods, services){
        $scope.formUrl = THEME_URL + '/app/modules/agenda/collaboratorsGoals/views/form.html';
        $scope.services = services;
        //console.log($scope.services);
        $scope.periods = periods;
        $scope.collaborator = collaborator;

    }
    function AgendaCollaboratorFormCtrl($scope, ToastService, $state, AgendaCollaboratorSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/collaboratorsGoals/views/form.html';


        //Guardar meta .
        $scope.save = function () {
            AgendaCollaboratorSrv.save($scope.collaborator,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/collaborator');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición 
        $scope.cancel = function () {
            $state.go('agenda/collaborator');
        };
    }


})();