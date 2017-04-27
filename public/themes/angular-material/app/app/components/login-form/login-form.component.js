class LoginFormController {
	constructor($auth, $state, ToastService) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
		this.$state = $state;
	}

    $onInit(){
        this.email = '';
        this.password = '';
    }

	login() {
		let user = {
			email: this.email,
			password: this.password
		};

		this.$auth.login(user)
			.then((response) => {
				this.$auth.setToken(response.data);
				this.ToastService.show('Logged in successfully.');
				this.$state.go('app.landing');
			})
			.catch(this.failedLogin.bind(this));
	}

	failedLogin(response) {
		if (response.status === 422) {
			for (let error in response.data.errors) {
				return this.ToastService.error(response.data.errors[error][0]);
			}
		}
		this.ToastService.error(response.statusText);
	}
}

export const LoginFormComponent = {
	templateUrl: 'views/app.components.login-form.login-form-component',
	controller: LoginFormController,
	controllerAs: 'vm',
	bindings: {}
}
