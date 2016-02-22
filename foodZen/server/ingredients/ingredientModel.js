var mongoose = require('mongoose');

var ingredientSchema = mongoose.Schema({
  user_id: Number,
  email: String,
  ingredients: [String]
});

var Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;