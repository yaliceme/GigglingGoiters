var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('../users/userModel.js');
var UserController = require('../users/userController.js');

var dbURI = 'mongodb://localhost/users';

// The `clearDB` helper function, when invoked, will clear the database
var clearDB = function (done) {
  mongoose.connection.collections['users'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  // Create dummy users to test against
  beforeEach(function (done) {
    clearDB(function () {

      users = [
        // insert dummy users here
      ];

      User.create(users, done);
    });
  });

  // Lets start testing~!
  it('should have a method to retrieve a user, given an id', function (done) {

  });

  it('should have a method to retrieve a user, given an email', function (done) {

  });

  it('should have a method to read all users', function (done) {

  });
});