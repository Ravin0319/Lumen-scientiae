	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			.when('/join', {
				templateUrl : 'pages/join.html',
				controller  : 'joinController'
			})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})

			.when('/goodies', {
				templateUrl : 'pages/goodies.html',
				controller  : 'goodiesController'
			})
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		//$scope.message = 'Home Page - Logo comes here!';
	});

	scotchApp.controller('aboutController', function($scope) {
		//$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('joinController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('contactController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});

	scotchApp.controller('goodiesController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});