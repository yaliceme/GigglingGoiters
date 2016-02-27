var Grocery = require('./groceryModel.js');
var helpers = require('../config/helpers.js');

module.exports = {

  getAllGroceries: function ( email, callback) {
    Grocery.findOne( {email: email} ).exec( function( err, cart ) {
      if( err ) {
        console.error( 'Error retrieving user ingredients: ', err );
        return;
      } else {
       return callback ( cart );
      }
    });
  },

  sendGroceries: function (req, res, next) {
    var email = req.user.email;
    module.exports.getAllGroceries( email, function( cart ) {
      if( !cart ) {
        res.end('');
      } else {
        res.json(cart.groceries);
      }
    });
  },

  addGroceries: function (req, res, next) {
    var groceries = req.body.groceries;
    helpers.findUser_Groceries(req, res, next, function( found ){
      for(var i = 0; i < groceries.length; i++){
        if (found.groceries.indexOf(groceries[i]) === -1){
          found.groceries.push(groceries[i]);
        }
      }
    });
  },

  removeGroceries: function ( req, res, next ) {
    var grocery = req.query.grocery;
    helpers.findUser_Groceries(req, res, next, function( found ){
      found.groceries.splice(found.groceries.indexOf(grocery), 1);
    });
  }

};
