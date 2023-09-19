//global scope: anywhere in the file
// if you use let, the global scope is not affected by block scope, if you use var it is


let globalfunction = 1;
console.log(globalfunction);

if (true) {
  // block scope
  let globalfunction = 2;
  console.log(globalfunction);
}

function func() {
  //function scope (local scope, overrides global)
  let globalfunction = 2;
  console.log(globalfunction);
}

func();


// if you use this.variable, the value of the variable will be only within that scope (block, function or global)