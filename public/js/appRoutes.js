angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		// .when('/about', {
		// 	templateUrl: 'views/mission.html',
		// 	controller: 'MissionController'
		// })

		// .when('/art', {
		// 	templateUrl: 'views/products.html',
		// 	controller: 'ProductsController'	
		// })

		// .when('/cs', {
		// 	templateUrl: 'views/careers.html',
		// 	controller: 'CareersController'	
		// })
  
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'	
		})
  ;

	$locationProvider.html5Mode(true);

}]);
angular.module('artRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/art', {
			templateUrl: 'views/art/art.html',
			controller: 'ArtController'
		})
		.when('/art/animations', {
			templateUrl: 'views/art/animations.html',
			controller: 'ArtController'
		})
		.when('/art/illustrations', {
			templateUrl: 'views/art/illustrations.html',
			controller: 'ArtController'
		})
		.when('/art/games', {
			templateUrl: 'views/art/games.html',
			controller: 'ArtController'
		})
		.when('/art/design', {
			templateUrl: 'views/art/design.html',
			controller: 'ArtController'
		})
  ;

	$locationProvider.html5Mode(true);

}]);
angular.module('csRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/cs', {
			templateUrl: 'views/cs/cs.html',
			controller: 'CSController'
		})
		.when('/cs/games', {
			templateUrl: 'views/cs/games.html',
			controller: 'CSController'
		})
		.when('/cs/experiments', {
			templateUrl: 'views/cs/experiments.html',
			controller: 'CSController'
		})
  ;

	$locationProvider.html5Mode(true);

}]);