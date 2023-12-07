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
    <Counter />
    <AlertClock/>
    </>
  )
};

export default App;
