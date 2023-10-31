// Create a function called uncompletedNotes that returns only not completed todos.

const notes = [
  { //Note
    id: 1, //Content
    description: "Workout program", //Content
    todos: [ //Content
      { //List
        id: 1, //Goal
        name: "Push ups - 10 x 3",
        done: false,
      },
      { //List
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      { //List
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  { // Note
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];

const notDone = notes.filter(uncompletedNotes)

function uncompletedNotes(notes) { 
    const uncompletedNotes = []

    notes.forEach(note => {
        const uncompletedTodos = note.todos.filter(uncompletedNote) 
        
        function uncompletedNote(todo){
            return todo.done === false;
        }
        return uncompletedTodos;
    });

    return (uncompletedNotes,uncompletedTodos);
}


console.log(uncompletedNotes(notes));

