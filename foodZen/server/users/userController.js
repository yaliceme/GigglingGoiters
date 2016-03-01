var User = require('./userModel.js');
var jwt = require('jwt-simple');
var Q = require('q');
var helpers = require('../config/helpers.js');

var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {
  addUser: function ( req, res, next ) {
    var email = req.body.email;
    User.findOne({ email: email })
      .exec(function(err, user) {
        if (!user) {
          var newUser = new User({
            email: email
          });
          newUser.save(function(err, newUser) {
            if (err) {
              res.send(500, err);
            }
            //util.createSession(req, res, newUser);
            else {
              console.log('new user created!', newUser);
              res.send(200, newUser);
            }
          });
        } else {
          console.log('Account already exists');
          res.send(404, 'user exists!');
        }
    });
  },

  signin: function ( req, res, next ) {
    var email = req.body.email;
    var password = req.body.password;
    User.findOne({ email: email })
      .exec(function(err, user) {
        if (!user) {
          res.send(500, {error: 'no user'});
        } else {
          user.comparePasswords(password).then(function ( foundUser ) {
            if( foundUser ) {
              var token = jwt.encode(user, 'secret');
              res.json({token: token});
            } else {
              res.send(500, {error: 'wrong password'});
            }
          });
        }
    });
  },

  signup: function( req, res, next ) {
    var email = req.body.email;
    var password = req.body.password;
    findUser({email: email})
      .then(function (user) {
        if (user) {
          res.send(500, {error: 'User exists already'});
        } else {
          return createUser({
            email: email,
            password: password
          });
        }
      })
    .then(function (user) {
      var token = jwt.encode(user, 'secret');
      res.json({token: token});
    })
    .fail(function (error) {
      next(error);
    });
  },
};