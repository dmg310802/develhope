let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = {};

for (const value in user) {
  console.log(user[value]);
  newUser[value] = user[value];
}

newUser["name"] = "Paolo";

console.log(newUser["name"]);
console.log(newUser["age"]);
