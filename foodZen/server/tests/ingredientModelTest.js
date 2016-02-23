var expect = require('chai').expect;
var mongoose = require('mongoose');
var Ingredient = require('../ingredients/ingredientModel.js');

describe('Ingredient Model', function () {

  it('Ingredient should be a Mongoose model', function () {
    expect(new Ingredient()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Ingredient.schema).to.exist;
  });

});
