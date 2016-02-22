var expect = require('chai').expect;
var mongoose = require('mongoose');
var Recipe = require('../recipes/recipeModel.js');
var RecipeController = require('../recipes/recipeController.js');

var dbURI = 'mongodb://localhost/recipes';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['recipes'].remove(done);
};

describe('Recipe Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Create dummy recipes to test against
  beforeEach(function (done) {
    clearDB(function () {

      recipes = [
        // insert dummy recipes here
      ];

      Recipe.create(recipes, done);
    });
  });

  // Lets start testing~!
  it('should have a method to read all recipes', function (done) {

  });
});