/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';

import TweetList from './components/TweetList';


var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

ReactDOM.render(
    <TweetList data={initialState} />,
  document.getElementById('root')
);
