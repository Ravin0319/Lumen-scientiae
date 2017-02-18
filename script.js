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
			.when('/main', {
				templateUrl : 'pages/main.html',
				controller  : 'main2Controller'
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

	scotchApp.controller('main2Controller', function($scope) {
		
		$(".mainwrap").addClass("animated slideInUp");
		//$scope.message = 'Look! I am an about page.';
	});
	scotchApp.controller('aboutController', function($scope) {
		$(".mainwrap").addClass("animated slideInUp");
		//$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('joinController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
		$(".mainwrap").addClass("animated slideInUp");
	});

	scotchApp.controller('contactController', function($scope) {
		//$scope.message = 'Contact us! JK. This is just a demo.';
		$(".mainwrap").addClass("animated slideInUp");
	});

	scotchApp.controller('goodiesController', function($scope) {
		$(".mainwrap").addClass("animated slideInUp");
		//$scope.message = 'Contact us! JK. This is just a demo.';
	});


function enterLS() { 
	document.getElementById("visit").className = "animated slideOutUp";

	setTimeout(function(){
		$(".VisitBgImg").addClass("animated slideOutDown");

}, 1000);
}

$(document).ready(function() { 

setTimeout(function(){
	 	$("#visitButton").addClass("animated jello");
	 }, 1000);  

});










