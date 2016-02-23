var Ingredient = require('./ingredientModel.js');
var helper = require('../config/helpers.js');

module.exports = {
  addIngredient: function (req, res, next) {
    console.log('GET ITEM', Window.localStorage.getItem('com.foodZen'));

    // var ingredient = req.body.ingredient;
    // helper.findUser(req, res, next, function( found ){
    //   found.ingredients.push(ingredient);
    // });
  },

  getAllIngredients: function (user_id, callback) {
    Ingredient.findOne({email: user_id}).exec(function(err, cart){
      if( err ) {
        console.error( 'Error retrieving user ingredients: ', err );
        return;
      } else {
       return callback ( cart );
      }
    });
  },

  removeIngredient: function ( req, res, next ) {
    var ingredient = req.body.ingredient;
    helper.findUser(req, res, next, function( found ){
      found.splice(found.ingredients.indexOf(ingredient), 1);
    });

  }
};
