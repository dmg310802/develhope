import React, {useState} from "react";


function Counter({initialValue = 0,incrementAmount = 1}) {
    const [count,setCount] = useState(initialValue);
    // You can just use incrementAmount since it is not an initial state but an addition on the onClick function
    const addCounter = () => {
        setCount(count + incrementAmount);
    };

    const reduceCounter = () => {
        setCount(count - incrementAmount);
    };

    const resetCounter = () => {
        setCount(0)
    };


    return(
        <>
            <h2>The count is: {count}</h2>
            <button onClick={addCounter}>Add</button>
            <p></p>
            <button onClick={reduceCounter}>Reduce</button>
            <p></p>
            <button onClick={resetCounter}>Reset</button>
        </>
    );

}

export default Counter