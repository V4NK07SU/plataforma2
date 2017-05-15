(function () {
    'use strict';

    angular.module('app.modules.evaluations.prototypes', [
        // Angular modules

        // Custom modules

        // 3rd Party Modules

    ])
    .run(appRun);

    appRun.$inject = ['RouteHelperPvd'];
    /* @ngInject */
    function appRun(RouteHelperPvd) {
        RouteHelperPvd.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'evaluation/prototypes/eveluation',
                config: {
                    url: '/evaluation/prototypes/eveluation',
                    templateUrl: THEME_URL + 'app/modules/evaluation/prototypes/views/evaluation.html',
                    controller: 'EvaluationsPrototypesEvaluationCtrl',
                    controllerAs: 'vm',
                    title: 'Evaluacion de desempeño',
                    resolve: {
                        
                    }                    
                }
            },
            {
                state: 'evaluation/prototypes/asign-commitments',
                config: {
                    url: '/evaluation/prototypes/asign-commitments',
                    templateUrl: THEME_URL + 'app/modules/evaluation/prototypes/views/asign-commitments.html',
                    controller: 'EvaluationsPrototypesAsignCommitmentsCtrl',
                    controllerAs: 'vm',
                    title: 'Asignación de Compromisos',
                    resolve: {
                        
                    }                    
                }
            },
            {
                state: 'evaluation/prototypes/individual-chart',
                config: {
                    url: '/evaluation/prototypes/individual-chart',
                    templateUrl: THEME_URL + 'app/modules/evaluation/prototypes/views/individual-chart.html',
                    controller: 'EvaluationsPrototypesIndividualChartCtrl',
                    controllerAs: 'vm',
                    title: 'Asignación de Compromisos',
                    resolve: {
                        
                    }                    
                }
            },
            {
                state: 'evaluation/prototypes/org-chart',
                config: {
                    url: '/evaluation/prototypes/org-chart',
                    templateUrl: THEME_URL + 'app/modules/evaluation/prototypes/views/org-chart.html',
                    controller: 'EvaluationsPrototypesOrgChartCtrl',
                    controllerAs: 'vm',
                    title: 'Organigrama',
                    resolve: {
                        
                    }                    
                }
            }
        ];
    }
})();