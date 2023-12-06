function Welcome({name}) {

    if (name === "" || name === undefined ) {
        name = "Juan";
    }


    return (
      <>
       <p>Welcome {name}!</p>
      </>
    )
  }
  
  export default Welcome

  // If no name value is added, it only displays Welcome !
  