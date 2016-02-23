var ingredientController = require('../ingredients/ingredientController.js');
var recipeController = require('../recipes/recipeController.js');
var userController = require('../users/userController.js');

var helpers = require('./helpers.js');

module.exports = function (app, express) {

  //Get Recipes
  app.get('/api/recipes/', helpers.decode, recipeController.getRecipes);

  //Adjust Ingredients
  app.post('/api/ingredients/', helpers.decode, ingredientController.addIngredient);
  app.delete('/api/ingredients/', helpers.decode, ingredientController.removeIngredient);

  //Adjust users
  app.post('/api/users/', userController.addUser);
  app.post('/api/users/signin/', userController.signin);
  app.post('/api/users/signup/', userController.signup);

  
  // If a request is sent somewhere other than the routes above,
  // send it through our custom error handler
  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};
