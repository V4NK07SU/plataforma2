(function() {
    'use strict';
    
    angular.module('app', [
        // Core modules
        'app.core',

        // Custom Feature modules
        'app.chart',
        'app.ui',
        'app.ui.form',
        'app.ui.form.validation',
        'app.page',
        'app.table',
        'app.test',
        'app.example',
        
        'app.modules.polls.poll',
        'app.modules.polls.pollCampaing',
        'app.modules.polls.pollAnswer',
        'app.modules.polls.pollItem',
        'app.modules.polls.pollQuestion',
        'app.modules.polls.pollSubquestion',
        'app.modules.polls.pollQuestionType',
        'app.modules.polls.pollType',
        'app.modules.polls.pollBankQuestion',
        'app.modules.polls.userCampaing',
        'app.modules.polls.userPoll',

        'app.health-history',
        'app.userManual',   


        'app.modules.evaluation.competencies',
        'app.modules.evaluation.dependencies',
        'app.modules.evaluation.roles',
        'app.modules.evaluation.commitmentsAnswer',
        'app.modules.blog.authors',
        //'app.modules.blog.users',
        'app.modules.agenda.days',
        'app.modules.agenda.services',
        'app.modules.agenda.phenomena',
        'app.modules.agenda.periods',
        'app.modules.agenda.hours',
        'app.modules.agenda.collaborator',
        'app.modules.agenda.diary',
        'app.modules.agenda.appointments',
        
        'app.modules.health-record.dimensions-categories',
        'app.modules.health-record.user-family-composition',
        'app.modules.health-record.dimensions',
        'app.modules.health-record.history',
        'app.modules.health-record.types',
        'app.modules.health-record.user-history',
        'app.modules.health-record.record-dimension',
        'app.modules.health-record.record',  
        'app.modules.health-record.public',        
        'app.modules.agenda.riskVariables',

        'app.modules.users.permissions',
        'app.modules.users.roles',
        'app.modules.users.users',

        'app.modules.agenda.schedule',
        'app.modules.health-record.user-history',


        'app.modules.evaluations.prototypes',

        // 3rd party feature modules
        'mgo-angular-wizard',
        'ui.tree',
        'ngMap',
        'textAngular',
        'angularMoment'

        //'mdPickers'
    ]);

})();
