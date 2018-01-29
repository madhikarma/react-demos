'use strict';

console.log('Build it visible js is running!');

var app = {
  title: "Visibility Toggle",
  showDetails: true
};

var appRoot = document.getElementById('app');

var toggle = function toggle() {
  app.showDetails = !app.showDetails;
  render();
};

var createDetailsText = function createDetailsText() {
  if (app.showDetails) {
    return React.createElement(
      'p',
      null,
      'Hey. These are some details you can now see!'
    );
  }
};
var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: toggle },
      app.showDetails ? 'Show details' : 'Hide details'
    ),
    createDetailsText()
  );
  ReactDOM.render(template, appRoot);
};

render();
