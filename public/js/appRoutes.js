angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/about', {
			templateUrl: 'views/mission.html',
			controller: 'MissionController'
		})

		.when('/art', {
			templateUrl: 'views/products.html',
			controller: 'ProductsController'	
		})

		.when('/cs', {
			templateUrl: 'views/careers.html',
			controller: 'CareersController'	
		})
  
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		})
  ;

	$locationProvider.html5Mode(true);

}]);