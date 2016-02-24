var Ingredient = require('../ingredients/ingredientController.js');
var env = require('../env/env.js');
var api_key = env.api_key;
var request = require('request');
var findByIngredients = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';
var User_Recipe = ('./user_recipeModel.js');
var Q = require('q');

var findUser = Q.nbind(User_Recipe.find, User);

module.exports = {
  //Make temp functionality for non-logged in users?
  tempGetRecipes: function(req, res, next) {
    var options = {
      url: findByIngredients,
      headers: {
        'X-Mashape-Key': api_key
      },
      qs: {ingredients: Ingredient.getAllIngredients()}
    };
    request.get(options, function (error, response, body) {
      if (error) {
        console.log("Error with getRecipes request:", error);
      } else {
        res.end(body);
      }
    });
  },

  getRecipes: function (req, res, next) {
    var email = req.user.email;
    Ingredient.getAllIngredients( email, function( cart ){
      var ingredients = cart.ingredients.join();
      var options = {
        url: findByIngredients,
        headers: {
          'X-Mashape-Key': api_key
        },
        qs: {ingredients: ingredients}
      };
      request.get(options, function (error, response, body) {
        if (error) {
          console.log("Error with getRecipes request:", error);
        } else {
          console.log('special recipes for a@a.com cart: ', body);
          res.end(body);
        }
      });
    });
  },

  getSavedRecipes: function( req, res, next ){
    var email = req.user.email;
    findUser({email: email})
    .then(function( found ){
      //iterate through found here? It will probably be an array of all fields that include that user email, since a user can have many saved recipes
        //collect all recipe_id fields
      //search recipes collection and return all recipes with matching id's
    });
  },

  saveRecipe: function() {
    
  }

};