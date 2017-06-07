/**
 *
 */
(function() {
    'use strict';

    angular.module('app.modules.health-record.public')
        .controller('HealthPublicCtrl', ['$scope', '$window', 'HealthPublicCtrl'])
        .controller('HealthPublicIndexCtrl', ['$scope', '$window', '$state', 'HealthPublicSrv', 'ToastService', 'DialogService','$http',
            HealthPublicIndexCtrl]);

   

    /**
     *
     * @param $scope
     * @param $window
     * @constructor
     */
    function HealthPublicIndexCtrl($scope, $window, $state, HealthPublicSrv, ToastService, DialogService,$http) {


        /**var vm = this;
        vm.data = {};

        $scope.current_page = null;
        $scope.from = null;
        //$scope.last_page = null
        $scope.next_page = null;
        $scope.total = null;
        $scope.per_page = null;
        $scope.last_page = null;
        $scope.next_page_url = null;
        $scope.prev_page_url = null;
        $scope.from = null;
        $scope.to = null;
        $scope.types = [];

   
        //Index
        $scope.data = HealthTypeSrv.get(
            function (response) {
                if($scope.data.data.length > 0){
                ToastService.info('Se obtubieron Tipos de Historia!');
                angular.forEach(response.data, function(v, i) {
                    $scope.types[i] = v;
                });
                $scope.types = response.data;
                }
            },
            function (response) {
                ToastService.error('Ocurrio un error cargando Tipos de Historia!');
            });

        //edit
        $scope.editTypes = function (id) {
            $state.go('health-record/types/edit', { id: id });
        };

        
        //create
       $scope.new = function () {
            $state.go('health-record/types/create');
        };

     

        //Paginate
        
        $scope.loadPage = function(url) {
           // console.log(url);
            $http.get(url).success(function (res) {
                $scope.data = res;
               // console.log($scope.data);
            }).error(function(res) {
                alert('error');
            });
        };
        
        //Search
        $scope.search = function (keyword){
            if (keyword  == null || keyword == "") {
                $scope.data = HealthTypeSrv.get();
                console.log("keyword");
                $scope.keyword = "";
            }
            if(keyword){
            console.log(keyword);
            $http.get(SITE_URL + '/api/health/types/search/' + keyword).success(function (res){
                $scope.data = res;
                console.log($scope.data);
            }).error(function (res) {
                alert('error');
                // body...
            });
        }
        }


        //ELIMINAR 

       $scope.deleteService = function (serviceId) {

           //console.log(serviceId);
            DialogService.confirm('Eliminar Tipo de Historia', 'Desea continuar?')
            .then(() => {
                HealthTypeSrv.delete({ id: serviceId }, function (response) {
                    //$scope.data.data.splice($scope.data.data.indexOf(serviceId), 1);
                    $scope.data = HealthTypeSrv.get();
                    console.log(response);
                    ToastService.success(response.message);
                }, function (error) {
                    ToastService.error(error.data.message);
                }).$promise;
            });


        };*/
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
                            case "confirmado":
                                args.data.barColor = "#f41616";  // red            
                                args.data.html = "Your appointment, confirmado";
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

                        modal.showUrl("appointment_request.php?id=" + args.e.id());
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
                    
                    $http.post("backend_events_free.php", params).success(function(data) {
                        if (day) {
                            $scope.calendarConfig.startDate = day;
                        }
                        $scope.events = data;
                    });   
                }
            

    }
})();