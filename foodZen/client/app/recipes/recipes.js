angular.module('foodZen.recipes', [])
.controller('RecipeController', function($scope, $http, Recipes, Ingredients){
  $scope.data = {};
  $scope.singleView = {
    view: false,
    recipe: undefined
  };

  var initializeRecipes = function(){
    Recipes.updateRecipes(Ingredients.ingredients)
    .then(function (recipes) {
      $scope.data.recipes = recipes;
      console.log($scope.data.recipes);
    });
  };

  $scope.viewRecipe = function(id){
    return $http({
      method: 'GET',
      url: '/api/recipes/ingredients/',
      data: {id: id}
    }).then(function( recipe ){
      $scope.singleRecipe.view = true;
      $scope.singleRecipe.recipe = recipe;
    });
  };
  initializeRecipes();
});