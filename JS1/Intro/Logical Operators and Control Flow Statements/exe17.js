//IF statement Ex17
let age = 16;

let ageLimit = age >= 18;
let ageIsNum = String(typeof age) === "number";

let canDrive = "";

if (ageLimit && ageIsNum) {
  //True
  canDrive = "You can Drive!";
  console.log(canDrive);
} else {
  //False
  canDrive = "You can't Drive!";
  console.log(canDrive);
}
