myApp.controller('MariACController', ['$scope', '$rootScope', '$route', '$http', '$uibModal', '$timeout', '$window', '$location', '$routeParams',
  function($scope, $rootScope, $route, $http, $uibModal, $timeout, $window, $location, $routeParams) {
    $scope.temperature = 18;
    $scope.hot = true;
    $scope.cool = false;
    $scope.temperatureNow;
    $scope.isOn;
    $scope.auto;
    $scope.minTemp = 21;
    $scope.maxTemp = 23;
    $scope.mode;



    $scope.getSettingsTemp = function() {
      $http.get('/marisettings').success(function (data) {
        $scope.minTemp = data.minTemp;
        $scope.maxTemp = data.maxTemp;

        $scope.slider = {
          minValue: $scope.minTemp,
          maxValue: $scope.maxTemp,
          options: {
            ceil: 32,
            floor: 18,
            showSelectionBar: true,
            selectionBarGradient: {
              from: 'white',
              to: '#FC0'
            },

            onChange: function() {
               $scope.minTemp = $scope.slider.minValue;
               $scope.maxTemp = $scope.slider.maxValue;
            }
          }
        };
      });
    };

    $scope.setSettingsTemp = function() {
      $http({
        url: '/marisettings',
        method: "POST",
        data: {command: {"minTemp":$scope.slider.minValue, "maxTemp":$scope.slider.maxValue}}
      }).success(function(data) {
        $location.path('/mariac') 
      })
    };

    $scope.getTemp = function () {

      (function tick() {
          $http.get('/tempnow').success(function (data) {
              $scope.temperatureNow = data.currentTemp;
              $scope.isOn = data.isOn;
              $scope.auto = data.auto;
              $scope.temperature = data.temperature;
              if (data.mode == "hot") {
                console.log(data.mode)
                $scope.hot = true;
                $scope.cool = false;
              }
              else {
                $scope.hot = false;
                $scope.cool = true;
              }
              $timeout(tick, 60000);
          });
      })();
    };

    $scope.autoToggle = function() {
      $http.get('/autotoggle').success(function (data) {
        $scope.auto = data;
      });
    };
    
    $scope.turnOffAC = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'REMOTE_MARI'", "command":"'KEY_MARION'", "temperature":$scope.temperature}}
      }).success(function(data) {
        $scope.isOn = !$scope.isOn; 
      })
    };
    
    $scope.hotOn = function() {
    	$scope.hot = true
    	$scope.cool = false
      
      commandac = "KEY_MARIHO";
           
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'REMOTE_MARI'", "command":commandac, "temperature":$scope.temperature, "mode":"hot"}}
      }).success(function(data) {
      })
      
    };
    
    $scope.coolOn = function() {
    	$scope.hot = false;
    	$scope.cool = true;
      
      commandac = "KEY_MARICO";
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'REMOTE_MARI'", "command":commandac, "temperature":$scope.temperature, "mode":"cold"}}
      }).success(function(data) {
      })
    };

    $scope.increaseTemp = function() {
      if ($scope.temperature < 31) {
        $scope.temperature++;
      }
      
            commandac = "KEY_";

      if ($scope.hot) {
      	commandac = commandac + "MARIHO";
        mode = "hot"
      }
      else {
      	commandac = commandac + "MARICO";
        mode = "cold"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'REMOTE_MARI'", "command":commandac, "temperature":$scope.temperature, "mode":mode}}
      }).success(function(data) {
      })
    };

    $scope.decreaseTemp = function() {
      if ($scope.temperature > 18) {
        $scope.temperature--;
      }
      
            commandac = "KEY_";

      if ($scope.hot) {
      	commandac = commandac + "MARIHO";
        mode = "hot"
      }
      else {
      	commandac = commandac + "MARICO";
        mode = "cold"
      }
      
      commandac = commandac + $scope.temperature;
      
      console.log(commandac);
      
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'REMOTE_MARI'", "command":commandac, "temperature":$scope.temperature, "mode":mode}}
      }).success(function(data) {
      })
    };

}]);