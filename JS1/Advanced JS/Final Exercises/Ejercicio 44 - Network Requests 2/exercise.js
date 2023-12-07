const container = document.getElementById("container");

async function fetchToDoList() {
  try {
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
