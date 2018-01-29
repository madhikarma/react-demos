console.log('Build it visible js is running!');

let visibility = true
const appRoot = document.getElementById('app');

const toggle = () => {
  app.showDetails = !app.showDetails;
  render();
}

const render = ()  => {
  const template  = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggle}>
      {visibility ? 'Show details' : 'Hide details'}
    </button>
    {visibility ? <p>Hey. These are some details you can now see!</p> : null}
    </div>
  )
  ReactDOM.render(template, appRoot);
}

render();