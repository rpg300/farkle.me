var appFarkle = angular.module('appFarkle', ['ngRoute']);

appFarkle.controller("myController", function($scope){
	$scope.bolSwitch = true;
	$scope.changeRoute = function(bolSwitch){
/*		switch(bolSwitch){
			case true:
					window.location.href = '#hey';
			break;
			case false:
					window.location.href = '#heyyyy';
			break;
		}*/
		/*window.location.href = '#' + bolSwitch;*/
		window.location.href = '#game';
			/*$scope.bolSwitch = !bolSwitch;*/
	}
});

appFarkle.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {    
    $routeProvider.when("/settings",
    {
		templateUrl: "angular/partials/settings.html",
		controller: "myController"
    })
    .when("/game",
    {
        templateUrl: "angular/partials/game.html",
        controller: "myController"
    })
    .when("/MainMenu",
    {
        templateUrl: "angular/partials/MainMenu.html",
        controller: "myController"
    })
    .otherwise(
    	{
    		redirectTo: '/MainMenu'
    	}
    );

     /*$locationProvider.html5Mode(true);*/

}])