// Perform a code refactoring by using the Rest Operator. 
// The output of the console.log must be the same.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};


function toOutput(person) {
    const { id, ...rest } = person;
    return rest;
  }


const id = person.id;
const personInfo = {
 ...person
};

console.log(id,toOutput(person));

