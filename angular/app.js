var appFarkle = angular.module('appFarkle', ['ngRoute']);

appFarkle.controller("myController", function($scope){
	$scope.bolSwitch = true;
	$scope.changeRoute = function(bolSwitch){
		window.location.href = '#' + bolSwitch;
	}
});

appFarkle.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {    
    $routeProvider.when("/settings",
    {
		templateUrl: "angular/partials/settings.html",
		controller: "myController"
    })
        .when("/heyyyy",
    {
        templateUrl: "angular/partials/game.html",
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
    });
/*.otherwise(
        {
            redirectTo: '/MainMenu'
        }
    );*/

     /*$locationProvider.html5Mode(true);*/

}])