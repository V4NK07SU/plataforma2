(function () {
    'use strict';

    angular.module('app.modules.agenda.diary')
        .controller('DiaryCtrl', ['$scope', '$window', DiaryCtrl])
        .controller('AgendaDiaryIndexCtrl', ['$scope', '$window', 'AgendaDiarySrv', 'ToastService', 'DialogService', '$state', '$http', AgendaDiaryIndexCtrl])
        .controller('AgendaDiaryCreateCtrl', ['$scope', 
         'periods',
         AgendaDiaryCreateCtrl])
        .controller('AgendaDiaryEditCtrl', ['$scope',
         'diary','periods',
         AgendaDiaryEditCtrl])
        .controller('AgendaDiaryFormCtrl', ['$scope', 'ToastService', '$state', '$http',
         'AgendaDiarySrv',
         AgendaDiaryFormCtrl]);
    function DiaryCtrl($scope, $window) {

    }

    function collaboratorFormCtrl($scope, $window) {

    }

    function AgendaDiaryIndexCtrl($scope, $window, AgendaDiarySrv, ToastService, DialogService, $state, $http) {
        var vm = this;
        $scope.data = {};

        //Obtener  preguntas
        $scope.data = AgendaDiarySrv.get(
            function (response) {
                console.log(response);
                $scope.data = response;
                if ($scope.data.data.length > 0) {
                    ToastService.info('Se Obtuvieron las Agendas!');
                    console.log("yes");
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando las Agendas!');
            });

        //DELETE Preguntas
        $scope.deleteDiary = function (collaboratorId) {
            console.log(collaboratorId);
            DialogService.confirm('Eliminar la Agenda?', 'Desea continuar?')
                .then(() => {
                    AgendaDiarySrv.delete({ id: collaboratorId }, function (response) {
                        $scope.data = AgendaDiarySrv.get();
                        //$scope.data.data.splice($scope.data.data.indexOf(collaboratorId), 1);
                        //console.log(response);
                        ToastService.success(response.message);
                    }, function (error) {
                        ToastService.error(error.data.message);
                    }).$promise;
                });
        };

        //Editar pregunta.
        $scope.editDiary = function (id) {
            console.log(id);
            $state.go('agenda/diary/edit', { id: id });
        };

        //Crear un nuevo tipo de pregunta.
        $scope.new = function () {
            $state.go('agenda/diary/create');
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
                $scope.data = AgendaDiarySrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if (keyword) {
                $http.get(SITE_URL + '/api/agendas/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }


    }


    function AgendaDiaryCreateCtrl($scope,periods) {
       $scope.formUrl = THEME_URL + '/app/modules/agenda/diary/views/form.html';
       $scope.periods = periods;

    }


    function AgendaDiaryEditCtrl($scope, diary, periods) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/diary/views/form.html';
        $scope.diary = diary;
         $scope.periods = periods;
       
    }

    function AgendaDiaryFormCtrl ($scope, ToastService, $state, $http,AgendaDiarySrv) {
        $scope.formUrl = THEME_URL + '/app/modules/agenda/diary/views/form.html';     
       
        //Guardar pregunta editada.
        $scope.save = function () {
            AgendaDiarySrv.save($scope.diary,
                function (response) {
                    //console.log(response);
                    ToastService.success(response.message);
                    $state.go('agenda/diary');
                }, function (response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function (v, i) {
                        ToastService.error(v[0]);
                    });
                });
        }

        //Cancelar la edición una pregunta de encuesta.
        $scope.cancel = function (id) {
            $state.go('agenda/diary');
        };
        
    
    }

})();