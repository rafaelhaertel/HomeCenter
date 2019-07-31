'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngAnimate', 'myApp.filters', 'rzModule', 'myApp.services', 'myApp.directives', 'ui.bootstrap']);
myApp
.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push('errorInterceptor');
  var spinnerFunction = function (data, headersGetter) {
    $('#loading').css({'width':'85%'});
    $('#loading').css({'opacity':1});
    return data;
  };
  $httpProvider.defaults.transformRequest.push(spinnerFunction);
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider.when('/login', {templateUrl: 'partials/login/index.html', controller: 'ACController', access: {restricted: false}});
  $routeProvider.when('/tv', {templateUrl: 'partials/login/tv.html', controller: 'TVController', access: {restricted: false}})
  $routeProvider.when('/indexac', {templateUrl: 'partials/login/indexac.html', controller: 'ACController', access: {restricted: false}})
  $routeProvider.when('/ac', {templateUrl: 'partials/login/ac.html', controller: 'ACController', access: {restricted: false}})
  $routeProvider.when('/mariac', {templateUrl: 'partials/login/acmari.html', controller: 'MariACController', access: {restricted: false}})
  $routeProvider.when('/mariacsettings', {templateUrl: 'partials/login/acmarisettings.html', controller: 'MariACController', access: {restricted: false}})
  $routeProvider.when('/light', {templateUrl: 'partials/login/light.html', controller: 'LightController', access: {restricted: false}})
  $routeProvider.otherwise({redirectTo: '/login', access: {restricted: true}});

}])

