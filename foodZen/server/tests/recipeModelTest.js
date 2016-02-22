var expect = require('chai').expect;
var mongoose = require('mongoose');
var Recipe = require('../recipes/recipeModel.js');

describe('Recipe Model', function () {

  it('Recipe should be a Mongoose model', function () {
    expect(new Recipe()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Recipe.schema).to.exist;
  });

});
