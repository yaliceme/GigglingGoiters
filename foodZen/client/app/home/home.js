angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http, $location, Ingredients, Auth, Recipes){
  $scope.data = {};

  var initializeIngredients = function(){
      Ingredients.getIngredients()
      .then(function (ingredients) {
        $scope.data.ingredients = ingredients;
        console.log("ingredients from controller", ingredients);
      });
  };

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      console.log('enter button!');
    }
  };

  $scope.addIngredient = function() {
    console.log('ingredient', $scope.ingredient);
    Ingredients.postIngredient($scope.ingredient);
    $scope.ingredient = '';
  };

  $scope.removeIngredient = function(ingredient) {
    //need to get this functionally to work with the full database
    console.log("removing ", ingredient);
    Ingredients.deleteIngredient(ingredient, function () {
      initializeIngredients();
    });
  };

  $scope.goRecipes = function() {
    $location.url('/recipes');
  };

  initializeIngredients();

  $scope.signout = function () {
    Auth.signout();
  };
});