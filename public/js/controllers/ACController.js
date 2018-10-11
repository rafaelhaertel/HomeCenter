myApp.controller('ACController', ['$scope', '$rootScope', '$route', '$http', '$uibModal', '$timeout', '$window', '$location', '$routeParams',
  function($scope, $rootScope, $route, $http, $uibModal, $timeout, $window, $location, $routeParams) {
    $scope.temperature = 16;
    $scope.hot = true;
    $scope.cool = false;
    $scope.fan = 0;
    $scope.fanstate = ["LO", "MED", "HI", "AUTO"];
    $scope.swing = true;
    
    $scope.turnOffAC = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":"'KEY_ACOFF'"}}
      }).success(function(data) {
      })
    };
    
    $scope.fanOn = function() {
      $scope.fan++;
      if ($scope.fan > 3) {
      	$scope.fan = 0;
      } 
      
      commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
    };
    
    $scope.swingOn = function() {
    	if ($scope.swing) {
      	$scope.swing = false;
      }
      else if (!$scope.swing) {
      	$scope.swing = true;
      }
      
            commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
      
      
    };
    
    $scope.hotOn = function() {
    	$scope.hot = true
    	$scope.cool = false
      
            commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
      
    };
    
    $scope.coolOn = function() {
    	$scope.hot = false;
    	$scope.cool = true;
      
            commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
    };

    $scope.increaseTemp = function() {
      if ($scope.temperature < 31) {
        $scope.temperature++;
      }
      
            commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
    };

    $scope.decreaseTemp = function() {
      if ($scope.temperature > 16) {
        $scope.temperature--;
      }
      
            commandac = "KEY_";
      if ($scope.cool) {
      	commandac = commandac + $scope.fanstate[$scope.fan];
   	}
      if ($scope.hot) {
      	commandac = commandac + "AUHE";
      }
      else {
      	commandac = commandac + "CO";
      }
      if ($scope.swing) {
      	commandac = commandac + "SW"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'MY_REMOTE'", "command":commandac}}
      }).success(function(data) {
      })
    };

}]);