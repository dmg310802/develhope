import React,{ useState } from "react";

function AlertClock() {
    const [date, setDate] = useState('');


function AlertClockBTN() {
   const actualDate = new Date();
   const finalDate = actualDate.toLocaleTimeString();
   setDate(finalDate);
}

return (
    <>
    <p></p>
    <button onClick={AlertClockBTN}>Click me!</button>
    <p>The date is {date}</p>

    </>
);
}



export default AlertClock