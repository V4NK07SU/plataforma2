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
                    eventMoveHandling: "Disabled",
                    eventResizeHandling: "Disabled",
                    onBeforeEventRender: function(args) {
                        switch (args.data.tags.status) {
                            case "free":
                                args.data.barColor = "green";
                                args.data.html = "Available";
                                args.data.toolTip = "Click to request this time slot";
                                break;
                            case "waiting":
                                args.data.barColor = "orange";
                                args.data.html = "Your appointment, waiting for confirmation";
                                break;
                            case "confirmed":
                                args.data.barColor = "#f41616";  // red            
                                args.data.html = "Your appointment, confirmed";
                                break;                            
                        }
                    },
                    onEventClick: function(args) {
                        
                        if (args.e.tag("status") !== "free") {
                            $scope.calendar.message("You can only request a new appointment in a free slot.");
                            return;
                        }
                        
                        var modal = new DayPilot.Modal({
                            onClosed: function(args) {
                                if (args.result) {  // args.result is empty when modal is closed without submitting
                                    loadEvents();
                                }
                            }
                        });

                        modal.showUrl("http://localhost/TutorialAngularJsDoctor/appointment_request.php?id=" + args.e.id());
                    }
                };

                $timeout(function() {
                    loadEvents();
                });
                
                
                function loadEvents(day) {
                    
                    var start = $scope.navigator.visibleStart() > new DayPilot.Date() ? $scope.navigator.visibleStart() : new DayPilot.Date();
                    
                    var params = {
                        start: start.toString(),
                        end: $scope.navigator.visibleEnd().toString()
                    };
                    $http.post(SITE_URL + "/api/health/appointment/sheduler/events-free", params).success(function(data) {
                        if (day) {
                            $scope.calendarConfig.startDate = day;
                        }
                        $scope.events = data;
                    });   
                }


    }
})();
