angular.module('foodZen.home', [])
.controller('HomeController', function($scope, $http){
  $scope.ingredients = [];

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      console.log('enter button!');
    }
  };

  $scope.postIngredient = function(ingredient) {
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/api/ingredients',
      data: {ingredient: ingredient}
    }).then(function(res){
      console.log('success with the ingredient post !');
    }, function(error){
      console.error('error with posting ingredient');
    });
  };

  $scope.addIngredient = function() {
    console.log('ingredient', $scope.ingredient);
    $scope.ingredients.push($scope.ingredient);
    $scope.postIngredient($scope.ingredient);
    $scope.ingredient = '';
  };

  $scope.getRecipes = function(IngredientArray) {
    return $http({
      method: 'GET',
      url: '/api/recipes',
      data: IngredientArray
    }).then(function (res) {
      console.log('got dem recipes ', res);
    }, function (error) {
      console.error('error with getting recipes');
    });
  };

  $scope.deleteIngredient = function(ingredient) {
    return $http({
      method: 'DELETE',
      url: '/api/ingredients',
      data: ingredient
    }).then(function (res) {
      console.log('success delete ingredient');
    }, function (error) {
      console.error('error with deleting recipes');
    })
  };
  console.log('home controller so running');
});