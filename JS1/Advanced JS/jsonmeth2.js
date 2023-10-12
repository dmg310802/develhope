// Create the fromJson method that takes in a json as parameter and returns an object of type Person.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
}

const newP = new Person(1,"Mario","Rossi",25);
const json = JSON.stringify(newP)


console.log(json);

const developer = JSON.parse(json);
console.log(developer);