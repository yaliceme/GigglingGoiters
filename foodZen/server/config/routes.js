var ingredientController = require('../ingredients/ingredientController.js');
var recipeController = require('../recipes/recipeController.js');
var userController = require('../users/userController.js');

var helpers = require('./helpers.js');

module.exports = function (app, express) {

  app.get('/api/recipes/', recipeController.getRecipes);
  app.post('/api/ingredients/', ingredientController.addIngredient);
  app.post('/api/users/', userController.addUser);
  app.delete('/api/ingredients/', ingredientController.removeIngredient);

  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
