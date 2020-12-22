console.log("App.js is running");

//JSX code
var template = (
    <div>
        <h1>Hello World!!!</h1>
        <h1>Name : Shalini</h1>
        <p>It contains some Info</p>
        <p>Place : Komarapalayam</p>
        <ol>
            <li>Degree : B.E.</li>
            <li>Stream : CSE</li>
        </ol>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
