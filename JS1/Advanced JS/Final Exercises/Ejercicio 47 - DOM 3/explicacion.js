// El objetivo de este ejercicio es obtener el valor de los campos de entrada (input) y las etiquetas (label) y mostrar estos valores en la consola. Aquí tienes los pasos para lograrlo:

// 1 - Selecciona todos los elementos con la clase "form-input" y almacénalos en un NodeList.
// 2 - Itera sobre los elementos del NodeList y, para cada elemento, obtén el valor del campo de entrada y el texto de la etiqueta.
// 3 - Muestra estos valores en la consola en el formato deseado.
// A continuación, te proporciono el código correspondiente:

// Paso 1: Selecciona todos los elementos con la clase "form-input"
const elements = document.querySelectorAll(".form-input");

// Paso 2: Itera sobre los elementos y obtén los valores del campo de entrada y el texto de la etiqueta
elements.forEach((element) => {
  const label = element.parentElement.querySelector("label").textContent; // Estamos determinando que todas las variables label serán el texto contenido en todos los label html (a través del elemento padre del element y con querySelector).
  const value = element.value;

  // Paso 3: Muestra los valores en la consola en el formato deseado
  console.log(`${label} ${value}`);
});

// Este código selecciona todos los elementos con la clase "form-input", obtiene el texto de la etiqueta y el valor del campo de entrada, y luego los muestra en la consola siguiendo el formato especificado en el enunciado del ejercicio.
