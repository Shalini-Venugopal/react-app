console.log("App.js is running");

// const app ={
//     title : 'React App',
//     subtitle : 'Put your life on Learning',
//     options : ['React JS', 'Java']
// };
// const templateTwo = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//         <ol>
//             <li>List 1</li>
//             <li>List 2</li>
//         </ol>
//     </div>

// );


// const user ={
//     name : 'ABCD',
//     age : 25,
//     location : 'USA'
// };
// function getLocation(location){
//     if (location){
//         return <p>Location : {location}</p>;
//     }
// }
// const template = (
//     <div>
//         <h1>Name : {user.name ? user.name : 'Anonymous'}</h1>
//         {user.age >=18 && <p>Age :{user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
};
const counter = (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>Count+1</button>
        <button onClick= {minusOne}>Count-1</button>
        <button onClick={reset}>Reset</button>
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(counter, appRoot);
