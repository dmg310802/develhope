// El objetivo de este ejercicio es obtener el valor del campo de entrada de texto con la clase form-input y mostrarlo en la consola. A continuación, te mostraré cómo hacerlo paso a paso:

// Paso 1: Selecciona todos los elementos <input> con la clase form-input en el DOM y guárdalos en una NodeList.
const formInputs = document.querySelectorAll(".form-input");

// Paso 2: Itera a través de la lista de elementos con forEach y obtén el valor de cada campo de entrada utilizando la propiedad value.
formInputs.forEach((input) => {
  const value = input.value;
  console.log(value); // Paso 3: Esto imprimirá en la consola el valor de todos los campos de entrada con la clase form-input.
});
