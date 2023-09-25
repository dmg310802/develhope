// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age).
//  Create the getters and setters methods for each property and a getter method called fullName that returns the full name.

class Person {
    #firstName = "";
    #lastName = "";
    #age = 0;
    constructor(firstName, lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
        }

        //SET
        set firstName(newName){
            if (typeof(newName) === "Object" ) {
                this.#firstName = "Invalid"
            } else {
                this.#firstName = newName;
            }
        }

        set lastName(newLName){
            if (typeof(newLName) === "Object" ) {
                this.#lastName = "Invalid"
            } else {
                this.#lastName = newLName;
            }
        }
        set age(newAge){
            if (typeof(newAge) === "Number" ) {
                this.#age = "Invalid";
            } else if(newAge < 0){
                this.#age = "Invalid";
            } else if(newAge >110) {
                this.#age = "Invalid";
            } else {
                this.#age = newAge;
            }
        }
        //GET
        get firstName(){
            return this.#firstName;
        }

        get lastName(){
            return this.#lastName;
        }

        get age(){
            return this.#age;
        }

        get fullName(){
            return this.#firstName + " " + this.#lastName;
        }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
