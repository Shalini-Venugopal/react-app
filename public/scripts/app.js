"use strict";

console.log("App.js is running");

//JSX code
var template = React.createElement(
  "h1",
  null,
  "It will be changed!!!"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
