// Create a function sumUntil that takes in a parameter and retunrs the sum of all numbers ranging from one to the value passed as parameter.

// Example:

// function sumUntil(maxValue) {
// // ...
// }

// console.log(sumUntil(5)); // OUTPUT: 15


let sumUntil = (a) => {
    if(typeof(a) !== "number"){
        console.log("This is not a number");
    } else {
        let sum = a;
        for (let i = 1; i < a; i++) {
            sum = sum + i; 
        }
        console.log(sum);
    }
};

sumUntil(10);