function sayHelloName(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 1);
}

function printName() {
  console.log("Daniel");
}

sayHelloName(printName);
