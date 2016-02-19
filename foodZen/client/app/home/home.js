angular.module('foodZen.home', [])
.controller('HomeController', function($scope){

  $scope.hitEnter = function($event) {
    if($event.which === 13) {
      console.log('enter button!');
    }
  };

  $scope.addIngredient = function() {
    console.log('ingredient', $scope.ingredient);
    $scope.ingredient = '';
  };

  $scope.getRecipes = function() {
    console.log('get request for recipes');
  };
  console.log('home controller so running');
});