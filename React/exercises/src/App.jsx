import Message from "./Message"
import Welcome from "./Welcome"
import Counter from "./Counter"
import React from "react";

const App = () => {

  return (
    <>
     <h2>Hello, World!</h2>
      <Message/>
     <Welcome name="John"/>
    <Counter />
    </>
  )
};

export default App;
