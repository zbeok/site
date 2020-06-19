angular.module('mainApp', 
				['ngRoute', 'appRoutes', 
				 'MainCtrl','HomeCtrl', 'MissionCtrl','ProductsCtrl','CareersCtrl', 'ContactCtrl']);
angular.module('artApp', 
				['ngRoute', 'artRoutes', 
				 'ArtCtrl']);
angular.module('csApp', 
				['ngRoute', 'csRoutes', 
				 'CSCtrl']);