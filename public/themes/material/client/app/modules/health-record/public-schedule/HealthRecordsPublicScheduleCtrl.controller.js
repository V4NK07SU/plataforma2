(function () {
    'use strict';

    angular
        .module('app.modules.evaluations.prototypes')
        .controller('HealthRecordsPublicScheduleCtrl', HealthRecordsPublicScheduleCtrl)

    HealthRecordsPublicScheduleCtrl.$inject = ['$rootScope', '$scope', '$timeout', '$http'];

    function HealthRecordsPublicScheduleCtrl($rootScope, $scope, $timeout, $http) {
        /* jshint validthis:true */
        var vm = this;

        //$scope.doctor = '<?php echo $db->query('SELECT * FROM [doctor] ORDER BY [doctor_name]')->fetch()['doctor_id']; ?>';
                    
                $scope.navigatorConfig = {
                    selectMode: "week",
                    showMonths: 3,
                    skipMonths: 3,
                    onTimeRangeSelected: function(args) {     
                        loadEvents(args.start.firstDayOfWeek(), args.start.addDays(7));
                    }
                };
                
                $scope.calendarConfig = {
                    viewType: "Week",
                    timeRangeSelectedHandling: "Disabled",
                    onEventMoved: function(args) {
                        $http.post("http://localhost/TutorialAngularJsDoctor/backend_move.php", args).success(function(data) {
                            $scope.calendar.message(data.message);
                        }); 
                    },
                    onEventResized: function(args) {
                        $http.post("http://localhost/TutorialAngularJsDoctor/backend_move.php", args).success(function(data) {
                            $scope.calendar.message(data.message);
                        }); 
                    },
                    onBeforeEventRender: function(args) {
                        switch (args.data.tags.status) {
                            case "free":
                                args.data.barColor = "green";
                                break;
                            case "waiting":
                                args.data.barColor = "orange";
                                break;
                            case "confirmed":
                                args.data.barColor = "#f41616";  // red            
                                break;                            
                        }
                    },
                    onEventClick: function(args) {
                        var modal = new DayPilot.Modal({
                            onClosed: function(args) {
                                if (args.result) {  // args.result is empty when modal is closed without submitting
                                    loadEvents();
                                }
                            }
                        });

                        modal.showUrl("http://localhost/TutorialAngularJsDoctor/appointment_edit.php?id=" + args.e.id());
                    }
                };
                
                $scope.$watch("doctor", function() {
                    loadEvents();
                });

               function loadEvents(day) {
                    
                    var params = {
                        doctor: $scope.doctor,
                        start: $scope.navigator.visibleStart(),
                        end: $scope.navigator.visibleEnd().toString()
                    };
                    
                    $http.post("http://localhost/TutorialAngularJsDoctor/backend_events_doctor.php", params).success(function(data) {
                        if (day) {
                            $scope.calendarConfig.startDate = day;
                        }
                        $scope.events = data;
                    });   
                }


    }
})();