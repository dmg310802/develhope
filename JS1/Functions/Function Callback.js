//One is main function and two is your callback function

function one(callback) {
  //can happen when calling an api
  setTimeout(function () {
    console.log("First");
    callback();
  }, 500);
}

function two(){
    console.log("Second")
}

one(two);