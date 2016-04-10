
import io from 'socket.io-client';

import React from 'react';

import  styles from './App.css';



const TweetList = React.createClass({
  checkScroll: function() {

    // Get scroll pos & window data
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var s = (document.body.scrollTop || document.documentElement.scrollTop || 0);
    var scrolled = (h + s) > document.body.offsetHeight;



    if (scrolled && !this.state.paging){

      this.setState({page : this.state.page + 1, paging: true});
      this.getPage(this.state.page);
    }

  },

  getPage: function(page) {

    var request = new XMLHttpRequest();
    var self = this;

    request.open('GET', 'page/' + page + '/' + this.state.skip, true);

    request.onload = function() {

      if (request.status >= 200 && request.status < 400){

        self.addPage(JSON.parse(request.responseText));

      }else {
        console.log('Pagging done');
      }
    };

    // fire request
    request.send();
  },
  addPage: function(tweets) {

    if (tweets.length >= 0){

      var updated = this.state.tweets;
      tweets.forEach(function(tweet) {
        updated.push(tweet);
      });

      this.setState({tweets: updated, paging: false});

    }else {
      this.setState({
        tweets: updated,
        paging: false
      });
    }
  },
  getInitialState: function() {
    return{
      tweets: this.props.data,
      skip: 0,
      page: 0,
      paging: false
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

    window.addEventListener('scroll', this.checkScroll);
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
