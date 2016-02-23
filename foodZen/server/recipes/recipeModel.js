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


// var userSchema = mongoose.Schema({
//   name: { type: String, required: true, index: { unique: true } },
//   email: { type: String, required: true }
// });

// var User = mongoose.model('User', userSchema);

// module.exports = User;



