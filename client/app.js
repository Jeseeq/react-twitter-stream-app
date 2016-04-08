/* eslint-env browser */

var React = require('react');
var ReactDOM = require('react-dom');

var TweetList = require('./components/TweetList');




ReactDOM.render(
    <TweetList data={[]} />,
  document.getElementById('root')
);
