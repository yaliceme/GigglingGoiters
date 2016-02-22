var Ingredient = require('./ingredientModel.js');

module.exports = {
  addIngredient: function (req, res, next) {
    var ingredient = req.body.ingredient;
    var email = 'a@a.com';
    Ingredient.findOne({email: email}).exec(function( err, found) {
      if( found ) {
        found.ingredients.push(ingredient);
        console.log('new ingredient added!', ingredient);
        res.send(200, found);
      } else {
        var newIngredient =  new Ingredient({
          email: email,
          ingredients: [ingredient]
        });
        newIngredient.save(function(err, newUser){
          if( err ) {
            res.send( 500, err );
          } else {
            console.log('new user created in Ingredients db', newUser);
            res.send(200, newUser);
          }
        });
      }


    });
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
  }
};
