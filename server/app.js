var express = require('express');

var app = express.Router();
var Tweet = require('./models/tweet');


app.get('/', function(req, res) {
  // Tweet.getTweets(0, 0, function(tweets) {
  //   console.log(tweets);
  // });

  res.render('index');
});

app.get('/whoami', (req, res) => {
  res.send("You are a nac");
});

module.exports = app;
