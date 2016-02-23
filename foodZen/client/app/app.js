angular.module('foodZen', ['foodZen.home', 'foodZen.auth' ,'foodZen.recipes','foodZen.services', 'foodZen.auth-services', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'HomeController'
  })
  .when('/recipes', {
    templateUrl: 'app/recipes/recipes.html',
    controller: 'RecipeController'
  })
  .when('/', {
    templateUrl: 'app/auth/signin.html',
    controller: 'AuthController'
  })
  .when('/signup', {
    templateUrl: 'app/auth/signup.html',
    controller: 'AuthController'
  });
});