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
          user_id: 1,
          ingredient: ['apple']
        },
        {
          user_id: 2,
          ingredient: ['bacon']
        },
        {
          user_id: 3,
          ingredient: ['chicken']
        }
      ];

      Ingredient.create(ingredients, done);
    });
  });

  // Lets start testing~!
  it('should have a method to add a given ingredient', function (done) {

  });

  it('should have a method to read all ingredients', function (done) {

  });
});
