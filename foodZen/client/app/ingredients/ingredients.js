angular.module('foodZen.ingredients', [])
.controller('IngredientController', function($scope, $http, $location, Ingredients, Auth, Recipes){

  var initializeIngredients = function(){
      Ingredients.getIngredients()
      .then(function (ingredients) {
        $scope.chunkedData = chunk(ingredients, 3);
      });
  };

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      $scope.addIngredient();
    }
  };

  $scope.addIngredient = function() {
    Ingredients.postIngredient($scope.ingredient, function () {
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

  initializeIngredients();

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
});