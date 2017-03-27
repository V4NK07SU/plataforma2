class AppHeaderController{
    constructor($sce, ToastService, DialogService){
        'ngInject';

        this.$sce = $sce;
        this.ToastService = ToastService;
        this.DialogService = DialogService;
        this.confirmMessage = '';
    }

    $onInit(){
        //defer iframe loading
        let url = 'https://ghbtns.com/github-btn.html?user=jadjoubran&repo=laravel5-angular-material-starter&type=star&count=true&size=large';
        this.githubWidget = this.$sce.trustAsResourceUrl(url);
        this.sampleAlert();
    }

    sampleAlert() {
        this.DialogService.alert('This is an alert title', 'You can specify some description text in here.');
    }

    sampleConfirm() {
        this.DialogService.confirm('This is a confirm title', 'Are you sure you want to do delete this file?')
            .then(() => {
                this.confirmMessage = 'Success callback';
                this.ToastService.show(this.confirmMessage);
            }, () => {
                this.confirmMessage = 'Cancel callback';
                this.ToastService.error(this.confirmMessage);
            })
    }

    customDialog() {
        this.DialogService.fromTemplate('login');
    }
}

export const AppHeaderComponent = {
    templateUrl: 'http://umbrella-base.dev/views/app.components.app-header.app-header-component',
    controller: AppHeaderController,
    controllerAs: 'vm',
    bindings: {}
}
