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

let count = 0;
const addOne = () => {
    count += 1;
    // console.log('addOne');
};
const minusOne = () => {
    count -= 1;
    // console.log('minusOne');
};
const reset = () => {
    count = 0;
    // console.log('reset');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
