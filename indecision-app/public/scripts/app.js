'use strict';

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'A react web app for making decisions',
    options: []
};
var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = ' ';
        renderApp();
    }
};

var onRemoveAll = function onRemoveAll(event) {
    app.options = [];
    renderApp();
};

var numbers = [55, 101, 1000];

// create remove all button above list
// on click -> wipe the array -> re-render

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
