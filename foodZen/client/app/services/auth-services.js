angular.module('foodZen.auth-services', [])
.factory('Auth', function($http, $window, $location){

  var signin = function(user){
    return $http({
      method: 'POST',
      url: '/api/users/signin/',
      data: user
    }).then(function( resp ) {
      return resp.data.token;
    });
  };

  var signup = function(user){
    return $http({
      method: 'POST',
      url: '/api/users/signup/',
      data: user
    }).then(function ( resp ) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.foodZen');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.foodZen');
    $location.path('/signin');
    console.log("HERE")
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});