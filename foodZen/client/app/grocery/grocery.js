angular.module('foodZen.groceries', [])
.controller('GroceryController', function($scope, Recipes, Ingredients, Groceries) {
  $scope.data = {};

  var initializeGroceries = function() {
    $scope.updateGrocery();
    $scope.updateIngredients();
    //get request to get users saved recipes
    $scope.updateRecipes();
  };

  var findWithAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
  };

  $scope.addGrocery = function () {
    var arrayify = [];
    arrayify.push($scope.newGrocery);
    Groceries.postGroceries(arrayify)
    .then(function () {
      $scope.updateGrocery();
    });
    $scope.newGrocery = '';
  };

  $scope.updateGrocery = function() {
    Groceries.getGroceryList()
    .then(function(groceries) {
      $scope.data.groceries = groceries;
      console.log($scope.data.groceries);
    });
  };

  $scope.updateIngredients = function() {
    Ingredients.getIngredients()
    .then(function(ingredients) {
      $scope.data.ingredients = ingredients;
      console.log($scope.data.ingredients);
    });
  };

  $scope.updateRecipes = function () {
    Recipes.getUserRecipes()
    .then(function(recipes) {
      $scope.data.recipes = recipes;
      for(var i = 0; i < recipes.length; i++){
        Recipes.viewRecipe(recipes[i].id)
        .then(function (recipe) {
          var index = findWithAttr(recipes, "id", recipe.data.id);
          recipes[index].ingredients = recipe.data.extendedIngredients;
          //console.log("ingredients: ", recipes[index].ingredients);
        });
      }
      //console.log("HERE: ", $scope.data.recipes);
    });
  };

  $scope.deleteGrocery = function(grocery) {
    Groceries.deleteGroceries(grocery)
    .then(function () {
      $scope.updateGrocery();
    });
  };

  initializeGroceries();
});