var ingredients = [];

module.exports = {
  addIngredient: function (req, res, next) {
    var ingredient = req.body.ingredient;
    ingredients.push(ingredient);
    res.end(JSON.stringify(ingredients));
  },
  getAllIngredients: function () {
    return ingredients.join(',');
  }
};
