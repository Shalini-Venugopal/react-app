'use strict';

console.log("App.js is running");

var app = {
    title: 'React App',
    subtitle: 'Put your life on Learning',
    options: ['React JS', 'Java']
};
var templateTwo = React.createElement(
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
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List 1'
        ),
        React.createElement(
            'li',
            null,
            'List 2'
        )
    )
);

// var user ={
//     name : 'ABCD',
//     age : 25,
//     location : 'USA'
// };
// function getLocation(location){
//     if (location){
//         return <p>Location : {location}</p>;
//     }
//     // else {
//     //     return 'Invalid';
//     // }
// }
// var template = (
//     <div>
//         <h1>Name : {user.name ? user.name : 'Anonymous'}</h1>
//         {user.age >=18 && <p>Age :{user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
