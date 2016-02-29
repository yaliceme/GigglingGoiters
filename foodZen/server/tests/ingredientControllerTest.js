var expect = require('chai').expect;
var mongoose = require('mongoose');
var Ingredient = require('../ingredients/ingredientModel.js');
var IngredientController = require('../ingredients/ingredientController.js');

var dbURI = 'mongodb://localhost/ingredients';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['ingredients'].remove(done);
};

describe('Ingredient Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Create dummy ingredients to test against
  beforeEach(function (done) {
    clearDB(function () {

      ingredients = [
        {
          email: 'vincent@gmail.com',
          ingredients: ['apple']
        },
        {
          email: 'peter@gmail.com',
          ingredients: ['bacon']
        },
        {
          email: 'alice@gmail.com',
          ingredients: ['chicken']
        },
        {
          email: 'blaze@gmail.com',
          ingredients: ['salt', 'pepper']
        }
      ];

      Ingredient.create(ingredients, done);
    });
  });

  // Lets start testing~!
  it('should have a method to add a given ingredient', function (done) {
    var newIngredient = {
      ingredient: 'turkey'
    };
    //IngredientController.addIngredient(newIngredient)
  });

  it('should have a method to read all ingredients', function (done) {

  });
});
