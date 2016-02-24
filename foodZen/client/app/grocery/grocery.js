angular.module('foodZen.groceries', [])
.controller('GroceryController', function($scope, Recipes, Ingredients, Groceries) {
  $scope.data = {};

  var initializeGroceries = function() {
    $scope.updateGrocery();
    $scope.updateIngredients();
    //get request to get users saved recipes
    $scope.updateRecipes();
  };

  $scope.addGrocery = function () {
    var arrayify = [];
    arrayify.push($scope.newGrocery);
    Groceries.postGroceries(arrayify);
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
    //get request to get users saved recipes
  };

  $scope.deleteGrocery = function(grocery) {
    var arrayify = [];
    arrayify.push(grocery);
    Groceries.deleteGrocery(arrayify);
    $scope.updateGrocery();
  };

  initializeGroceries();
});