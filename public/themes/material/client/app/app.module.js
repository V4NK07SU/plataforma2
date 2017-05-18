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

        'app.health-history',
        'app.userManual',   


        'app.modules.evaluation.competencies',
        'app.modules.evaluation.dependencies',
        'app.modules.evaluation.roles',
        'app.modules.evaluation.commitmentsAnswer',
        'app.modules.blog.authors',
        'app.modules.agenda.days',
        'app.modules.agenda.services',
        'app.modules.agenda.phenomena',
        'app.modules.agenda.periods',
        'app.modules.agenda.hours',
        'app.modules.agenda.collaborator',
        'app.modules.agenda.diary',
        'app.modules.agenda.appointments',
        'app.modules.agenda.riskVariables',
        'app.modules.users.permissions',
        'app.modules.users.roles',
        'app.modules.agenda.schedule',

        // 3rd party feature modules
        'mgo-angular-wizard',
        'ui.tree',
        'ngMap',
        'textAngular',
        'angularMoment'
    ]);

})();
