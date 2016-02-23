angular.module('foodZen.auth-services', [])
.factory('Auth', ['$http', function($http){

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
  return {
    signin: signin,
    signup: signup
  };
}]);