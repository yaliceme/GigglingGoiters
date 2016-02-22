angular.module('foodZen.services', [])


.factory('Recipes', [ '$http', function ($http){

  var getRecipes = function(IngredientArray) {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/api/recipes',
      data: IngredientArray
    }).then(function (res) {
      console.log('got dem recipes ', res);
    }, function (error) {
      console.error('error with getting recipes');
    });
  };

  return {
    getRecipes: getRecipes
  };
}])


.factory('Ingredients', [ '$http', function ($http){

  var postIngredient = function(ingredient) {
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

  var deleteIngredient = function(ingredient) {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/api/ingredients',
      data: ingredient
    }).then(function (res) {
      console.log('success delete ingredient');
    }, function (error) {
      console.error('error with deleting recipes');
    });
  };

  return {
    postIngredient: postIngredient,
    deleteIngredient: deleteIngredient
  };
}]);