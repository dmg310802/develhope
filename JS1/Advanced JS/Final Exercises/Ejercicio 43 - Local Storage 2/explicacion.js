// Paso 1: Definir una función llamada loadUserFromLocalStorage. Esta función se utilizará para recuperar y mostrar los datos del usuario almacenados en el localStorage.

// --> function loadLocalStorage() {
//   // Resto del código
// }

// Paso 2: En el interior de la función, obtenemos el valor JSON del usuario almacenado en el localStorage utilizando localStorage.getItem('user'). Esto recupera los datos del usuario previamente guardados en formato JSON.

// --> const userJSON = localStorage.getItem('user');

// Paso 3: Verificamos si userJSON tiene un valor distinto de null. Esto se hace para asegurarnos de que existan datos del usuario en el localStorage.

// --> if (userJSON) {
//   // Resto del código
// }

// Paso 4: Si hay datos del usuario en userJSON, procedemos a analizarlos desde JSON a un objeto de JavaScript. Utilizamos JSON.parse(userJSON) para realizar esta conversión.

// --> const user = JSON.parse(userJSON);

// Paso 5: Imprimimos el objeto user en la consola para mostrar los datos del usuario recuperados del localStorage.

// --> console.log(user);

// Paso 6: Si no se encuentran datos del usuario en el localStorage, mostramos un mensaje en la consola indicando que no se encontraron datos.

// --> console.log("No se encontraron datos de usuario en el almacenamiento local.");

// Este código permite cargar y mostrar los datos del usuario almacenados en el localStorage o proporcionar un mensaje si no se encuentran datos.

// Código completo:

// Código ejercicio anterior del que se parte:

const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveLocalStorage() {
  const userJson = JSON.stringify(user);
  localStorage.setItem("user", userJson);
}

saveLocalStorage();

// Código ejercicio actual:

function loadLocalStorage() {
  const userJSON = localStorage.getItem("user");
  if (userJSON) {
    const user = JSON.parse(userJSON);
    console.log(user);
  } else {
    console.log(
      "No se encontraron datos de usuario en el almacenamiento local."
    );
  }
}

// Llama a la función para cargar y mostrar el usuario guardado en localStorage
loadLocalStorage();
