function sayHelloName(callback) {
//  setTimeout(function () {
//    
console.log("Hello");
    callback();
//  }, 
//  500);
}

function printName() {
console.log("Daniel");
}

sayHelloName(printName);
