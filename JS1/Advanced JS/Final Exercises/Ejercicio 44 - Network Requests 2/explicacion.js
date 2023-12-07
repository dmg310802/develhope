// El objetivo de este ejercicio es utilizar async y await para realizar una solicitud HTTP para recuperar un elemento Todo con el ID 4 a través de una URL y luego agregar la información de ese elemento Todo a la página HTML.

// Aquí tienes los pasos a seguir:

// Paso 1: Primero, debemos seleccionar el elemento <div> con el id="container" desde el DOM para que podamos agregar elementos dentro de él. Luego, definiremos una función fetchTodo que será asíncrona y manejará todo el proceso de solicitud.

// async function fetchTodoList() {
//   const container = document.getElementById('container');
//   try {
//     // Resto del código
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchTodo();

// Paso 2: Realizamos la solicitud HTTP para obtener el elemento Todo con ID 4 utilizando await con fetch.

// const response = await fetch('https://jsonplaceholder.typicode.com/todos/4'); //Podemos hacerlo dentro o fuera de la función.

// Paso 3: Verificamos que la solicitud haya tenido éxito. Si es así, analizamos la respuesta en formato JSON.

// if (response.ok) {
//   const toDo = await response.json();
//   // Resto del código
// }

// Paso 4: Creamos un elemento <h2> para mostrar el título del Todo, configuramos su contenido y lo agregamos al contenedor.

// const h2 = document.createElement('h2');
// h2.textContent = toDo.title;
// container.appendChild(h2);

// Paso 5: Creamos un elemento <input> de tipo "checkbox" para reflejar el estado de completado del Todo y configuramos su propiedad "checked" en función de la propiedad "completed" del Todo. Luego, agregamos el elemento <input> al contenedor.

// const input = document.createElement('input');
// input.type = 'checkbox';
// input.checked = toDo.completed;
// container.appendChild(input);

// Paso 6: Finalmente, al final de la función fetchTodo, cualquier error que se produzca se capturará y se mostrará en la consola.

// } catch (error) {
//   console.error('Error:', error);
// }

// Paso 7: Llamada a la función:

// fetchToDoList();

// Este código realizará una solicitud HTTP para obtener el Todo con ID 4, y luego mostrará su título y estado de completado en el contenedor dentro del HTML. Cualquier error se manejará y se mostrará en la consola.

// Código completo del ejercicio:

const container = document.getElementById("container"); //Podemos hacerlo aquí o también dentro de la función, donde se encuentra comentado.

async function fetchToDoList() {
  try {
    // const container = document.getElementById("container");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    if (response.ok) {
      const toDo = await response.json();
      const h2 = document.createElement("h2"); // Creando h2 (parte 1).
      h2.textContent = toDo.title; // Creando h2 (parte 2). Diciéndole cuál será el texto contenido en ese h2 (el título, es decir, la propiedad title del json).
      container.appendChild(h2); // Agregando el h2 creado al contenedor.

      const input = document.createElement("input"); // Creando input.
      input.type = "checkbox"; // Diciéndole que el input sea del tipo checkbox.
      input.checked = toDo.completed; // Diciéndolo que la propiedad checked esté o no completada en función de cómo esté en el json (true o false).
      container.appendChild(input); // Agregando el input al contenedor.
    }
  } catch (error) {
    console.error("Error", error);
  }
}

fetchToDoList();
