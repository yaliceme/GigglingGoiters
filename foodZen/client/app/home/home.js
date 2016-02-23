angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http, $location, Ingredients, Recipes){
  $scope.data = {};

  var initializeIngredients = function(){
      $scope.data.ingredients = Ingredients.ingredients;
  };

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      console.log('enter button!');
    }
  };

  $scope.addIngredient = function() {
    console.log('ingredient', $scope.ingredient);
    Ingredients.postIngredient($scope.ingredient);
    $scope.ingredient = '';
  };

  $scope.goRecipes = function() {
    $location.url('/recipes');
  }
  console.log('home controller so running');
  initializeIngredients();
});