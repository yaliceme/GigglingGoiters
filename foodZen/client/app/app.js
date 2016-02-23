angular.module('foodZen', [
  'foodZen.services',
  'foodZen.home',
  'foodZen.recipes',
  'foodZen.landing',
  'ngRoute'
  ])
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
    templateUrl: 'app/home/home.html',
    controller: 'HomeController'
  })
  .when('/landing', {
    templateUrl: 'app/landing/landing.html',
    controller: 'LandingController'
  });
});