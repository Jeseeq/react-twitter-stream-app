var fs = require('fs');

var React = require('react');

var { renderToString } = require('react-dom/server');

var App = require('./components/App');

/* eslint-disable no-sync */
var template = fs.readFileSync(__dirname + '/../index.html', 'utf8');
/* eslint-enable no-sync */

function renderApp(path, callback) {

  var rendered = renderToString(
      <App />
  );

  var page = template
    .replace('<!-- CONTENT -->', rendered);
  //  .replace('"-- STORES --"', JSON.stringify(state));

  callback(null, page);
}

module.exports = renderApp;
