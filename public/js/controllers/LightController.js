myApp.controller('LightController', ['$scope', '$rootScope', '$route', '$http', '$uibModal', '$timeout', '$window', '$location', '$routeParams',
  function($scope, $rootScope, $route, $http, $uibModal, $timeout, $window, $location, $routeParams) {

    $scope.turnOnLight1 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=0_0',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOffLight1 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=0_1',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOnLight2 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=1_0',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOffLight2 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=1_1',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOnLight3 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=2_0',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOffLight3 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=2_1',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOnLight4 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=3_0',
        method: "GET"
      }).success(function(data) {
      })
    };
    $scope.turnOffLight4 = function() {
      $http({
        url: 'http://192.168.1.175/chave?f=3_1',
        method: "GET"
      }).success(function(data) {
      })
    };

}]);