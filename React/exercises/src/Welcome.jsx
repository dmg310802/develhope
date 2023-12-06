function Welcome({name,age}) {

    if (name === "" || name === undefined ) {
        name = "Juan";
    }


    return (
      <>
       <p>Welcome {name}!</p>
       <p>You are {age} years old!</p>
      </>
    )
  }
  
  export default Welcome

  // If no name value is added, it only displays Welcome !
  