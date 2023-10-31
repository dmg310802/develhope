// Use the destructuring to make the check of the age easier. Try modifying the parameter of the isAdult function.

function isAdult(person) {
  if (person.age >= 18) {
    return "Is an adult";
  } else {
    return "Not an adult";
  }
  
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 13
};

console.log(isAdult(person));