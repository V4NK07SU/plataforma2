(function() {
    'use strict';

    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider',
            function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
                $sceDelegateProvider.resourceUrlWhitelist(['**']);
                var routes, setRoutes;

                routes = [
                    'ui/cards',
                    'ui/typography',
                    'ui/buttons',
                    'ui/icons',
                    'ui/grids',
                    'ui/widgets',
                    'ui/components',
                    'ui/timeline',
                    'ui/lists',
                    'ui/pricing-tables',
                    'map/maps',
                    'table/static',
                    'table/dynamic',
                    'table/responsive',
                    'form/elements',
                    'form/layouts',
                    'form/validation',
                    'form/wizard',
                    'chart/echarts',
                    'chart/echarts-line',
                    'chart/echarts-bar',
                    'chart/echarts-pie',
                    'chart/echarts-scatter',
                    'chart/echarts-more',
                    'page/404',
                    'page/500',
                    'page/blank',
                    'page/forgot-password',
                    'page/invoice',
                    'page/lock-screen',
                    'page/profile',
                    'page/signin',
                    'page/signup',
                    'app/calendar',

                    'test/page',
                    'example/page',

                    'modules/polls/poll-answer/poll-answer-index',
                    'modules/polls/poll-answer/poll-answer-show',
                    //'modules/polls/poll-answer/poll-answer-form',
                    {
                        'templateUrl': 'modules/polls/poll-answer/poll-answer-form',
                        'url': 'modules/polls/poll-answer/poll-answer-form/:id?',
                        'state': 'modules/polls/poll-answer/poll-answer-form'
                    },

                    'modules/polls/poll/polls-index',
                    'modules/polls/poll/polls-form',
                    'modules/polls/poll/polls-show',

                    'modules/polls/poll-item/poll-item-show',
                    'modules/polls/poll-item/poll-item-index',
                    //'modules/polls/poll-item/poll-item-form',
                    {
                        'templateUrl': 'modules/polls/poll-item/poll-item-form',
                        'url': 'modules/polls/poll-item/poll-item-form/:id?',
                        'state': 'modules/polls/poll-item/poll-item-form'
                    },

                    'modules/polls/poll-question/poll-question-form',
                    'modules/polls/poll-question/poll-question-index',
                    'modules/polls/poll-question/poll-question-show',

                    'modules/polls/poll-subquestion/poll-subquestion-show',
                    'modules/polls/poll-subquestion/poll-subquestion-index',
                    //'modules/polls/poll-subquestion/poll-subquestion-form',
                    {
                        'templateUrl': 'modules/polls/poll-subquestion/poll-subquestion-form',
                        'url': 'modules/polls/poll-subquestion/poll-subquestion-form/:id?',
                        'state': 'modules/polls/poll-subquestion/poll-subquestion-form'
                    },

                    'modules/polls/poll-question-type/poll-question-type-show',
                    'modules/polls/poll-question-type/poll-question-type-index',
                    //'modules/polls/poll-question-type/poll-question-type-form',
                    {
                        'templateUrl': 'modules/polls/poll-question-type/poll-question-type-form',
                        'url': 'modules/polls/poll-question-type/poll-question-type-form/:id?',
                        'state': 'modules/polls/poll-question-type/poll-question-type-form'
                    },

                    'modules/polls/poll-types/poll-types-index',
                    'modules/polls/poll-types/poll-types-show',
                    //'modules/polls/poll-types/poll-types-form',
                    {
                        'templateUrl': 'modules/polls/poll-types/poll-types-form',
                        'url': 'modules/polls/poll-types/poll-types-form/:id',
                        'state': 'modules/polls/poll-types/poll-types-form'
                    },

                    'modules/polls/poll-campaing/poll-campaing-index',
                    'modules/polls/poll-campaing/poll-campaing-show',
                    //'modules/polls/poll-campaing/poll-campaing-form',
                    {
                        'templateUrl': 'modules/polls/poll-campaing/poll-campaing-form',
                        'url': 'modules/polls/poll-campaing/poll-campaing-form/:id?',
                        'state': 'modules/polls/poll-campaing/poll-campaing-form'
                    },

                    'health-history/health-history',

                    'poll-graduate/poll-graduate-index',

                    'user-manual/user-manual-index',
                    'user-manual/user-manual-polls-create-poll',

                    'page/bienestar/index',


                    'example/tasks-list',
                    {
                        'templateUrl': 'example/tasks-form-edit',
                        'url': 'example/tasks-form-edit/:id?',
                        'state': 'example/tasks-form-edit'
                    },
                    {
                        'templateUrl': 'example/tasks-form',
                        'url': 'example/tasks-form',
                        'state': 'example/tasks-form'
                    }

                ]

                setRoutes = function(route) {
                    var config, url;
                    if (angular.isObject(route)) {
                        config = {
                            url: '/' + route.url,
                            templateUrl: THEME_URL + 'app/' + route.templateUrl + '.html'
                        };
                        $stateProvider.state(route.state, config);
                    } else {
                        url = '/' + route;
                        config = {
                            url: url,
                            templateUrl: THEME_URL + 'app/' + route + '.html'
                        };
                        $stateProvider.state(route, config);
                    }

                    return $stateProvider;
                };

                routes.forEach(function(route) {
                    return setRoutes(route);
                });

                $urlRouterProvider
                    .when('/', '/dashboard')
                    .otherwise('/dashboard');


                $stateProvider.state('dashboard', {
                    url: '/dashboard',
                    templateUrl: THEME_URL + 'app/dashboard/dashboard.html'
                });

            }
        ]);

})();