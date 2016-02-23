angular.module('foodZen.recipes', [])
.controller('RecipeController', function($scope, Recipes, Ingredients){
  $scope.data = {};

  var initializeRecipes = function(){
    Recipes.updateRecipes(Ingredients.ingredients)
    .then(function (recipes) {
      $scope.data.recipes = recipes;
      console.log($scope.data.recipes);
    });
  };

  initializeRecipes();
});