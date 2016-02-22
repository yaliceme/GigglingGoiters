var User = require('./userModel.js');

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
  }

};