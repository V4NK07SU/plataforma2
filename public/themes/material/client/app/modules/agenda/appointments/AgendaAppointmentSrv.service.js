(function () {

    "use strict";

    angular.module('app.services')
        .factory('AgendaAppointmentSrv', ['$resource', AgendaAppointmentSrv]);

    function AgendaAppointmentSrv($resource) {
        return $resource(
            SITE_URL + '/api/agendas/appoinments/:id',
            {
                id: '@id'
            },
            {

                update: {
                    method: 'PUT'
                },
                get: {
                    method: 'GET', cache: false
                },
            },
            {
                stripTrailingSlashes: true
            }
        );
    }

}());