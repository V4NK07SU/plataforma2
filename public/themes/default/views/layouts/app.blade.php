<html lang="en" ng-app="app">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <link rel="stylesheet" href="themes/default/bower_components/angular-material/angular-material.min.css">
    <link rel="stylesheet" href="themes/default/bower_components/angular-material-icons/angular-material-icons.css">
    <link rel="stylesheet" href="themes/default/assets/css/vendor/angular-material-sidemenu.css">
    <link rel="stylesheet" href="themes/default/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

</head>
<body layout="column" ng-controller="AppCtrl">
<!-- Main Tool Bar -->
<md-toolbar class="md-hue-2">
    <div class="md-toolbar-tools">
        <md-button  ng-click="lockLeft = !lockLeft" class="md-icon-button" aria-label="Admin Menu" hide show-gt-sm>
            <ng-md-icon icon="menu" style="fill:#fff;"></ng-md-icon>
        </md-button>
        <!-- <md-button ng-md-icon icon="menu" style="fill: #fff;"></md-button> -->
        <md-button  ng-click="toggleLeft()" class="md-icon-button" aria-label="Admin Menu" hide-gt-sm>
            <ng-md-icon icon="menu" style="fill:#fff;"></ng-md-icon>
        </md-button>
        <h2 flex md-truncate>Toolbar</h2>

        <md-button class="md-icon-button" aria-label="Favorite">
            <ng-md-icon icon="favorite" style="fill:#fff;"></ng-md-icon>
        </md-button>

        <md-button class="md-icon-button" aria-label="More" ng-click="toggleRight()">
            <ng-md-icon icon="more_vert" style="fill:#fff;"></ng-md-icon>
        </md-button>
    </div>
</md-toolbar>

<!-- ./Main Tool Bar -->

<section layout="row" flex>
    <!-- Main Side Bar -->
    <md-sidenav class="md-sidenav-left md-whiteframe-z2" md-component-id="left" md-is-locked-open="lockLeft && $mdMedia('gt-sm')">

        <md-toolbar class="md-theme-indigo">
            <h1 class="md-toolbar-tools">Sidenav Left</h1>
        </md-toolbar>
        <md-content md-scroll-y flex layout="column" ng-scrollbars ng-scrollbars-config="config" id="main-content">
            <md-sidemenu locked="true">
                <md-sidemenu-group>
                    <md-subheader class="md-no-sticky">Caption</md-subheader>

                    <md-sidemenu-content md-icon="home" md-heading="Menu 1" md-arrow="true">
                        <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
                    </md-sidemenu-content>

                    <md-sidemenu-content md-heading="Menu 2" md-arrow="true">
                        <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
                    </md-sidemenu-content>

                    <md-sidemenu-content md-heading="Menu 3" md-arrow="true">
                        <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>

                    </md-sidemenu-content>
                    <md-sidemenu-content md-heading="Menu 3.1" md-arrow="true">
                        <md-sidemenu-button href="#">Submenu 1</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 2</md-sidemenu-button>
                        <md-sidemenu-button href="#">Submenu 3</md-sidemenu-button>
                        <md-sidemenu-content md-heading="Menu 3.1" md-arrow="true">
                            <md-sidemenu-button href="#">Submenu 3.1</md-sidemenu-button>
                            <md-sidemenu-button href="#">Submenu 3.2</md-sidemenu-button>
                            <md-sidemenu-button href="#">Submenu 3.3</md-sidemenu-button>
                            <md-sidemenu-content md-heading="Menu 3.1.1" md-arrow="true">
                                <md-sidemenu-button href="#">Submenu 3.1.1</md-sidemenu-button>
                                <md-sidemenu-button href="#">Submenu 3.2.1</md-sidemenu-button>
                                <md-sidemenu-button href="#">Submenu 3.3.1</md-sidemenu-button>

                            </md-sidemenu-content>
                        </md-sidemenu-content>
                    </md-sidemenu-content>
                </md-sidemenu-group>

                <md-sidemenu-group>
                    <md-divider></md-divider>

                    <md-subheader class="md-no-sticky">Caption</md-subheader>

                    <md-sidemenu-button href="#">Menu 4</md-sidemenu-button>
                </md-sidemenu-group>

                <md-sidemenu-group>
                    <md-divider></md-divider>

                    <md-subheader class="md-no-sticky">Caption</md-subheader>
                    <md-sidemenu-button href="#">Menu 5</md-sidemenu-button>
                    <md-sidemenu-button href="#">Menu 6</md-sidemenu-button>
                </md-sidemenu-group>
            </md-sidemenu>
        </md-content>

    </md-sidenav>
    <!-- ./Main Side Bar -->

    <!-- Main Content -->
    <md-content layout="column" flex class="md-padding">
        @yield('mainContent')
    </md-content>
    <!-- ./Main Content -->

    <md-sidenav class="md-sidenav-right md-whiteframe-z2" md-component-id="right">

        <md-toolbar class="md-theme-light">
            <h1 class="md-toolbar-tools">Sidenav Right</h1>
        </md-toolbar>

        <md-content ng-controller="RightCtrl" layout-padding="">
            <form>
                <md-input-container>
                    <label for="testInput">Test input</label>
                    <input type="text" id="testInput" ng-model="data" md-sidenav-focus="">
                </md-input-container>
            </form>
            <md-button ng-click="close()" class="md-primary">
                Close Sidenav Right
            </md-button>
        </md-content>

    </md-sidenav>
