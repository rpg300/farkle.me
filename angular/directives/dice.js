appFarkle.directive('dice', ['$compile', '$timeout', function ($compile, $timeout) {
return  {
		template: '<div class="dice {{DiceValue}}"></div>',
      restrict: 'E',
      replace: false,
      controller:'diceController'
     /* scope: {
        interval: '=interval',
        startTimeAttr: '=startTime',
        endTimeAttr: '=endTime',
        countdownattr: '=countdown',
        finishCallback: '&finishCallback',
        autoStart: '&autoStart',
        maxTimeUnit: '='
      },*/

}
}])
.controller('diceController', ['$interval', '$scope', '$element', '$attrs', '$timeout', function ($interval, $scope, $element, $attrs, $timeout) {

	$scope.ChangeValue = false;
	$scope.DiceValue = "dice3";
$scope.running=false;
$scope.duplicate=false;
	
/*$scope.$watch('running', function() {
	var i = 0;
	while(i < 5) {
	$timeout(function(){
	}, 10000); 	
		$scope.DiceValue = "dice" + $scope.getRandomNumber()
	i++;      
	}
});*/
$interval(setValue, 1000);
function setValue(){
	if($scope.duplicate){
	$scope.DiceValue = "dice" + $scope.getRandomNumber()
	console.log('scope is ' + $scope.DiceValue);
}
$scope.duplicate=!$scope.duplicate;
}
$scope.getRandomNumber = function(){
  return Math.floor((Math.random()*6)+1);
}

}])
;