var express = require('express');
var config = require('./config');
var twitter = require('twitter');

var app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a nac");
});


var client = twitter(config.twitter);
var trackFilter = {track: 'javascript'};

client.stream('statuses/filter', trackFilter, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet);
  });
});

module.exports = app;
