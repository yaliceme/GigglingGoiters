angular.module('foodZen.recipes', [])
.controller('RecipeController', function($scope, Recipes){
  var recipeObject = Recipes.getRecipes();
  $scope.recipes =recipeObject.data;

});