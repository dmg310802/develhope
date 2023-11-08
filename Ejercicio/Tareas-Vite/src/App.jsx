import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './Task'

function App() {
    const [Tasks,setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    const addTask =()=>{

        if (newTask !== "") {
          setTasks([...Tasks,newTask]);
          setNewTask("");
        }



    }

    return (
      <div>
        <h1>Lista de Tasks</h1>
        <input type='text' 
        value={newTask} 
        onChange={(e)=>setNewTask(e.target.value)}>

        </input>
        <button
        onClick={addTask}
        >Add</button>
        <ul>
          {Tasks.map((task,index)=>(
            <Task key={index} text={task}></Task>
          ))}
        </ul>
        
        </div>



    )
}





export default App;
