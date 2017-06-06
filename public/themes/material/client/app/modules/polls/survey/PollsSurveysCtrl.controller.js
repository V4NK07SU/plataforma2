(function () {
    'use strict';

    angular
        .module('app.modules.polls.surveys')
        .controller('PollsSurveysCtrl', ControllerCtrl)
    ControllerCtrl.$inject = ['$q', '$http', '$translate', '$scope', '$window', 'mwFormResponseUtils'];
    /** @ngInject */
    function ControllerCtrl($q, $http, $translate, $scope, $window, mwFormResponseUtils) {
        var vm = this;

        vm.pageTitle = 'Angular Surveys';
        vm.cmergeFormWithResponse = false;
        vm.cgetQuestionWithResponseList = false;
        vm.cgetResponseSheetHeaders = false;
        vm.cgetResponseSheetRow = false;
        vm.cgetResponseSheet = false;
        vm.headersWithQuestionNumber = true;
        vm.builderReadOnly = false;
        vm.viewerReadOnly = false;
        vm.languages = ['en', 'pl', "es"];
        vm.formData = null;
        $http.get('data/form-data.json')
            .then(function (res) {
                vm.formData = res.data;
            });
        vm.formBuilder = {};
        vm.formViewer = {};
        vm.formOptions = {
            autoStart: false
        };
        vm.optionsBuilder = {
            /*elementButtons:   [{title: 'My title tooltip', icon: 'fa fa-database', text: '', callback: vm.callback, filter: vm.filter, showInOpen: true}],
            customQuestionSelects:  [
                {key:"category", label: 'Category', options: [{key:"1", label:"Uno"},{key:"2", label:"dos"},{key:"3", label:"tres"},{key:"4", label:"4"}], required: false},
                {key:"category2", label: 'Category2', options: [{key:"1", label:"Uno"},{key:"2", label:"dos"},{key:"3", label:"tres"},{key:"4", label:"4"}]}
            ],
            elementTypes: ['question', 'image']*/
        };
        vm.formStatus = {};
        vm.responseData = {};
        $http.get('data/response-data.json')
            .then(function (res) {
                vm.responseData = res.data;
            });

        $http.get('data/template-data.json')
            .then(function (res) {
                vm.templateData = res.data;
            });

        vm.showResponseRata = false;
        vm.saveResponse = function () {
            var d = $q.defer();
            var res = confirm("Response save success?");
            if (res) {
                d.resolve(true);
            } else {
                d.reject();
            }
            return d.promise;
        };

        vm.onImageSelection = function () {

            var d = $q.defer();
            var src = prompt("Please enter image src");
            if (src != null) {
                d.resolve(src);
            } else {
                d.reject();
            }

            return d.promise;
        };

        vm.resetViewer = function () {
            if (vm.formViewer.reset) {
                vm.formViewer.reset();
            }

        };

        vm.resetBuilder = function () {
            if (vm.formBuilder.reset) {
                vm.formBuilder.reset();
            }
        };

        vm.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
        };

        vm.getMerged = function () {
            return mwFormResponseUtils.mergeFormWithResponse(vm.formData, vm.responseData);
        };

        vm.getQuestionWithResponseList = function () {
            return mwFormResponseUtils.getQuestionWithResponseList(vm.formData, vm.responseData);
        };
        vm.getResponseSheetRow = function () {
            return mwFormResponseUtils.getResponseSheetRow(vm.formData, vm.responseData);
        };
        vm.getResponseSheetHeaders = function () {
            return mwFormResponseUtils.getResponseSheetHeaders(vm.formData, vm.headersWithQuestionNumber);
        };

        vm.getResponseSheet = function () {
            return mwFormResponseUtils.getResponseSheet(vm.formData, vm.responseData, vm.headersWithQuestionNumber);
        };

        init();

        function init() {
        }

    }

}());
