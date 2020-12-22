console.log("App.js is running");

var user ={
    name : 'ABCD',
    title : 'Ponniyin Selvan',
    author : 'Kalki Krishnamurthy'
};
var template = (
    <div>
        <h1>Hello World</h1>
        <h1>Name : {user.name + '!'}</h1>
        <p>Age :{user.title}</p>
        <p>Location: {user.author}</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
