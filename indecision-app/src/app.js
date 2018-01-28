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
        event.target.elements.option.value = ' ';
        renderApp();
    }
};

const onRemoveAll = (event) => {
    app.options = [];
    renderApp();
}

const numbers = [55, 101, 1000];

// create remove all button above list
// on click -> wipe the array -> re-render

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map( (option) => {
                        return <li key={option}>Option: {option}</li>
                    })                    
                }
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