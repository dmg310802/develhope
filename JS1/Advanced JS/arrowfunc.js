// Turn the variables functions into arrow functions and combine the functions so that the result of the following mathematical operation is printed on the 
// console: ((2 + 4) * (5 + 2) - 2) / 5

// const sum = function (a, b) {
//   return a + b;
// }

let sum = (a,b) => a+b;

// const subtract = function (a, b) {
//   return a - b;
// }

let subtract = (a,b) => a-b;

// const multiply = function (a, b) {
//   return a * b;
// }

let multiply = (a,b) => a*b;

// const divide = function (a, b) {
//   return a / b;
// }

let divide = (a,b) => a/b;


let opf = (a,b,c) => {
    console.log(((a+b)*(c+a)-a)/c)
};

opf(2,4,5);