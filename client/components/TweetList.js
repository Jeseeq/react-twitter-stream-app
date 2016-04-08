
var io = require('socket.io-client');

var React = require('react');

var styles = require('./App.css');



var TweetList = React.createClass({

  getInitialState: function() {
    return{
      tweets: []
    };
  },
  addTweet: function(data) {
    console.log(data);
    var updated = this.state.tweets;
    updated.unshift(data);
    this.setState({
      tweets: updated
    });

  },

  componentDidMount: function() {
    // Handle incoming messages
    var socket = io.connect(window.location.href);

    socket.on('tweet', function(data) {
      console.log(data);
      this.addTweet(data);
    }.bind(this));
  },
  render : function(){
    var tweetNodes = this.state.tweets.map(function(tweet) {
      return(
        <p>{tweet.body}</p>
      );
    });
    return (
        <h1>{tweetNodes}</h1>
    );
  }
});

module.exports = TweetList;
