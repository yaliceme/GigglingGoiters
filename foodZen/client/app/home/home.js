angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http, $location, Ingredients, Recipes){
  $scope.ingredients = [];

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      console.log('enter button!');
    }
  };

  $scope.addIngredient = function() {
    console.log('ingredient', $scope.ingredient);
    $scope.ingredients.push($scope.ingredient);
    Ingredients.postIngredient($scope.ingredient);
    $scope.ingredient = '';
  };

  $scope.goRecipes = function() {
    $location.url('/recipes');
  }
  console.log('home controller so running');
});