var React = require('react');

var styles = require('./App.css');

var App = React.createClass({

  render : function(){
    return (
      <div>
        <h1>Demo</h1>
        <button
          className={styles.increment}>
          +1
        </button>
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  }
});

module.exports = App;
