(function () {
    'use strict';

    angular.module('app.modules.agenda.collaborator')
        .controller('CollaboratorCtrl', ['$scope', '$window', CollaboratorCtrl])
        .controller('CollaboratorIndexCtrl', ['$scope', '$window', 'CollaboratorSrv', 'ToastService', 'DialogService', '$state', '$http', CollaboratorIndexCtrl])
        .controller('CollaboratorCreateCtrl', ['$scope', '$window', 'CollaboratorSrv', 'ToastService', '$state', '$http', 'ServiceSrv', 'AgendaPeriodSrv', CollaboratorCreateCtrl])
        .controller('CollaboratorEditCtrl', ['$scope', '$window', '$stateParams', 'collaborator', 'CollaboratorSrv', 'ToastService', '$state', '$http', 'ServiceSrv', 'AgendaPeriodSrv', CollaboratorEditCtrl]);

    function CollaboratorCtrl($scope, $window) {

    }

    function collaboratorFormCtrl($scope, $window) {

    }

    function CollaboratorIndexCtrl($scope, $window, CollaboratorSrv, ToastService, DialogService, $state, $http) {
        var vm = this;
        $scope.data = {};

        //Obtener  preguntas
        $scope.data = CollaboratorSrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Metas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Metas!');
            });

        //DELETE Preguntas
        $scope.deleteCollaborator = function (collaboratorId) {
            console.log(collaboratorId);
            DialogService.confirm('Eliminar la Meta?', 'Desea continuar?')
                .then(() => {
                    CollaboratorSrv.delete({ id: collaboratorId }, function (response) {
                        $scope.data = CollaboratorSrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(collaboratorId), 1);
                        //console.log(response);
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar pregunta.
        $scope.editCollaborator = function (id) {
            console.log(id);
            $state.go('agenda/collaborator/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
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
                $scope.data = CollaboratorSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/agenda/collaborators/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }


    }


    function CollaboratorCreateCtrl($scope, $window, CollaboratorSrv, ToastService, $state, $http, ServiceSrv, AgendaPeriodSrv) {
       $scope.formUrl = THEME_URL + '/app/modules/agenda/collaboratorsGoals/views/form.html';

       //Obtener el listado de los items
       $scope.services = {};
       $scope.services = ServiceSrv.get();
       
       //Obtener el listados de los tipos de encuesta.
       $scope.periods = {};
       $scope.periods = AgendaPeriodSrv.get()
     


        $scope.collaborator = {};
         //Guardar una nueva pregunta.
        $scope.save = function () {
            CollaboratorSrv.save($scope.collaborator,
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

         //Cancelar la creación de una  pregunta.
        $scope.cancel = function (id) {
            $state.go('agenda/collaborator');
        };

    }

    function CollaboratorEditCtrl($scope, $window, $stateParams, collaborator, CollaboratorSrv, ToastService, $state, $http,  ServiceSrv, AgendaPeriodSrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/collaboratorsGoals/views/form.html';

        //Obtener el listado de los items
        $scope.services = {};
        $scope.services = ServiceSrv.get('@all');
       
        //Obtener el listados de los tipos de encuesta.
        $scope.periods = {};
        $scope.periods = AgendaPeriodSrv.get()
     


        $scope.collaborator = collaborator;

        //Guardar pregunta editada.
        $scope.save = function () {
            CollaboratorSrv.save($scope.collaborator,
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

        //Cancelar la edición una pregunta de encuesta.
        $scope.cancel = function (id) {
            $state.go('agenda/collaborator');
        };
    }

})();