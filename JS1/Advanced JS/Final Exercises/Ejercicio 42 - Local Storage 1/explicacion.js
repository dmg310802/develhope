// Objetivo del Ejercicio: El objetivo de este ejercicio es guardar el objeto de usuario (user) en el almacenamiento local (localStorage) del navegador con una clave llamada 'user'.

// Pasos para Guardar el Objeto en localStorage:

// 1 - Convierte el Objeto en una Cadena JSON:
// Primero, necesitas convertir el objeto user en una cadena JSON utilizando la función JSON.stringify. Esto es necesario porque localStorage solo puede almacenar datos como cadenas.

// --> const userJSON = JSON.stringify(user);

// 2 - Guarda la Cadena en localStorage:
// Luego, utiliza la función localStorage.setItem() para guardar la cadena JSON en el almacenamiento local. Debes proporcionar una clave (en este caso, 'user') y el valor (la cadena JSON).

// -->localStorage.setItem('user', userJSON);

// Esto guardará el objeto user en localStorage con la clave 'user'.

// _____________A continuación, te muestro el código completo:________________

const user = {
  id: 1,
  name: "John",
  age: 25,
};

// Paso 1: Convierte el objeto en una cadena JSON
const userJSON = JSON.stringify(user);

// Paso 2: Guarda la cadena en localStorage con la clave 'user'
localStorage.setItem("user", userJSON);

// Después de ejecutar este código, el objeto user se almacenará en localStorage bajo la clave 'user'. Puedes acceder a él más tarde utilizando localStorage.getItem('user') y luego convertirlo de nuevo a un objeto JSON si es necesario utilizando JSON.parse().

//_______________________________________________

// Puedes encapsular la funcionalidad de guardar el objeto del usuario en localStorage en una función para hacer tu código más modular y reutilizable. Aquí tienes cómo puedes hacerlo (ASÍ ES COMO DEJÉ HECHO EL EJERCICIO - Descomentar a partir de aquí para verlo más claro):

// function saveLocalStorage(user) {
//   //   const userJSON = JSON.stringify(user); --> Esto se puede hacer también aquí dentro, pero yo lo he hecho fuera. Puedes definir la variable userJSON dentro o también fuera de la función si deseas. De hecho, si planeas usarla en múltiples lugares o si prefieres tener una mejor visibilidad de la variable, es una buena idea declararla antes de la función. Puedes colocarla antes de la creación de la función o en cualquier lugar válido dentro del mismo ámbito (como en la parte superior de tu script)
//   localStorage.setItem("user", userJSON);
// }

// const user = {
//   id: 1,
//   name: "John",
//   age: 25,
// };

// // Llama a la función para guardar el usuario en localStorage
// saveLocalStorage(user);
