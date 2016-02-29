angular.module('foodZen.groceries', [])
.controller('GroceryController', function($scope, Recipes, Ingredients, Groceries) {
  $scope.data = {};
  $scope.selected = [];

  var initializeGroceries = function() {
    $scope.updateGrocery();
    $scope.updateIngredients();
    $scope.updateRecipes();
  };

  //helper function gets index of array of objects, based
  //on an attribute of those objects
  var findWithAttr = function(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
  };

  //this function preforms the logic for populating the grocery list
  //it adds ingredients from selected recipes, but does not include ingredients 
  //the user has instock and that are already on the grocery list
  $scope.groceriesFromRecipes = function() {
    if($scope.selected.length > 0){
      var ingredients = [];
      var index;
      for(var i = 0; i < $scope.selected.length; i++){
        index = findWithAttr($scope.data.recipes, 'title', $scope.selected[i]);
        var recipeIngredients = $scope.data.recipes[index].ingredients;
        for(var j = 0; j < recipeIngredients.length; j++){
          if(ingredients.indexOf(recipeIngredients[j].name) === -1){
            ingredients.push(recipeIngredients[j].name);
          }
        }
      }
      var inStock = $scope.data.ingredients;
      for(var k = 0; k < inStock.length; k++){
        index = ingredients.indexOf(inStock[k]);
        if(index !== -1){
          ingredients.splice(index, 1);
        }
      }
      Groceries.postGroceries(ingredients)
      .then(function () {
        $scope.uncheckAll();
        $scope.updateGrocery();
      })
    }
  };

  $scope.checkAll = function() {
    $scope.selected = angular.copy($scope.data.recipes);
  };

  $scope.uncheckAll = function() {
    $scope.selected = [];
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
    });
  };

  //used in the ingredients portion of grocery.html
  //adds css class to ingredients the user has instock
  $scope.getClass = function (ingredient) {
    return {
      instock: $scope.data.ingredients.indexOf(ingredient) !== -1
    };
  };

  $scope.updateIngredients = function() {
    Ingredients.getIngredients()
    .then(function(ingredients) {
      $scope.data.ingredients = ingredients;
    });
  };

  $scope.updateRecipes = function () {
    Recipes.getUserRecipes()
    .then(function(recipes) {
      $scope.data.recipes = recipes;
      //console.log('recipesssssss', $scope.data.recipes);
      for(var i = 0; i < recipes.length; i++){
        //gets extended info (ingredients) for each recipe
        Recipes.viewRecipe(recipes[i].id)
        .then(function (recipe) {
          var index = findWithAttr(recipes, "id", recipe.data.id);
          recipes[index].ingredients = recipe.data.extendedIngredients;
          recipes[index].image = recipe.data.image;
        });
      }
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