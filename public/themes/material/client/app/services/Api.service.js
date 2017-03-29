(function() {
    'use strict';
    angular.module('app')
        .service('ApiService', ['Restangular', '$window', ApiService]);
    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/x.laravel.v1+json',
        'Access-Control-Allow-Origin': '*'
    };

    function ApiService(Restangular, $window) {

        return Restangular.withConfig(function(RestangularConfigurer) {
            RestangularConfigurer
                .setBaseUrl(SITE_URL + '/api/')
                .setDefaultHeaders(headers)
                .setErrorInterceptor(function(response) {
                    if (response.status === 422 || response.status === 401) {
                        for (var error in response.data.errors) {
                            //return ToastService.error(response.data.errors[error][0]);
                            alert(response.data.errors[error][0]);
                        }
                    }
                    if (response.status === 500) {
                        //return ToastService.error(response.statusText)
                        console.log(response.statusText);
                    }
                })
                .addFullRequestInterceptor(function(element, operation, what, url, headers) {
                    var token = $window.localStorage.satellizer_token;
                    if (token) {
                        headers.Authorization = 'Bearer ' + token;
                    }
                });
        });

    }
})();