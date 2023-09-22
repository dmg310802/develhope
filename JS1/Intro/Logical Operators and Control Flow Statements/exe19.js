let name;
let surname = " Rossi";


let isString = typeof(nombre) !== "string" || typeof(surname) !== "string";


if (isString == false) {
  console.log(nombre + surname);
} else {
  console.log("Full name is invalid");
}
