import { useState, useRef } from "react";
import styles from "./Todo.module.css";

function Todo() {
    const [box, setBox] = useState([]);
    const [tasks, setTasks] = useState("");
    const bodyRef = useRef(null);

    function handleInpt(e) {
        setTasks(e.target.value);
    }

    function addTask() {
        setBox([...box, tasks]);
        setTasks("");
        console.log(box);
        console.log(tasks);
        if (bodyRef.current) {
            bodyRef.current.style.backgroundColor = "green";
        }
    }

    return (
        <center>
            <div className={styles.box} ref={bodyRef}>
                <h1>Todo App</h1>
                <input
                    type="text"
                    name="text1"
                    required
                    onChange={handleInpt}
                    value={tasks}
                    className={styles.inpt}
                />
                <br />
                <br />
                <button onClick={addTask} className={styles.btn}>
                    Add Task
                </button>
                <div>
                    {box.map((t, index) => (
                        <h1 key={index}>{t}</h1>
                    ))}
                </div>
            </div>
        </center>
    );
}

export default Todo;
