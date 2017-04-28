(function() {
	'use strict';
	angular.module('app.modules.blog.users')
	.config(['$stateProvider','$urlRouterProvider','$sceDelegateProvider',
		function ($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
			$sceDelegateProvider.resourceUrlWhitelist(['**']);
			$stateProvider.state('blog/user', {
				url: '/blog/user',
				templateUrl: THEME_URL + 'app/modules/blog/users/views/index.html',
				controller: 'BlogUserIndexCtrl',
				resolve: {
					BlogUserSrv: 'BlogUserSrv',
					BlogUsers: function (BlogUserSrv) {
						return BlogUserSrv.get().$promise;
					}
					 
				}
			});
		
		}]);
}());