angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http, $location, Ingredients, Auth, Recipes){
  $scope.data = {};

  var initializeIngredients = function(){
      $scope.data.ingredients = Ingredients.ingredients;
  };

  $scope.ingredients = [];

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

  $scope.removeIngredient = function(ingredient) {
    //need to get this functionally to work with the full database
    console.log("removing ", ingredient);
    Ingredients.deleteIngredient(ingredient);
    $scope.data.ingredients.splice($scope.data.ingredients.indexOf(ingredient), 1);
  }

  $scope.goRecipes = function() {
    $location.url('/recipes');
  };

  initializeIngredients();

  $scope.signout = function () {
    Auth.signout();
  };
});