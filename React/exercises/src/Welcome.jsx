import Age from "./Age";

function Welcome({name,age}) {

    if (name === "" || name === undefined ) {
        name = "Daniel";
    }


    return (
      <>
       <p>Welcome {name}!</p>
       <p>You are {age} years old!</p>
       <Age age={25}/>
      </>
    )
  }
  
  export default Welcome

  // If no name value is added, it only displays Welcome !
  