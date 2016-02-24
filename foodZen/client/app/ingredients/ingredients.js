angular.module('foodZen.ingredients', [])
.controller('IngredientController', function($scope, $http, $location, Ingredients, Auth, Recipes, Baskets){

  var initializeIngredients = function(){
      Ingredients.getIngredients()
      .then(function (ingredients) {
        $scope.chunkedData = chunk(ingredients, 3);
      });
  };

  $scope.hitEnter = function($event, ingredient) {
    if($event.which === 13) {
      $scope.addIngredient(ingredient);
    }
  };

  $scope.addIngredient = function(ingredient) {
    Ingredients.postIngredient(ingredient, function () {
      initializeIngredients();
    });
    $scope.ingredient = '';
  };

  $scope.removeIngredient = function(ingredient) {
    Ingredients.deleteIngredient(ingredient, function () {
      initializeIngredients();
    });
  };

  $scope.goRecipes = function() {
    $location.url('/recipes');
  };

  $scope.signout = function () {
    //google sign out
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    //foodZen sign out
    Auth.signout();
  };

  var chunk = function (arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  };

  $scope.baskets = Baskets.baskets;

  $scope.addBasket = function (basket) {
    // console.log("You added the basket:", basket.name);
    var contents = basket.contents;
    // console.log("This basket contains:", contents);
    for (var i = 0; i < contents.length; i++) {
      $scope.addIngredient(contents[i]);
    }
  };

  initializeIngredients();
});