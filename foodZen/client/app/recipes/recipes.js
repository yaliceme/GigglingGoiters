angular.module('foodZen.recipes', [])
.controller('RecipeController', function($scope, $http, Recipes, Ingredients){
  $scope.data = {};
  $scope.singleRecipe = {};
  $scope.singleRecipe.view = false;

  var initializeRecipes = function(){
    Recipes.updateRecipes(Ingredients.ingredients)
    .then(function (recipes) {
      $scope.data.recipes = recipes;
      console.log($scope.data.recipes);
    });
  };

  $scope.viewRecipe = function(id){
    console.log('IDIDIDID', id);
    return $http({
      method: 'GET',
      url: '/api/recipes/ingredients/',
      data: {id: id}
    }).then(function( recipe ){
      console.log('DID WE GET THE RECIPE BACK?', recipe);
      $scope.singleRecipe.view = true;
      $scope.singleRecipe.recipe = recipe;
    });
  };
  initializeRecipes();
});