var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  preference: String
});

var User = mongoose.model('User', userSchema);

exports.User = User;
