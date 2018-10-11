// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


var User = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

User.plugin(passportLocalMongoose);


module.exports = mongoose.model('users', User);