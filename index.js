import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function clock() {
const time = <h1>{new Date().toLocaleTimeString()}</h1>;

ReactDOM.render(time, document.getElementById('root'));
}
setInterval(clock, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
