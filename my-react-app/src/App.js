import { useState } from "react";
import "./App.css";

function App() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    /**
     * Add new task to task list then clear task input
     */
    const addTask = () => {
        // Add new task
        if (task)
            setTasks(prev => {
                return [...prev, { id: prev.length + 1, content: task }];
            });

        // Clear task input
        setTask('');
    }

    /**
     * Delete task with corresponding id
     * 
     * @param {*} taskId id of the task that needs deleting
     */
    const deleteTask = (taskId) => {
        setTasks(prev => {
            return prev.filter(task => task.id !== taskId)
        })
    }

    /**
     * If user hit enter while typing input, trigger the add task action
     * 
     * @param {*} event 
     */
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    }

    return (
        <div className="App">
            <h1 className="title">Todo App</h1>
            <div className="task-field">
                <input
                    className="task-input"
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    type="text"
                    value={task}
                />
                <button className="btn" onClick={addTask}>Add task</button>
            </div>
            <div className="task-list">
                <h2 className="list-title">Task list</h2>
                <ul className="list-items">
                    {tasks.map(item => (
                        <li className="item" key={item.id}>
                            {item.content}
                            <span className="icon icon-delete" onClick={() => deleteTask(item.id)}></span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
