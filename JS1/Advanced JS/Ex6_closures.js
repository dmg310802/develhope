// Try to write your first closure. 
// Write a function called printName and declare inside it a variable called helloName, 
// the value of this variable will be: "Hello John". 
// Also declare a function named inner and return the helloName variable. The purpose is printing "Hello John" in the console.


let helloName = "Hello John";

function printName() {
    return helloName;
}

console.log(printName());

function inner() {
    return helloName;
}

console.log(inner());