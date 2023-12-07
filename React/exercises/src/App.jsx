import Message from "./Message"
import Welcome from "./Welcome"
import Counter from "./Counter"
import React from "react";
import AlertClock from "./AlertClock";

const App = () => {

  return (
    <>
     <h2>Hello, World!</h2>
      <Message/>
     <Welcome name="John"/>
    <Counter initialValue={20} incrementAmount={5}/>
    <AlertClock/>
    </>
  )
};

export default App;
