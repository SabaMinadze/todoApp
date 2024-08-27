import { useState, useRef } from "react"
import styles from "./Todo.module.css"

function Todo() {
    const list = ["saba", "nini", "bitcamp"]
    const [box, setBox] = useState([])
    const [tasks, setTasks] = useState("")
    const bodyRef = useRef(null)
    

    function handleInpt(e) {
        setTasks(e.target.value)
    }

    function addTask() {
        setBox([...box, tasks])
        setTasks("")
        console.log(box)
        console.log(tasks);
        if (bodyRef.current) {
            bodyRef.current.style.backgroundColor = "green"
        }
    }

  return (
    <center><div className={styles.box} ref={bodyRef}>
        <h1>Todo App</h1>
        <input
         type="text"
         name="text1"
         required onChange={handleInpt} 
         value={tasks} 
         className={styles.inpt}
         /><br /><br />
        <button onClick={addTask} className={styles.btn}>Add Task</button>
        <h2>{box.map(t => <h2>{t}</h2>)}</h2>

    </div></center>
  )
}

export default Todo