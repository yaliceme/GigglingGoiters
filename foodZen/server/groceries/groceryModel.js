var mongoose = require('mongoose');

var grocerySchema = mongoose.Schema({
  email: String,
  groceries: [String]
});

var Grocery = mongoose.model('Grocery', grocerySchema);

module.exports = Grocery;