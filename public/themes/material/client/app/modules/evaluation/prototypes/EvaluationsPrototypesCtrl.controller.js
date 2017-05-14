(function () {
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

(function () {
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

(function () {
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
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Evaluacion', 'Autoevaluacion']
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true, title: "restore" }//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Funcion 1.', 'Funcion 2.', 'Funcion 3.', 'Funcion 4.']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Evaluacion',
                    type: 'bar',
                    data: [2.0, 4.0, 3.0, 1.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                },
                {
                    name: 'Autoevaluacion',
                    type: 'bar',
                    data: [3.0, 2.0, 4.0, 4.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                }
            ]
        };
        $scope.bar2 = {};
        $scope.bar2.options = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Evaluacion', 'Autoevaluacion']
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true, title: "restore" }//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Comunicación.', 'Empoderamiento.', 'Compromiso.', 'Innovación 4.']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Evaluacion',
                    type: 'bar',
                    data: [2.0, 4.0, 3.0, 2.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                },
                {
                    name: 'Autoevaluacion',
                    type: 'bar',
                    data: [4.0, 3.0, 3.0, 4.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                }
            ]
        };
        $scope.bar3 = {};
        $scope.bar3.options = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Evaluacion', 'Autoevaluacion']
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true, title: "restore" }//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Coherencia Organizacional.', 'Pensamiento Estrategico.']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Evaluacion',
                    type: 'bar',
                    data: [2.0, 4.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                },
                {
                    name: 'Autoevaluacion',
                    type: 'bar',
                    data: [3.0, 2.0],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                }
            ]
        };
        $scope.bar4 = {};
        $scope.bar4.options = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Autoevaluación']
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true, title: "restore" }//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Funciones 40%.', 'Competencias 40%.', 'Competencias por nivel 20%']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Autoevaluación',
                    type: 'bar',
                    data: [60, 100, 80],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                }
            ]
        };
        $scope.bar5 = {};
        $scope.bar5.options = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Evaluación']
            },
            toolbox: {
                show: true,
                feature: {
                    restore: { show: true, title: "restore" }//,
                    //saveAsImage : {show: true, title: "save as image"}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['Funciones 40%.', 'Competencias 40%.', 'Competencias por nivel 20%']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Evaluación',
                    type: 'bar',
                    data: [80, 60, 90],
                    markPoint: {
                        data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'Average' }
                        ]
                    }
                }
            ]
        };
        activate();

        function activate() { }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.modules.evaluations.prototypes')
        .controller('EvaluationsPrototypesOrgChartCtrl', EvaluationsPrototypesOrgChartCtrl)

    EvaluationsPrototypesOrgChartCtrl.$inject = ['$location'];

    function EvaluationsPrototypesOrgChartCtrl($location) {
        /* jshint validthis:true */
        var vm = this;

        vm.datasource = {
            'id': '1',
            'name': 'Juan Castañeda',
            'title': 'Gerente General',
            'className': 'top-level',
            'children': [
                { 'id': '2', 'name': 'Pablo Mora', 'title': 'Gerente Departamental', 'className': 'middle-level' },
                {
                    'id': '3', 'name': 'Maira Quijano', 'title': 'Gerente Departamental', 'className': 'middle-level',
                    'children': [
                        { 'id': '4', 'name': 'Jairo Suarez', 'title': 'Ingeniero Residente', 'className': 'middle-level-2' },
                        {
                            'id': '5', 'name': 'Berta daza', 'title': 'Ingeniero Residente', 'className': 'middle-level-2',
                            'children': [
                                { 'id': '6', 'name': 'Alberto Buendia', 'title': 'Operario', 'className': 'bottom-level' },
                                { 'id': '7', 'name': 'Roberto Alvarez', 'title': 'Operario', 'className': 'bottom-level' }
                            ]
                        }
                    ]
                },
                { 'id': '8', 'name': 'Julieta Vargas', 'title': 'Gerente de Zona', 'className': 'middle-level' },
                { 'id': '9', 'name': 'Roberto Castro', 'title': 'Gerente de Zona', 'className': 'middle-level' },
                {
                    'id': '13', 'name': 'Dario Pérez', 'title': 'Gerente de Zona', 'className': 'middle-level',
                    'children': [
                        {
                            'id': '14', 'name': 'Ramiro Ospina', 'title': 'Gerente Departamental', 'className': 'middle-level',
                            'children': [
                                {
                                    'id': '15', 'name': 'Daniel Solano', 'title': 'Ingeniero', 'className': 'middle-level-2',
                                    'children': [
                                        { 'id': '16', 'name': 'Marta Carvajal', 'title': 'Aprendiz Sena', 'className': 'bottom-level' }
                                    ]
                                }
                            ]
                        },
                        { 'id': '17', 'name': 'Yolanda Trelles', 'title': 'Gerente Departamental', 'className': 'middle-level' }
                    ]
                }
            ]
        };

        $('#chart-container').orgchart({
            'data': vm.datasource,
            'pan': true,
            'zoom': true,
            'nodeContent': 'title',
            'nodeID': 'id',
            'exportButton': true,
            'exportFilename': 'OrgChart',
            'exportFileextension': 'pdf',
            'draggable': true,
            'parentNodeSymbol': 'fa-th-large',
            'dropCriteria': function ($draggedNode, $dragZone, $dropZone) {
                if ($draggedNode.find('.content').text().indexOf('Gerente') > -1 && $dropZone.find('.content').text().indexOf('Ingeniero') > -1) {
                    return false;
                }
                return true;
            },
            'createNode': function ($node, data) {
                $node.on('click', function (event) {
                    if (!$(event.target).is('.edge')) {
                        $('#selected-node').val(data.name).data('node', $node);
                    }
                });
                var secondMenuIcon = $('<i>', {
                    'class': 'fa fa-info-circle second-menu-icon',
                    click: function () {
                        $(this).siblings('.second-menu').toggle();
                    }
                });
                var secondMenu = '<div class="second-menu"><img class="avatar" src="' + SITE_URL + '/img/avatar/avatar.jpg"></div>';
                $node.append(secondMenuIcon).append(secondMenu);
            }
        });

        var getId = function() {
            return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
        };

        $('input[name="chart-state"]').on('click', function () {
            $('.orgchart').toggleClass('view-state', this.value !== 'view');
            $('#edit-panel').toggleClass('view-state', this.value === 'view');
            if ($(this).val() === 'edit') {
                $('.orgchart').find('tr').removeClass('hidden')
                    .find('td').removeClass('hidden')
                    .find('.node').removeClass('slide-up slide-down slide-right slide-left');
            } else {
                $('#btn-reset').trigger('click');
            }
        });

        $('input[name="node-type"]').on('click', function () {
            var $this = $(this);
            if ($this.val() === 'parent') {
                $('#edit-panel').addClass('edit-parent-node');
                $('#new-nodelist').children(':gt(0)').remove();
            } else {
                $('#edit-panel').removeClass('edit-parent-node');
            }
        });

        $('#btn-add-input').on('click', function () {
            $('#new-nodelist').append('<li><input type="text" class="new-node"></li>');
        });

        $('#btn-remove-input').on('click', function () {
            var inputs = $('#new-nodelist').children('li');
            if (inputs.length > 1) {
                inputs.last().remove();
            }
        });

        $('#btn-add-nodes').on('click', function () {
            var $chartContainer = $('#chart-container');
            var nodeVals = [];
            $('#new-nodelist').find('.new-node').each(function (index, item) {
                var validVal = item.value.trim();
                if (validVal.length) {
                    nodeVals.push(validVal);
                }
            });
            var $node = $('#selected-node').data('node');
            if (!nodeVals.length) {
                alert('Ingrece un nombre de colaborador!');
                return;
            }
            var nodeType = $('input[name="node-type"]:checked');
            if (!nodeType.length) {
                alert('Seleccione un tipo de nodo!');
                return;
            }
            if (nodeType.val() !== 'parent' && !$('.orgchart').length) {
                alert('Cree un empleado de maximo nivel!');
                return;
            }
            if (nodeType.val() !== 'parent' && !$node) {
                alert('Seleccione un empleado!');
                return;
            }
            if (nodeType.val() === 'parent') {
                if (!$chartContainer.children().length) {// if the original chart has been deleted
                    $chartContainer.orgchart({
                        'data': { 'name': nodeVals[0] },
                        'exportButton': true,
                        'exportFilename': 'SportsChart',
                        'parentNodeSymbol': 'fa-th-large',
                        'createNode': function ($node, data) {
                            $node[0].id = getId();
                        }
                    })
                        .find('.orgchart').addClass('view-state');
                } else {
                    $chartContainer.orgchart('addParent', $chartContainer.find('.node:first'), { 'name': nodeVals[0], 'Id': getId() });
                }
            } else if (nodeType.val() === 'siblings') {
                $chartContainer.orgchart('addSiblings', $node,
                    {
                        'siblings': nodeVals.map(function (item) { return { 'name': item, 'relationship': '110', 'Id': getId() }; })
                    });
            } else {
                var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
                if (!hasChild) {
                    var rel = nodeVals.length > 1 ? '110' : '100';
                    $chartContainer.orgchart('addChildren', $node, {
                        'children': nodeVals.map(function (item) {
                            return { 'name': item, 'relationship': rel, 'Id': getId() };
                        })
                    }, $.extend({}, $chartContainer.find('.orgchart').data('options'), { depth: 0 }));
                } else {
                    $chartContainer.orgchart('addSiblings', $node.closest('tr').siblings('.nodes').find('.node:first'),
                        {
                            'siblings': nodeVals.map(function (item) { return { 'name': item, 'relationship': '110', 'Id': getId() }; })
                        });
                }
            }
        });

        $('#btn-delete-nodes').on('click', function () {
            var $node = $('#selected-node').data('node');
            if (!$node) {
                alert('Please select one node in orgchart');
                return;
            } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
                if (!window.confirm('Esta seguro de eliminar todo el organigrama?')) {
                    return;
                }
            }
            $('#chart-container').orgchart('removeNodes', $node);
            $('#selected-node').val('').data('node', null);
        });

        $('#btn-reset').on('click', function () {
            $('.orgchart').find('.focused').removeClass('focused');
            $('#selected-node').val('');
            $('#new-nodelist').find('input:first').val('').parent().siblings().remove();
            $('#node-type-panel').find('input').prop('checked', false);
        });

        $('.oc-export-btn').empty().text('Exportar');


        activate();

        function activate() {

        }
    }
})();