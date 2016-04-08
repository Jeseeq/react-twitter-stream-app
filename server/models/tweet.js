var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
  twid        : String
  , active     : Boolean
  , author     : String
  , avatar     : String
  , body       : String
  , date       : Date
  , screenname : String
});

var Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
