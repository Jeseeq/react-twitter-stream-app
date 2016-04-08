
import io from 'socket.io-client';

import React from 'react';

import  styles from './App.css';



const TweetList = React.createClass({

  getInitialState: function() {
    return{
      tweets: this.props.data
    };
  },

  addTweet: function(data) {
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
