import { useRef } from 'react';
import { useStore, actions } from './store';

import './App.css';

function App() {
    const [state, dispatch] = useStore();
    const { task, tasks } = state;
    const { setTask, addTask, removeTask } = actions;

    const inputElement = useRef();

    const triggerAddTask = () => {
        if (task) {
            dispatch(addTask(task));
            dispatch(setTask(''));
        }
        inputElement.current.focus();
    };

    const triggerRemoveTask = (taskId) => {
        dispatch(removeTask(taskId));
    };

    return (
        <div className="App">
            <h1 className="title">Todo App</h1>
            <div className="task-field">
                <input
                    className="task-input"
                    type="text"
                    autoFocus 
                    value={task}
                    ref={inputElement}
                    onChange={(e) => {
                        dispatch(setTask(e.target.value));
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            triggerAddTask();
                        }
                    }}
                />
                <button className="btn" onClick={triggerAddTask}>
                    Add task
                </button>
            </div>
            <div className="list-task">
                <h2 className="list-title">Task list</h2>
                <ul className="list-items">
                    {tasks.map((item) => (
                        <li className="item" key={item.id}>
                            <div>
                                <p>{item.name}</p>
                                <span
                                    className="icon icon-delete"
                                    onClick={() => triggerRemoveTask(item.id)}
                                ></span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
