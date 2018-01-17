console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'A react web app for making decisions',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Shagun',
    age: 17,
    location: 'London'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);