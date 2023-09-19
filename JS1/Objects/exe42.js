/** Constructor Functions

function Worker(name, age, nationality) {
  this.name = name;
  if(typeof(age) === "number") {
    this.age = age;
  } else {

  }
  this.nationality = nationality;
}

let daniel = new Worker("Daniel", 24, "Mexico");
let jose = new Worker("Jose", 27, "USA");

console.log(daniel);
console.log(jose);

*/

function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price + " euros";
}

let iPhone = new Smartphone("Apple", "14", 2000);
let samsung = new Smartphone("Samsung", "E10", 1500);

console.log(iPhone);
console.log(samsung);
