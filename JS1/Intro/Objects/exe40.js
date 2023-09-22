let user = {
    name: "Cosimo",
    age: 30,
  };

let newUser = {}

  let copyUser = Object.assign(newUser, user);
  
  newUser["name"] = "Paolo";
  
  console.log(user["name"]);
  console.log(user["age"]);
  

  console.log(newUser["name"]);
  console.log(newUser["age"]);
  