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
      url: '/api/ingredients',
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
    $scope.ingredient = '';
  };

  $scope.getRecipes = function() {
    console.log('get request for recipes');
  };
  console.log('home controller so running');
});