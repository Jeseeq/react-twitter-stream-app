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

tweetSchema.statics.getTweets = function(page, skip, cb) {


  var tweets = [],
    start = (page * 10) + (skip * 1);


  Tweet.find({}, 'twid active author avatar body date screenname',
            {skip: start, limit : 10})
            .sort({date: 'desc'})
            .exec(function(err, data) {

              if (!err){
                tweets = data;

              }
            });

  cb(tweets);
};

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;
