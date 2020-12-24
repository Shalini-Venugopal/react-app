let count = 0;
const addOne = () => {
    //console.log('addOne');
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const counter = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>Count+1</button>
            <button onClick= {minusOne}>Count-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );



ReactDOM.render(counter, appRoot);
};
renderCounterApp();
