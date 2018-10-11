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
  // $routeProvider.when('/pacientes', {templateUrl: 'partials/pacientes/index.html', controller: 'PacientesController'});
  
  // $routeProvider.when('/consultas', {templateUrl: 'partials/schedule/index.html', controller: 'KitchenSinkCtrl', access: {restricted: true},
  //                       resolve: {translations2: function(AuthService){return AuthService.isLogged();}}});

  $routeProvider.otherwise({redirectTo: '/login', access: {restricted: true}});

}])
// .run(['$rootScope', '$location', '$timeout', '$route', '$routeParams', '$cookies', '$cookieStore', 'AuthService', '$http', function($rootScope, $location, $timeout, $route, $routeParams, $cookies, $cookieStore, AuthService, $http) {
//   $rootScope.$on('$routeChangeStart', function(event, next, current) {
//     if (document.getElementsByClassName(".alert")) {
//       $( ".alert" ).remove();
//     }

//     if (!document.getElementById( 'menu push' )) {
//       classie.remove(document.getElementById( 'footer' ), 'whole');
//       classie.remove(document.getElementById( 'main-page' ), 'whole');
//     }

//   $rootScope.$on('ConnectionError', function(event, response) {
//     if (response.status == 1001){
//       var opts = {
//         templateUrl: 'partials/modal/sessionExpiredModal.html',
//         controller: 'MainController',
//         keyboard: false
//       };
//       $rootScope.showAlertModal(response.data, response.status, opts);
//       $timeout(function() {
//         $location.path('/');
//       }, 500);
//     }
    
//     else {
//       var error = '';
//       if (response.data.err)
//         error = response.data.err;
//       if (response.data.error_message)
//         error = response.data.error_message;

//       $rootScope.showAlert(error, "Erro " + response.status, 'danger');
//     }
//   });


//     // var configurations = $http.get('/configuracoes');

//     // configurations.then(function(response) {
//     //   $rootScope.configurations = response.data.configurations;

//     //   if(response.data.admin == false) {
//     //     for(var key in $cookies) {
//     //       if($cookies.hasOwnProperty(key))
//     //         $cookieStore.remove(key);
//     //     }
//     //   }

//     //   for(var i = 0 ; i < $rootScope.configurations.length ; i++) {
//     //     if($rootScope.configurations[i].chave == 'enable_rep_access') {
//     //       $rootScope.rep_configuration = $rootScope.configurations[i];
//     //     }
//     //   }

//     //   $rootScope.current_user = {};

//     //   if(!$cookieStore.get('user') || $cookieStore.get('user').admin == false) {
//     //     if(next && next.templateUrl == 'partials/my_account/confirmation.html')
//     //       $location.path('/minha_conta/confirmacao/' + next.params.code);
//     //     else if(next && next.templateUrl == 'partials/login/index.html')
//     //       $location.path('/login');
//     //     else if(next && next.templateUrl == 'partials/my_account/index.html')
//     //       $location.path('/minha_conta');
//     //     else if(next && next.templateUrl == 'partials/my_account/edit.html')
//     //       $location.path('/minha_conta/' + next.params.id + "/editar");
//     //     else if(next && next.templateUrl == 'partials/my_account/recover_password.html')
//     //       $location.path('/minha_conta/recuperar_senha');
//     //     else if(next && next.templateUrl == 'partials/my_account/update_password.html')
//     //       $location.path('/minha_conta/' + next.params.id + "/editar/redefinir_senha");
//     //     else if(next && next.templateUrl == 'partials/clock_in/index.html')
//     //       $location.path('/bater_ponto');
//     //     else if(next && next.redirectTo == '/') {
//     //       window.location.replace('#/bater_ponto');
//     //     }
//     //     else
//     //       $location.path('/bater_ponto');
//     //   }
//     //   else {
//     //     if($cookieStore.get('user').admin) {
//     //       $rootScope.current_user.isAdmin = true;
//     //     }
//     //   }
//     // });
//   });
// }]);
