angular.module('foodZen', ['foodZen.home', 'ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'app/home/home.html',
    controller: 'HomeController'
  })
  .when('/recipes', {
    templateUrl: 'app/recipes/recipes.html',
    controller: 'RecipeController'
  });
});