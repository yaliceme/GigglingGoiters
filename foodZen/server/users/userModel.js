var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  // user_id: {
  //   type: mongoose.Schema.ObjectId,
  //   default: mongoose.Types.ObjectId
  // },
  user_id: Number,
  email: String,

});


var User = mongoose.model('User', userSchema);


module.exports = User;