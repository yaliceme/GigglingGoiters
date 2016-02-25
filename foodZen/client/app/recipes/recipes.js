angular.module('foodZen.recipes', [])
.controller('RecipeController', function($scope, $http, Recipes, Ingredients){
  $scope.data = {};
  $scope.singleRecipe = {};
  $scope.singleRecipe.view = false;

  var initializeRecipes = function(){
    Recipes.updateRecipes(Ingredients.ingredients)
    .then(function (recipes) {
      $scope.data.recipes = recipes;
    });

    Recipes.getUserRecipes()
    .then(function (savedRecipes) {
      $scope.data.savedRecipes = savedRecipes;
      console.log('saved recipes: ', $scope.data.savedRecipes);
    });
  };

  // function for recipes view to GET user's saved recipes
  $scope.getUserRecipes = function() {
    Recipes.getUserRecipes()
    .then(function (savedRecipes) {
      $scope.data.savedRecipes = savedRecipes;
      console.log('saved recipes: ', $scope.data.savedRecipes);
    });
  };

  // function for recipes view to POST a recipe to user's saved recipes
  $scope.saveUserRecipe = function(recipe) {
    Recipes.postUserRecipe(recipe)
    .then(function () {
      console.log('success saving user recipe: ', recipe);
    }, function(err) {
      console.log('error saving user recipe');
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
  // getUserRecipes();
});