var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    id: Number,
    title: String,
    image: String,
    imageType: String,
    likes: Number
});

var Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;



