'use strict';

angular.module('myApp.services', [])
.factory('errorInterceptor', ['$q', '$rootScope', '$location',
    function ($q, $rootScope, $location) {
        return {
            request: function (config) {
                if ((config.method == "POST") && (config.url == "consultas/")) {
                    $(".holiday_form").html("<div class='text-center'><i class='fa fa-spinner fa-spin' style='font-size: 24px; margin: 4% auto auto;'></i><h4>Criando Consulta</h4><h5>Por Favor Aguarde...</h5></div>")
                }
                return config || $q.when(config);
            },
            requestError: function(request){
                $('#loading').css({'opacity':0});
                return $q.reject(request);
            },
            response: function (response) {
                $('#loading').css({'opacity':0});
                return response || $q.when(response);
            },
            responseError: function (response) {
                if (response && response.status === 401) {
                  $('#loading').css({'opacity':0});
                  $rootScope.$broadcast('ConnectionError', response);
                  return response || $q.when(response);
                }
                if (response && response.status === 440) {
                  $('#loading').css({'opacity':0});
                  $rootScope.$broadcast('ConnectionError', response);
                  return response || $q.when(response);
                }
                if (response && response.status >= 500) {
                  $('#loading').css({'opacity':0});
                  return response || $q.when(response);
                }
                return $q.reject(response);
            }
        };
}])
.factory('AuthService',
  ['$q', '$timeout', '$location', '$http',
  function ($q, $timeout, $location, $http) {

    // create user variable
    var user = null;

    // return available functions for use in the controllers
    return ({
      isLogged: isLogged,
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });

    function isLogged() {
      var deferred = $q.defer();
      //assuming auth.isLoggedIn returns a promise
      var loginPromise = getUserStatus();

      
      loginPromise.success(function (data) {
        if(data.status){
          deferred.resolve(data);
        } else {
          deferred.reject('Not logged in');
          $location.path('/login');
        }
      })
      // handle error
      .error(function (data) {
        deferred.reject('Not logged in');
      });
      return deferred.promise;
    }

    function isLoggedIn() {
      if(user) {
        return true;
      } else {
        return false;
      }
    }

    function getUserStatus() {
      return $http.get('/user/status')
      // handle success
      .success(function (data) {
        if(data.status){
          user = true;
        } 
      })
      // handle error
      .error(function (data) {
        user = false;
      });
    }

    function login(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/user/login',
        {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function logout() {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a get request to the server
      $http.get('/user/logout')
        // handle success
        .success(function (data) {
          user = false;
          deferred.resolve();
        })
        // handle error
        .error(function (data) {
          user = false;
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

    function register(username, password) {

      // create a new instance of deferred
      var deferred = $q.defer();

      // send a post request to the server
      $http.post('/user/register',
        {username: username, password: password})
        // handle success
        .success(function (data, status) {
          if(status === 200 && data.status){
            deferred.resolve(data);
          } else {
            deferred.reject(data);
          }
        })
        // handle error
        .error(function (data) {
          deferred.reject();
        });

      // return promise object
      return deferred.promise;

    }

}]);