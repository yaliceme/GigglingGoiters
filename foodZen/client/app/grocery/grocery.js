angular.module('foodZen.groceries', [])
.controller('GroceryController', function($scope, Recipes, Ingredients, Groceries) {
  $scope.data = {};
  $scope.selected = [];

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

  $scope.groceriesFromRecipes = function() {
    //debugger;
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
      console.log('stuff to grocery: ', ingredients);
      Groceries.postGroceries(ingredients)
      .then(function () {
        $scope.selected = [];
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
      console.log($scope.data.groceries);
    });
  };

  $scope.getClass = function (ingredient) {
    return {
      instock: $scope.data.ingredients.indexOf(ingredient) !== -1
    };
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