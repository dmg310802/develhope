function Age({age}) {

    return (
      <>
       {age > 18 && <p>You are {age} years old!</p>}
       {age && <p>You are {age} years old!</p>}
       {age > 18 && age <65 && <p>You are {age} years old!</p>}
       {age > 18 && age <65 && <p>You are {age} years old!</p>}
       
      </>
    )
  }
  
  export default Age
  