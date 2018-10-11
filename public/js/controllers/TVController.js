myApp.controller('TVController', ['$scope', '$rootScope', '$route', '$http', '$uibModal', '$timeout', '$window', '$location', '$routeParams',
  function($scope, $rootScope, $route, $http, $uibModal, $timeout, $window, $location, $routeParams) {

    $scope.turnOnTV = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_POWER'"}}
      }).success(function(data) {
      })
    };
    $scope.TvUp = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_UP'"}}
      }).success(function(data) {
      })
    };
    $scope.TvMusic = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_MUSIC'"}}
      }).success(function(data) {
      })
    };
    $scope.TvDown = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_DOWN'"}}
      }).success(function(data) {
      })
    };
    $scope.TvLeft = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_LEFT'"}}
      }).success(function(data) {
      })
    };
    $scope.TvRight = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_RIGHT'"}}
      }).success(function(data) {
      })
    };
    $scope.TvOk = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_OK'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv1 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_1'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv2 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_2'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv3 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_3'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv4 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_4'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv5 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_5'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv6 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_6'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv7 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_7'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv8 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_8'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv9 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_9'"}}
      }).success(function(data) {
      })
    };
    $scope.Tv0 = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_0'"}}
      }).success(function(data) {
      })
    };
    $scope.TvMenu = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_MENU'"}}
      }).success(function(data) {
      })
    };
    $scope.TvVoltar = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_BACK'"}}
      }).success(function(data) {
      })
    };
    $scope.TvVolumeUp = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_VOLUMEUP'"}}
      }).success(function(data) {
      })
    };
    $scope.TvVolumeDown = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_VOLUMEDOWN'"}}
      }).success(function(data) {
      })
    };
    $scope.TvChannelUp = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_CHANNELUP'"}}
      }).success(function(data) {
      })
    };
    $scope.TvChannelDown = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_CHANNELDOWN'"}}
      }).success(function(data) {
      })
    };
    $scope.TvAudio = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_AUDIO'"}}
      }).success(function(data) {
      })
    };
    $scope.TvSubtitle = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_SUBTITLE'"}}
      }).success(function(data) {
      })
    };
    $scope.TvRadio = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_RADIO'"}}
      }).success(function(data) {
      })
    };
    $scope.TvMute = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_MUTE'"}}
      }).success(function(data) {
      })
    };
    $scope.TvMail = function() {
      $http({
        url: '/command',
        method: "POST",
        data: {command: {"remote":"'controlenet'", "command":"'KEY_MAIL'"}}
      }).success(function(data) {
      })
    };

}]);