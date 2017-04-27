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
        'app.modules.polls.poll-answer',
        'app.modules.polls.poll-item',
        'app.modules.polls.poll-question',
        'app.modules.polls.poll-subquestion',
        'app.modules.polls.poll-question-type',
        'app.modules.polls.poll-types',
        'app.modules.polls.poll-campaing',
        'app.health-history',
        'app.userManual',

        'app.modules.blog.authors',

        // 3rd party feature modules
        'mgo-angular-wizard',
        'ui.tree',
        'ngMap',
        'textAngular'
    ]);

})();