var mongoose = require('mongoose');

var user_recipeSchema = mongoose.Schema({
  user_email: String,
  recipe_id: Number,
  user_rating: {
    type: Number,
    default: 5
  }
});

var User_Recipe = mongoose.model('User_Recipe', user_recipeSchema);

module.exports = User_Recipe;