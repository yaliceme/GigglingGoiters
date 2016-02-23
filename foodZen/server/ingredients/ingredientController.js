var Ingredient = require('./ingredientModel.js');
var helpers = require('../config/helpers.js');


module.exports = {
  addIngredient: function (req, res, next) {
   var ingredient = req.body.ingredient;
    helpers.findUser(req, res, next, function( found ){
      found.ingredients.push(ingredient);
    });
    // );
  },

  getAllIngredients: function ( email, callback) {
    Ingredient.findOne( {email: email} ).exec( function( err, cart ) {
      if( err ) {
        console.error( 'Error retrieving user ingredients: ', err );
        return;
      } else {
       return callback ( cart );
      }
    });
  },

  sendIngredients: function ( req, res, next ) {
    var email = req.user.email;
    getAllIngredients( email, function( cart ) {
      res.end(cart.ingredients);
    });
  },
  
  removeIngredient: function ( req, res, next ) {
    var ingredient = req.body.ingredient;
    helpers.findUser(req, res, next, function( found ){
      found.splice(found.ingredients.indexOf(ingredient), 1);
    });

  }
};
