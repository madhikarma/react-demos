console.log('Build it visible js is running!');

const app = {
  title: "Visibility Toggle",
  showDetails: true
}

const appRoot = document.getElementById('app');

const toggle = () => {
  app.showDetails = !app.showDetails;
  render();
}

const createDetailsText = () => {
  if(app.showDetails) {
    return <p>Hey. These are some details you can now see!</p>
  }
}
const render = ()  => {
  const template  = (
    <div>
    <h1>{app.title}</h1>
    <button onClick={toggle}>
      {app.showDetails ? 'Show details' : 'Hide details'}
    </button>
    {
      createDetailsText()
    }
    </div>
  )
  ReactDOM.render(template, appRoot);
}

render();