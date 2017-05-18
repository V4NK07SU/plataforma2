    (function () {
    'use strict';

    angular
        .module('app')
        .service('AuthSrv', service)

    service.$inject = ['$rootScope', '$http', '$localStorage', '$state', '$stateParams', '$auth', '$timeout', 'ToastService'];

    function service($rootScope, $http, $localStorage, $state, $stateParams, $auth, $timeout, ToastService) {

        this.isRole = isRole;
        this.isAuthenticated = isAuthenticated;
        this.can = can;
        this.userLogin = userLogin;
        this.logout = logout;
        this.$rootScope = $rootScope;
        this.$http = $http;
        this.$auth = $auth;
        this.$state = $state;
        this.ToastService = ToastService;
        this.userPayload = $auth.getPayload();
        this.$timeout = $timeout;
        this.getAttribute = getAttribute;
        this.getUserPayload = getUserPayload;
        /**
         * Obtiene un atributo por indice del payload del token del usuario
         * @param {string} attribute El indice del atributo a retornar
         */
        function getAttribute(attribute) {
            if (this.userPayload) {
                var userAttributes = this.userPayload;
                return userAttributes[attribute];
            }

            return false;

        }

        function getUserPayload()
        {
            if (this.userPayload) {
                return this.userPayload;
            }
        }

        /**
         * Determina si un usuario esta autenticado en el sistema.
         */
        function isAuthenticated() {
            return this.$auth.isAuthenticated();
        }
        /**
         * Determina su un usuario cuenta con el rol necesario para realizar una acción.
         * @param {Array.<string>} roles Roles necesarios para realizar la acción.
         */
        function isRole(roles) {
            var authorize = false;
            var userRoles = this.userPayload.roles;
            if (!this.isAuthenticated()) {
                return false;
            }

            if (angular.isArray(roles)) {
                roles.forEach(function (role) {
                    console.log(userRoles.indexOf(role));
                    if (userRoles.indexOf(role) >= 0) {
                        authorize = true;
                    }
                });
            }
            if (userRoles.indexOf(roles) >= 0) {
                authorize = true;
            }

            return authorize;
        }
        /**
         * Determina su un usuario cuenta con los permisos suficientes para ejecutar una acción en el sistema.
         * @param {Array.<string>} permissions Permisos de usuario necesarios para realizar la acción.
         */
        function can(permissions) {
            if (!this.isAuthenticated() || !this.userPayload.permissions) {
                return false;
            }
            var userPermissions = this.userPayload.permissions;
            var authorize = false;            
            if (angular.isArray(permissions)) {
                permissions.forEach(function (permission) {
                    if (userPermissions.indexOf(permission) >= 0) {
                        authorize = true;
                    }
                });
            }
            if (userPermissions.indexOf(permissions) >= 0) {
                authorize = true;
            }

            return authorize;
        }
        /**
         * Saca a un usuario del sistema.
         */
        function logout() {
            this.$http.get(SITE_URL + '/api/users/logout')
                .success(function (response) {
                    ToastService.success('Salió del sistema con éxito!');
                    $auth.logout();
                    $state.go('page/signin');
                })
                .error(function (response) {
                    ToastService.success('No pudo salir del sistema!');
                });


        }
        /**
         * Ingresa a un usuario al sistema
         * @param {Object} credentials Objeto con email y password. {email: 'un@email.com', password: 'unaclave'}
         */
        function userLogin(credentials) {
            this.$auth.login(credentials)
                .then((response) => {
                    this.$auth.setToken(response.data);
                    this.$rootScope.auth.isAuthenticated = this.$auth.isAuthenticated();
                    this.userPayload = this.$auth.getPayload();
                    this.ToastService.success('Ingresó al sistema con éxito!');
                    this.$state.go('dashboard');
                })
                .catch(function (response) {
                    var counter = 0;
                    angular.forEach(response.data.errors, function (v, i) {
                        //angular.element('#permission-' + i + '-container').addClass('md-input-invalid');
                        //angular.element('[name="' + i + '"]').focus();
                        if (counter > 0) {
                            $timeout(function () {
                                ToastService.error(v[0]);
                            }, 5000);
                        } else {
                            ToastService.error(v[0]);
                        }
                        counter++;
                    });
                });
        }
    }
})();