var Ingredient = require('../ingredients/ingredientController.js');
var env = require('../env/env.js');
var api_key = env.api_key;
var request = require('request');
var findByIngredients = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients';

// module.exports = {
//   getRecipes: function (req, res, next) {
//     var options = {
//       url: findByIngredients,
//       headers: {
//         'X-Mashape-Key': api_key
//       },
//       qs: {ingredients: Ingredient.getAllIngredients()}
//     };
//     request.get(options, function (error, response, body) {
//       if (error) {
//         console.log("Error with getRecipes request:", error);
//       } else {
//         res.end(body);
//       }
//     });
//   }
// };


module.exports = {
  //Make temp functionality for non-logged in users
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
    //Need to grab user_id from the request...
    //var user_id = req.session?
    console.log('==============>>>>GET RECIPES');
    var user_id = 1;
    var email = 'a@a.com';
    Ingredient.getAllIngredients( email, function( cart ){
      var ingredients = cart.ingredients;
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
          res.end(body);
        }
      });
    });
  }
};