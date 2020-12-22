'use strict';

console.log("App.js is running");

var user = {
    name: 'ABCD',
    title: 'Ponniyin Selvan',
    author: 'Kalki Krishnamurthy'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello World'
    ),
    React.createElement(
        'h1',
        null,
        'Name : ',
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age :',
        user.title
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.author
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
