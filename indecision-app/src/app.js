console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'A react web app for making decisions',
    options: []
}
const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value
    if (option) {
        app.options.push(option);
    }
    event.target.elements.option.value = ' ';
    renderApp();
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>item one</li>
                <li>item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderApp();

// create render func that renders new jsx
// call on init
// call it after options array is added to