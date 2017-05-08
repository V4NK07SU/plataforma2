(function(){
    'use strict';

    angular
        .module('app.modules.evaluations.prototypes')
        .controller('EvaluationsPrototypesEvaluationCtrl', EvaluationsPrototypesEvaluationCtrl)

    EvaluationsPrototypesEvaluationCtrl.$inject = ['$rootScope', '$scope'];

    function EvaluationsPrototypesEvaluationCtrl($rootScope, $scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.evaluated = 'Juan Pedro Rodriguez Morales';
        vm.possition = 'Decano';
        vm.dependency = 'Ingenieria';
        vm.evaluationPeriod = '';
        vm.comment = '';

        activate();

        function activate() {

        }


    }
})();

(function(){
    'use strict';

    angular
        .module('app.modules.evaluations.prototypes')
        .controller('EvaluationsPrototypesAsignCommitmentsCtrl', EvaluationsPrototypesAsignCommitmentsCtrl)

    EvaluationsPrototypesAsignCommitmentsCtrl.$inject = ['$location'];

    function EvaluationsPrototypesAsignCommitmentsCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.evaluated = 'Juan Pedro Rodriguez Morales';
        vm.possition = 'Decano';
        vm.dependency = 'Ingenieria';
        vm.evaluationPeriod = '';
        vm.comment = '';
        vm.function1 = '';
        vm.function2 = '';
        vm.function3 = '';
        vm.function4 = '';

        vm.commitment1 = '';
        vm.commitment2 = '';
        vm.commitment3 = '';
        vm.commitment4 = '';

        activate();

        function activate() { }
    }
})();

(function(){
    'use strict';

    angular
        .module('app.modules.evaluations.prototypes')
        .controller('EvaluationsPrototypesIndividualChartCtrl', EvaluationsPrototypesIndividualChartCtrl)

    EvaluationsPrototypesIndividualChartCtrl.$inject = ['$scope', '$timeout'];

    function EvaluationsPrototypesIndividualChartCtrl($scope, $timeout) {
        /* jshint validthis:true */
        var vm = this;
                var vm = this;
        vm.evaluated = 'Juan Pedro Rodriguez Morales';
        vm.possition = 'Decano';
        vm.dependency = 'Ingenieria';
        vm.evaluationPeriod = '';

        $scope.bar1 = {};
        $scope.bar1.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaluacion','Autoevaluacion']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"}//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Funcion 1.','Funcion 2.','Funcion 3.','Funcion 4.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaluacion',
                    type:'bar',
                    data:[2.0, 4.0, 3.0, 1.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Autoevaluacion',
                    type:'bar',
                    data:[3.0, 2.0, 4.0, 4.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.bar2 = {};
        $scope.bar2.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaluacion','Autoevaluacion']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"}//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Comunicación.','Empoderamiento.','Compromiso.','Innovación 4.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaluacion',
                    type:'bar',
                    data:[2.0, 4.0, 3.0, 2.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Autoevaluacion',
                    type:'bar',
                    data:[4.0, 3.0, 3.0, 4.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.bar3 = {};
        $scope.bar3.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaluacion','Autoevaluacion']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"}//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Coherencia Organizacional.','Pensamiento Estrategico.']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaluacion',
                    type:'bar',
                    data:[2.0, 4.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                },
                {
                    name:'Autoevaluacion',
                    type:'bar',
                    data:[3.0, 2.0],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.bar4 = {};
        $scope.bar4.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Autoevaluación']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"}//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Funciones 40%.','Competencias 40%.', 'Competencias por nivel 20%']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Autoevaluación',
                    type:'bar',
                    data:[60, 100, 80],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                }
            ]
        };
        $scope.bar5 = {};
        $scope.bar5.options = {
            tooltip : {
                trigger: 'axis'
            },
            legend: {
                data:['Evaluación']
            },
            toolbox: {
                show : true,
                feature : {
                    restore : {show: true, title: "restore"}//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['Funciones 40%.','Competencias 40%.', 'Competencias por nivel 20%']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'Evaluación',
                    type:'bar',
                    data:[80, 60, 90],
                    markPoint : {
                        data : [
                            {type : 'max', name: 'Max'},
                            {type : 'min', name: 'Min'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: 'Average'}
                        ]
                    }
                }
            ]
        };
        activate();

        function activate() { }
    }
})();