</section>
<!-- jQuery -->
<script src="themes/default/bower_components/jquery/dist/jquery.min.js"></script>
<script src="themes/default/bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js"></script>
<!-- Angular Material Dependencies -->
<script src="themes/default/bower_components/angular/angular.min.js"></script>
<script src="themes/default/bower_components/angular-animate/angular-animate.min.js"></script>
<script src="themes/default/bower_components/angular-aria/angular-aria.min.js"></script>
<script src="themes/default/bower_components/angular-material/angular-material.min.js"></script>
<script src="themes/default/bower_components/angular-material-icons/angular-material-icons.min.js"></script>
<script src="themes/default/bower_components/angular-material-sidemenu/dest/angular-material-sidemenu.js"></script>
<script src="themes/default/bower_components/ng-scrollbars/dist/scrollbars.min.js"></script>


<script>
    var app = angular.module('app', [
        'ngMaterial', 'ngAnimate', 'ngAria', 'ngMdIcons', 'ngMaterialSidemenu', 'ngScrollbars'
    ]);

    app.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red')
            .warnPalette('orange');
    });

    app.controller('AppCtrl', [
        '$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', '$window',
        function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $window) {

            $scope.toggleSidenav = function (menuId) {
                $mdSidenav(menuId).toggle();
            };

            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');
            $scope.lockLeft = false;

            var screenHeight = $window.innerHeight;

            function buildToggler(navID) {
                var debounceFn = $mdUtil.debounce(function () {
                    $mdSidenav(navID)
                        .toggle()
                        .then(function () {
                            $log.debug("toggle " + navID + " is done");
                        });
                }, 300);

                return debounceFn;
            }
            $scope.config = {
                autoHideScrollbar: false,
                theme: 'minimal-dark',
                advanced:{
                    updateOnContentResize: true
                },
                setHeight: screenHeight  - 64,
                scrollInertia: 0
            };
        }])
        .controller('LeftCtrl', [
            '$scope', '$timeout', '$mdSidenav', '$log',
            function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('left').close()
                    .then(function () {
                        $log.debug("close LEFT is done");
                    });

            };
        }])
        .controller('RightCtrl', [
            '$scope', '$timeout', '$mdSidenav', '$log',
            function ($scope, $timeout, $mdSidenav, $log) {
            $scope.close = function () {
                $mdSidenav('right').close()
                    .then(function () {
                        $log.debug("close RIGHT is done");
                    });
            };
        }]);

</script>
</body>
</html>