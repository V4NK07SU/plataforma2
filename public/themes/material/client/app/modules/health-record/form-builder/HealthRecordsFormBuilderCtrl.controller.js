(function () {
    'use strict';

    angular
        .module('app.modules.health-records.form-builder')
        .controller('HealthRecordsFormBuilderCtrl', HealthRecordsFormBuilderCtrl)
    HealthRecordsFormBuilderCtrl.$inject = ['$scope', '$window'];
    /** @ngInject */
    function HealthRecordsFormBuilderCtrl($scope, $window) {
        var riskVars = [
            {
                'id': 1,
                'phenomenon_id': 1,
                'title': 'Variable de riesgo 1'
            },
            {
                'id': 2,
                'phenomenon_id': 1,
                'title': 'Variable de riesgo 2'
            },
            {
                'id': 3,
                'phenomenon_id': 1,
                'title': 'Variable de riesgo 3'
            }
        ];
        var i;
        var vm = this;
        vm.form = {
            "items": [
                {
                    "type": "textarea",
                    "props": {
                        "title": "Text area question",
                        "helpText": "Some help text."
                    },
                    "config": {
                        "required": true,
                        "placeholder": ""
                    },
                    "value": "Some one",
                    "riskVars": riskVars
                },
                {
                    "type": "checkboxes",
                    "props": {
                        "title": "Checkbox question?",
                        "helpText": "Help text sentence."
                    },
                    "config": {
                        "required": true
                    },
                    "options": [
                        {
                            "value": "Option 1",
                            "selected": false
                        },
                        {
                            "value": "Option 2",
                            "selected": true
                        },
                        {
                            "value": "Option 3",
                            "selected": false
                        },
                        {
                            "value": "Option 4",
                            "selected": false
                        }
                    ],
                    "riskVars": riskVars
                },
                {
                    "type": "multipleChoices",
                    "props": {
                        "title": "Radiobutton question?",
                        "helpText": "Some help text."
                    },
                    "config": {
                        "required": true
                    },
                    "options": [
                        {
                            "value": "Option 1"
                        },
                        {
                            "value": "Option 2"
                        },
                        {
                            "value": "Option 3"
                        }
                    ],
                    "value": "Option 2",
                    "riskVars": riskVars
                },
                {
                    "type": "input",
                    "props": {
                        "title": "Number textfield?",
                        "helpText": "Input a number bellow."
                    },
                    "config": {
                        "required": true,
                        "placeholder": "Number",
                        "type": "number"
                    },
                    "riskVars": riskVars
                },
                {
                    "type": "input",
                    "props": {
                        "title": "Text textfield?",
                        "helpText": "Input text bellow."
                    },
                    "config": {
                        "required": true,
                        "placeholder": null,
                        "type": "text"
                    },
                    "riskVars": riskVars
                },
                {
                    "type": "matrix",
                    "props": {
                        "title": "Some grid cuestion?",
                        "helpText": "Help text sentence."
                    },
                    "config": {
                        "required": true,
                        "rows": [
                            {
                                "value": "Subquestion 1?",
                                "selected": "No"
                            },
                            {
                                "value": "Subquestion 2?",
                                "selected": "No"
                            },
                            {
                                "value": "Subquestion 3?",
                                "selected": "Maybe"
                            }
                        ],
                        "columns": [
                            {
                                "value": "Yes"
                            },
                            {
                                "value": "No"
                            },
                            {
                                "value": "Maybe"
                            }
                        ]
                    },
                    "riskVars": riskVars
                }
            ]
        };

        vm.options = [
            {
                'id': 1,
                'text': 'Verde'
            },
            {
                'id': 2,
                'text': 'Amarillo'
            },
            {
                'id': 3,
                'text': 'Rojo'
            }
        ];        

        HealthRecordsFormBuilderCtrl.prototype.addItem = function (type) {

            this.form.items.push({
                type: type,
                riskVars: riskVars
            });
        };

        HealthRecordsFormBuilderCtrl.prototype.delete = function (item, index) {
            vm.form.items.splice(index, 1);
        };

        HealthRecordsFormBuilderCtrl.prototype.up = function (item, index) {
            if (index !== 0) {
                var prevItem = vm.form.items[index - 1];
                vm.form.items[index] = prevItem;
                vm.form.items[index - 1] = item;
            }
        };

        HealthRecordsFormBuilderCtrl.prototype.down = function (item, index) {
            if (index !== vm.form.items.length + 1) {
                var nextItem = vm.form.items[index + 1];
                vm.form.items[index] = nextItem;
                vm.form.items[index + 1] = item;
            }
        };

        init();

        function init() {
        }        
    }

}());
