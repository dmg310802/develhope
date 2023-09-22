//Conditional Ope Ex 15
let age = 20;

let ageLimit = age >= 18;
let ageIsNum = String(typeof(age)) == "number";

let canDrive = ageLimit && ageIsNum ? "Can Drive" : "Can't Drive";
console.log(canDrive);