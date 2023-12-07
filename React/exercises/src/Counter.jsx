import React, {useState} from "react";


function Counter() {
    const [count,setCount] = useState(0);

    const addCounter = () => {
        setCount(count + 1);
    };

    const reduceCounter = () => {
        setCount(count - 1);
    };

    return(
        <>
            <h2>The count is: {count}</h2>
            <button onClick={addCounter}>Add</button>
            <button onClick={reduceCounter}>Reduce</button>
        </>
    );

}

export default Counter