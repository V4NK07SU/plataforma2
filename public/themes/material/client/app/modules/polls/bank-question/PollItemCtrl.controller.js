(function () {
    'use strict';

    angular.module('app.modules.polls.pollBankQuestion')

        .controller('PollBankQuestionIndexCtrl', [
            '$scope', '$mdDialog', '$window', '$state', '$http',
            'PollItemSrv', 'ToastService', 'DialogService',
            'PollQuestionTypeSrv', 'PollItemQuestionSrv', 'AgendaRiskVariableSrv',
            PollBankQuestionIndexCtrl])



    function PollBankQuestionIndexCtrl($scope, $mdDialog, $window, $state, $http, PollItemSrv, ToastService, DialogService
    ,PollQuestionTypeSrv, PollItemQuestionSrv, AgendaRiskVariableSrv
    ) {
         var vm = this;
        $scope.data = {};

        $scope.item = {
            title: '',
            description: '',
            questions: []
        };

        /*
        $scope.newQuestion = {
            title: '',
            description: '',
            risk_var_id: '',
            answers: [],
            subQuestions: []
        };


        $scope.newSubquestion = {
            title: '',
            description: '',
            subquestions_answer: [],
        }*/



        //Disable Button.
        $scope.disabled = {
            question: false,
            answer: false,
        }

        
        //Obtener los tipos de de preguntas.
        $scope.pollQuestionTypes = {}; 
        PollQuestionTypeSrv.get(function(response){
            $scope.pollQuestionTypes = response.data;
        });
        console.log($scope.pollQuestionTypes);
        


        //Obtener las variables de riesgo.
        $scope.pollRiskVar = {}; 
        AgendaRiskVariableSrv.get(function(response){
            $scope.pollRiskVar = response.data;
        });
        console.log($scope.pollRiskVar);
        

          ////////////////////QUESTION//////////////////
         // Abrir dialog con el servicio DialogService
         $scope.openQuestionDialogForm = function() {
           // Se abre un dialog desde template, 
           // parametro 1 es la ruta de la vista
          // parametro 2 son las opciones para el dialos
           DialogService.fromTemplate('app/modules/polls/bank-question/views/modal-question', {
                    // Cierra el dialog haciendo click por fuera
                    clickOutsideToClose: true,
                    // cierra el dialog con la tecla scape
                    escapeToClose: true,
                    // hereda el scope del controlador que abre el dialog
                    scope: $scope,
                    preserveScope: true
                });
            };

            
            //Cancelar la creación de una pregunta
            $scope.cancelAddQuestion = function() {
                DialogService.hide();
            };

            $scope.pollQuestion = {
                answers: [],
                subquestions: []
            };
            //Añadir al array de preguntas la nueva pregunta.
            $scope.addQuestion = function() {
                $scope.item.questions.push($scope.pollQuestion);
                console.log($scope.item);
                $scope.pollQuestion = {
                    answers: [],
                    subquestions: []
                };
                DialogService.hide();
                //Habilitar boton
                $scope.disabled.question = true;
                
            };



            $scope.newQuestionAnswer = {};
            ////////////////////ANSWER//////////////////
            // Abrir dialog con el servicio DialogService
            $scope.openAnswerDialogForm = function(question) {
                $scope.newQuestionAnswer = question;
                // Se abre un dialog desde template, 
                // parametro 1 es la ruta de la vista
                // parametro 2 son las opciones para el dialos
                DialogService.fromTemplate('app/modules/polls/bank-question/views/modal-answer', {
                    // Cierra el dialog haciendo click por fuera
                    clickOutsideToClose: true,
                    // cierra el dialog con la tecla scape
                    escapeToClose: true,
                    // hereda el scope del controlador que abre el dialog
                    scope: $scope,
                    preserveScope: true
                });
            };

            //Cancelar la creación de una respuesta de la pregunta
            $scope.cancelAddAnswer = function() {
                DialogService.hide();
            };

            $scope.pollAnswer = {};
            //Añadir al array de preguntas su respectiva respuesta.
            $scope.addAnswer = function(question) {
                console.log(question);
                var idx = $scope.item.questions.indexOf(question);
                $scope.item.questions[idx].answers.push($scope.pollAnswer);
                //question.answers.push($scope.pollAnswer);
                //$scope.newQuestion.answers.push($scope.pollAnswer);
                console.log($scope.item);
                $scope.pollAnswer = {};
                DialogService.hide();
                //Habilitar boton
                $scope.disabled.answer = true;
            };


            

            

        /////////////////ITEM//////////////////
        $scope.pollItem = {};
        //Añadir al objeti el titulo y la descripcion del item.
        $scope.addItem = function() {
                $scope.item.title = $scope.pollItem.title;
                $scope.item.description = $scope.pollItem.description;
                console.log($scope.item);

            PollItemQuestionSrv.save($scope.item,
                function(response) {
                    ToastService.success(response.mesagge);
                    $state.go('polls/poll-item');
                }, function(response) {
                    console.log(response);
                    angular.forEach(response.data.errors, function(v, i) {
                        ToastService.error(v[0]);
                    });
                });   
        };




        //////SUBPREGUNTAS///////////////////////
        // Abrir dialog con el servicio DialogService
        $scope.newSubquestion = {};
        $scope.openSubquestionDialogForm = function(newSubquestion) {
            $scope.newSubquestion = newSubquestion;
            // Se abre un dialog desde template, 
            // parametro 1 es la ruta de la vista
            // parametro 2 son las opciones para el dialos
            DialogService.fromTemplate('app/modules/polls/bank-question/views/modal-subquestion', {
                // Cierra el dialog haciendo click por fuera
                clickOutsideToClose: true,
                // cierra el dialog con la tecla scape
                escapeToClose: true,
                // hereda el scope del controlador que abre el dialog
                scope: $scope,
                preserveScope: true
            });
        };

       

        //Cancelar la creación de una subpregunta.
        $scope.cancelAddSubquestion = function() {
            DialogService.hide();
        };




            $scope.pollSubquestion = {
                poll_question_answers: [],
            };
            //Añadir al array las subpreguntas
            $scope.addSubquestion = function(newSubquestion) {
                console.log(newSubquestion);
                var idx = $scope.item.questions.indexOf(newSubquestion);
                $scope.item.questions[idx].subquestions.push($scope.pollSubquestion);
                console.log($scope.item);
                $scope.pollSubquestion = {
                   poll_question_answers: [],
                };
                DialogService.hide();
                //Habilitar boton
                $scope.disabled.question = true;
                
            };



        /////////SUBQUESTION ANSWER//////////
        // Abrir dialog con el servicio DialogService
        $scope.newSubquestionAnswer = {};
        $scope.openSubquestionAnswerDialogForm = function(Subquestion) {
            $scope.newSubquestionAnswer = Subquestion;
            // Se abre un dialog desde template, 
            // parametro 1 es la ruta de la vista
            // parametro 2 son las opciones para el dialos
            DialogService.fromTemplate('app/modules/polls/bank-question/views/modal-subquestion-answer', {
                // Cierra el dialog haciendo click por fuera
                clickOutsideToClose: true,
                // cierra el dialog con la tecla scape
                escapeToClose: true,
                // hereda el scope del controlador que abre el dialog
                scope: $scope,
                preserveScope: true
            });
        };


        $scope.pollSubquestionAnswer = {};
         //Añadir al array las respuestas de la subpregunta
         $scope.addSubquestionAnswer = function(subquestion, question) {
             var idx = $scope.item.questions.indexOf(question);
             var idxx = $scope.item.questions[idx].subquestions.indexOf(subquestion);

             console.log(idx);
             console.log(idxx);

             $scope.item.questions[idx].subquestions[idxx].poll_question_answers.push($scope.pollSubquestionAnswer);
             console.log($scope.item);
             DialogService.hide();
             $scope.pollSubquestionAnswer = {};
             //Habilitar boton
             $scope.disabled.question = true;
             
         };


        //Cancelar la creación de una respuesta de la subpregunta
        $scope.cancelAddSubquestionAnswer = function() {
            DialogService.hide();
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

        //Buscar una pregunta.
        $scope.search = function (keyword) {

            if (keyword == null || keyword == "") {
                $scope.data = PollItemSrv.get();
                console.log("keyword");
                $scope.keyword = "";

            }
            if (keyword) {
                $http.get(SITE_URL + '/api/polls/pollitems/search/' + keyword).success(function (res) {
                    $scope.data = res;
                    //console.log($scope.data);
                    $scope.keyword = "";
                }).error(function (res) {
                    alert('error');
                });
            }
        }



        $scope.optionsValue = [{
                value: 1,
                text: 'Rojo'
                  
         
            },
            {
                value: 2,
                text: 'Amarillo'

            },
            {
                value: 3,
                text: 'Verde'

            }
        ];
    }

    

})();