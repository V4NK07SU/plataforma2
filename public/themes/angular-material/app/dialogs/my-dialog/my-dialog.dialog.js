export class MyDialogController{
    constructor(DialogService, ToastService){
        'ngInject';

        this.DialogService = DialogService;
        this.ToastService = ToastService;
    }

    save(){
        this.ToastService.show('Guardado');
        this.DialogService.hide();
    }

    cancel(){
        this.DialogService.cancel();
    }
}

