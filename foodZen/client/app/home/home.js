angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http, $location, Ingredients, Auth, Recipes){
  $scope.data = {};

  var initializeIngredients = function(){
      $scope.data.ingredients = Ingredients.ingredients;
  };

  $scope.ingredients = [];

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

  $scope.goRecipes = function() {
    $location.url('/recipes');
  };

  initializeIngredients();

  $scope.signout = function () {
    Auth.signout();
  };
});