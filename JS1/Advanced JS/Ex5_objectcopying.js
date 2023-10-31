// In this exercise we have created two objects: person1 e person2. The object person2 has been assigned to the object person1. You should modify the property firstName of the object person2 in "Simon".

// Write a comment explaining why, by modifying the object person2, also the object person1 would be modified.

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {

}

// let person2 = person1;
// When you assign the objects to each other this way, they are tied to each other, the correct way would be:

Object.assign(person2,person1);

// person2["firstName"] = "Simon";
Object.defineProperty(person2, "firstName", {value : "Simon"})

console.log(person1);
console.log(person2);