console.log("App.js is running");

var app ={
    title : 'React App',
    subtitle : 'Put your life on Learning',
    options : ['React JS', 'Java']
};
var templateTwo = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>List 1</li>
            <li>List 2</li>
        </ol>
    </div>

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
