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
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>

        {/* <ol>
            <li>item one</li>
            <li>item two</li>
        </ol> */}
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);