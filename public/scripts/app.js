"use strict";

console.log("App.js is running");

//JSX code
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello World!!!"
    ),
    React.createElement(
        "h1",
        null,
        "Name : Shalini"
    ),
    React.createElement(
        "p",
        null,
        "It contains some Info"
    ),
    React.createElement(
        "p",
        null,
        "Place : Komarapalayam"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Degree : B.E."
        ),
        React.createElement(
            "li",
            null,
            "Stream : CSE"
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
