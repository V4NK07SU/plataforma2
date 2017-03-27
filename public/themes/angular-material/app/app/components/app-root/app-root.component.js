class AppRootController {
    constructor($mdToast, $mdSidenav, $mdUtil, $log, ToastService, $window, $rootScope, $stateParams) {
        'ngInject';

        this.$window = $window;
        this.$mdToast = $mdToast;
        this.$mdSidenav = $mdSidenav;
        this.$mdUtil = $mdUtil;
        this.$log = $log;
        this.$rootScope = $rootScope;
        this.$stateParams = $stateParams;
        this.updateTitle = this.updateTitle();
        this.ToastService = ToastService;
        this.toggleLeft = this.toggleLeft();
        this.toggleRight = this.toggleRight();

        var screenHeight = $window.innerHeight;

        this.config = {
            autoHideScrollbar: false,
            theme: 'minimal-dark',
            advanced:{
                updateOnContentResize: true
            },
            setHeight: screenHeight  - 64,
            scrollInertia: 0
        };
    }

    $onInit() {
        this.registerServiceWorker();
        this.checkForNewerVersions();
        this.$rootScope.$on('$stateChangeSuccess', this.updateTitle);
    }


    // Update title using rootscope
    updateTitle (){
        this.$rootScope.title = this.$stateParams.title;
    }

    toggleLeft() {
        this.$mdSidenav('left').toggle();
    }

    toggleRight() {
        this.$mdSidenav('right').toggle();
    }

    registerServiceWorker() {
        if (!('serviceWorker' in navigator)) {
            return false;
        }
        navigator.serviceWorker.register('/themes/angular-material/assets/service-worker.js')
            .then(this.handleRegistration.bind(this));
    }

    handleRegistration(registration) {
        registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                    if (!navigator.serviceWorker.controller) {
                        this.ToastService.show('App is ready for offline use.');
                    }
                }
            }
        }
    }

    checkForNewerVersions() {
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
            navigator.serviceWorker.controller.onstatechange = (e) => {

                if (e.target.state === 'redundant') {
                    let toast = this.$mdToast.simple()
                        .content('A newer version of this site is available.')
                        .position(this.ToastService.position)
                        .action('Refresh')
                        .hideDelay(this.ToastService.delay);

                    this.$mdToast.show(toast).then(() => {
                        this.$window.location.reload();
                    });
                }
            };
        }
    }
}

export const AppRootComponent = {
    templateUrl: 'http://umbrella-base.dev/views/app.components.app-root.app-root-component',
    controller: AppRootController,
    controllerAs: 'vm',
    bindings: {}
}
