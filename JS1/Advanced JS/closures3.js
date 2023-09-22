// Write a new closure: create a function called multiplyByTwo that takes in one parameter. Inside the multiplyByTwo function, create a function called inner. This function will take care of multiplying the parameter passed as input and multiply it by the variable named number Print in the console the function output.

// Example: multiplyByTwo(4)(), result: 8


let a = 4

function multiplyByTwo(a) {
    this.number = a
    function inner() {
         return a * 2; 
    }
    return inner;
}

console.log(multiplyByTwo(4)());