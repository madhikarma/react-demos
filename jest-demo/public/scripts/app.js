

// // Custom component element
// // TODO: (SM) why can't this be an external file that's imported?
class Hello extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hello'
      )
    );
  }
}

// Simple HTML element
const element = React.createElement(
  'h1',
  null,
  'Hello, world'
);

var appRoot = document.getElementById('app');

ReactDOM.render(React.createElement(Hello, null), appRoot);
// ReactDOM.render(element, appRoot);