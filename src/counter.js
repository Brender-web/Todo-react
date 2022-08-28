let count = 0;

let addOne= () =>{
    count++;
    renderCounterApp();
};
let minusOne = () =>{
    count--;
    renderCounterApp();//component 
};
let reset = () =>{
    count = 0;
    renderCounterApp();
};


let appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>count:{count}</h1>
            <button onClick={addOne}> +1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
        );
        ReactDOM.render(template, appRoot);
    };
    renderCounterApp();
    
