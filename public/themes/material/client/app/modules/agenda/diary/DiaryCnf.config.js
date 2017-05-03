(function () {
    'use strict';
    angular.module('app.modules.agenda.diary', [])
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);
                //INDEX
                $stateProvider.state('agenda/diary', {
                    url: '/agenda/diary',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/index.html',
                    resolve: {
                        DiarySrv: 'DiarySrv',
                        diary: function (DiarySrv) {
                            return DiarySrv.get().$promise;
                        }
                    },
                    controller: 'DiaryIndexCtrl'
                });
                //EDIT
                $stateProvider.state('agenda/diary/edit', {
                    url: '/agenda/diary/:id/edit',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/edit.html',
                    resolve: {
                        DiarySrv: 'DiarySrv',
                        diary: function (DiarySrv, $stateParams) {
                            return DiarySrv.get({id: $stateParams.id}).$promise;
                        }
                    },
                    controller: 'DiaryEditCtrl'
                });
                //CREATE
                $stateProvider.state('agenda/diary/create', {
                    url: '/agenda/diary/create',
                    templateUrl: THEME_URL + 'app/modules/agenda/diary/views/create.html',
                    resolve: {

                    },
                    controller: 'DiaryCreateCtrl'
                });
            }]);
})();