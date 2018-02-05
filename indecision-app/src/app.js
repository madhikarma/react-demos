console.log('app.js is running');

import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack</p>;
// const template = React.createElement('p', {}, 'testing 123');
ReactDOM.render(template, document.getElementById('app'));