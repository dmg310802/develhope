// Create a function called nicknameMap that takes in an array of people and returns an array of nicknames. 
// The nickname should be composed in this way: <name>-<age>.

// Example:

// { name: 'Paul', age: 21 } => Paul-21

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

 
function nicknameMap(person) {
  return [person.name,person.age].join("-");
}


let nicknames = persons.map(nicknameMap);

console.log(persons);
console.log(nicknames);
