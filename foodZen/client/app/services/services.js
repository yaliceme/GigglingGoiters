angular.module('foodZen.services', [])


.factory('Recipes', [ '$http', function ($http){

  var recipes = [];

  var updateRecipes = function(IngredientArray) {
    return $http({
      method: 'GET',
      url: '/api/recipes',
      data: IngredientArray
    }).then(function (res) {
      recipes = res.data;
      console.log('got dem recipes ', recipes);
      return res.data;
    }, function (error) {
      console.error('error with getting recipes');
    });
  };

  var getRecipes = function (){
    return recipes;
  };

  // GET user's saved recipes from database
  var getUserRecipes = function() {
    return $http({
      method: 'GET',
      url: 'api/users/recipes'
    }).then(function (res) {
      console.log('success with getting user recipes');
      return res.data;
    }, function() {
      console.error('error with getting user recipes');
    });
  };

  // POST recipe to user's saved recipes
  var postUserRecipe = function(recipe) {
    return $http({
      method: 'POST',
      url: '/api/users/recipes',
      data: {recipe: recipe}
    }).then(function (res) {
      console.log('success with user recipe post');
    }, function(error) {
      console.error('error with posting user recipe');
    });
  };

  return {
    getRecipes: getRecipes,
    updateRecipes: updateRecipes,
    recipes: recipes,
    getUserRecipes: getUserRecipes,
    postUserRecipe: postUserRecipe
  };
}])


.factory('Ingredients', [ '$http', function ($http){

  var ingredients = [];

  var postIngredient = function(ingredient, callback) {
    return $http({
      method: 'POST',
      url: '/api/ingredients',
      data: {ingredient: ingredient}
    }).then(function(res){
      ingredients.push(ingredient);
      console.log('success with the ingredient post !');
      callback();
    }, function(error){
      console.error('error with posting ingredient');
    });
  };

  var getIngredients = function() {
    return $http({
      method: 'GET',
      url: '/api/ingredients',
    }).then(function(res){
      ingredients = res.data;
      console.log('success with getting ingredients !', ingredients);
      return res.data;
    }, function(error){
      console.error('error with getting ingredients');
    });
  };

    var deleteIngredient = function(ingredient, callback) {
    return $http.delete('/api/ingredients', {params: {ingredient: ingredient}})
    .then(function (res) {
      console.log('success delete ingredient');
      callback();
    }, function (error) {
      console.error('error with deleting recipes');
    });
  };

  return {
    postIngredient: postIngredient,
    deleteIngredient: deleteIngredient,
    ingredients: ingredients,
    getIngredients: getIngredients
  };
}])


.factory('Baskets', [ '$http', function ($http){

  var baskets = {
    basics: {
      name: "Basics",
      contents: [
        "water",
        "salt",
        "pepper",
        "oil",
        "butter",
        "flour",
        "sugar"
      ]
    },
    chineseStaples: {
      name: "Chinese staples",
      contents: [
        "soy sauce",
        "sesame oil",
        "black vinegar",
        "chili sauce",
        "white rice",
        "noodles",
        "ginger",
        "scallion"
      ]
    },
    italianStaples: {
      name: "Italian staples",
      contents: [
        "extra virgin olive oil",
        "balsamic vinegar",
        "mozzarella",
        "tomatoes",
        "pasta",
        "garlic"
      ]
    }
  };

  return {
    baskets: baskets
  };
}]);
