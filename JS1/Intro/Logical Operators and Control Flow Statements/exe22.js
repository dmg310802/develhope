//Switch Ex22

let primitive = undefined;

switch (typeof primitive) {
  case "string":
    console.log("This variable is a string");
    break;
  case "number":
    console.log("This variable is a number");
    break;
  case "boolean":
    console.log("string");
    break;
  default:
    console.log("Not defined");
    break;
}
