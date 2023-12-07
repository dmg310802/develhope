async function fetchTodolist() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const todolist = await response.json();
    // return todolist; --> Borramos
    // A partir de aquí añadimos:
    const todoListContainer = document.querySelector(".todo-list"); // Paso 3

    todolist.forEach((todo) => {
      const listItem = document.createElement("li"); // Paso 4
      listItem.textContent = todo.title;
      todoListContainer.appendChild(listItem); // Paso 5
    });
    //A partir de aquí ya lo teníamos.
  } catch (error) {
    console.error("Error:", error);
  }
}

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
