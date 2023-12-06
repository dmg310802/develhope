import Message from "./Message"
import Welcome from "./Welcome"

function HelloWorld() {

  return (
    <>
     <h2>Hello, World!</h2>
     <Message/>
     <Welcome name="" age={20} />
    </>
  )
}

export default HelloWorld
