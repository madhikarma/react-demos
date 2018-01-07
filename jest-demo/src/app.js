
// Custom component element
// TODO: (SM) why can't this be an external file that's imported?
class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

// Simple HTML element
const element = <h1>Hello, world</h1>;

var appRoot = document.getElementById('app');
ReactDOM.render(<Hello />, appRoot);