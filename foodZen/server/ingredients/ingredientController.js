var ingredients = [];

module.exports = {
  addIngredient: function (req, res, next) {
    var ingredient = req.body.ingredient;
    ingredients.push(ingredient);
  },
  getAllIngredients: function () {
    return ingredients.join(',');
  }
};
