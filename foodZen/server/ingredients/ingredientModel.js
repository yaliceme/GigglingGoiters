var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
  email: String,
  ingredients: [String]
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;