angular.module('foodZen.auth', [])
.controller('AuthController', function($scope, $window, $location, Auth){
  $scope.user = {};
  $scope.error = false;
  $scope.passwordError = false;
  $scope.emailError = false;
  $scope.errorMessage = '';

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.foodZen', token);
        $location.path('/home');
      })
      .catch(function (error) {
        if( error.data.error === 'no user') {
          errorHandler('Please meditate further on your email. It is not known.', 'emailError');
        } else if ( error.data.error === 'wrong password') {
          errorHandler('Please meditate further on your password. It is not known.', 'passwordError');
        }
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.foodZen', token);
        $location.path('/home');
      })
      .catch(function (error) {
        errorHandler('That email is taken. This too shall pass.', 'emailError');
        console.error(error);
      });
  };

  $scope.signout = function () {
    Auth.signout();
  };

  var errorHandler = function(msg, input) {
    $scope.errorMessage = msg;
    $scope[input] = true;
    $scope.error = true;
  };

});