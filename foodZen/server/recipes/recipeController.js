var ingredient = require('../ingredients/ingredientController.js');
var env = require('../env/env.js');
var api_key = env.api_key;
var request = require('request');

module.exports = {
  getRecipes: function (req, res, next) {
    // console.log("ingredient.getAllIngredients():", ingredient.getAllIngredients());
    var options = {
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
      headers: {
        'X-Mashape-Key': api_key
      },
      qs: {ingredients: ingredient.getAllIngredients()}
    };
    request.get(options, function (error, response, body) {
      if (error) {
        console.log("You got an error:", error);
      } else {
        // response.end(body);
        res.end(body);
      }
    });
  }
};
