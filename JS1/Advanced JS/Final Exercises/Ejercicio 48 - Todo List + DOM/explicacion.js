// El objetivo de este ejercicio es realizar una solicitud de red a una URL para obtener una lista de tareas (todos) y luego crear dinámicamente una lista HTML (<ul>) que contenga elementos de lista (<li>) que muestren el título de cada tarea. Estos elementos de lista deben ser agregados al contenedor con la clase .todo-list.

// 1 - En el HTML, asegúrate de tener un elemento en el cual puedas agregar los elementos de la lista (<ul class="todo-list">).

// 2 - Modifica la función fetchTodolist() para que, en lugar de mostrar los todos en la consola, los agregue dinámicamente a la lista HTML.

// 3 - Obtén el elemento de la lista en el que deseas agregar los todos. Puedes usar document.querySelector('.todo-list') para seleccionar el elemento.

// 4 - Itera sobre la lista de todos y, para cada tarea, crea un nuevo elemento de lista (<li>) y asigna el título de la tarea como su contenido.

// 5 - Agrega el elemento de lista creado a la lista HTML (<ul>).

async function fetchTodolist() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const todolist = await response.json();
    // return todolist; --> Esto que lo teníamos del ejercicio anterior, lo eliminamos.
    const todoListContainer = document.querySelector(".todo-list"); // Paso 3

    todolist.forEach((todo) => {
      const listItem = document.createElement("li"); // Paso 4
      listItem.textContent = todo.title;
      todoListContainer.appendChild(listItem); // Paso 5
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// También quitamos:

// fetchTodolist()
//   .then((todos) => {
//     if (todos) {
//       console.log(todos);
//     } else {
//       console.log("No todos data found.");
//     }
//   })
//   .catch((error) => {
//     console.error("Error");
//   });

fetchTodolist().catch((error) => {
  console.error("Error");
});

// Este código modifica la función fetchTodolist() para agregar dinámicamente los elementos de lista al elemento con la clase .todo-list en el HTML. Crea un nuevo elemento de lista para cada tarea y establece el título de la tarea como el contenido del elemento de lista. Luego, agrega este elemento de lista al contenedor de la lista (<ul>).
