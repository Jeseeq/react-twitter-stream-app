var express = require('express');

var app = express.Router();

app.get('/whoami', (req, res) => {
  res.send("You are a nac");
});

module.exports = app;
