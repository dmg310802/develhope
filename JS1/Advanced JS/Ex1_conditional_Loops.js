// Create a function named calculateSalary which takes an input parameter, and calculates and returns the corresponding salary. You must use the switch switch statement. For each role the corresponding salary is as follows:

// ceo => 2200€
// manager => 1800€
// cto => 1800€
// developer => 1500€
// default => 1000€
// function calculateSalary(role) {
//   // ...
// }

let role = "manager";
let calculateSalary = 0; // Declare the variable outside the switch statement

switch (role) {
  case 'ceo':
    calculateSalary = 2200; // Assign the value without redeclaring
    break;
  case 'manager':
    calculateSalary = 1800;
    break;
  case 'cto':
    calculateSalary = 1800;
    break;
  case 'developer':
    calculateSalary = 1500;
    break;
  default:
    calculateSalary = 1000;
    break;
}

console.log(calculateSalary);


