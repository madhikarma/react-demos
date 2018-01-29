'use strict';

console.log('Build it visible js is running!');

var visibility = true;
var appRoot = document.getElementById('app');

var toggle = function toggle() {
  app.showDetails = !app.showDetails;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      visibility ? 'Show details' : 'Hide details'
    ),
    visibility ? React.createElement(
      'p',
      null,
      'Hey. These are some details you can now see!'
    ) : null
  );
  ReactDOM.render(template, appRoot);
};

render();
