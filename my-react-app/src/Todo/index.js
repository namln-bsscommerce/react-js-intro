import { useState } from 'react';
import { useReducer } from 'react';

import './index.css';

const Todo = () => {
    const [task, setTask] = useState({ id: 0, name: '' });

    const initTasks = [];

    const ADD_TASK = 'ADD_TASK';
    const REMOVE_TASK = 'REMOVE_TASK';

    const reducer = (state, action) => {
        switch (action.type) {
            case ADD_TASK:
                return [...state, action.payload];
            case REMOVE_TASK:
                return state.filter((task) => task.id !== action.payload.id);
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    };

    const [tasks, dispatch] = useReducer(reducer, initTasks);

    const addTask = () => {
        if (task.name) {
            setTask((prevState) => ({
                id: prevState.id + 1,
                name: prevState.name
            }));
            dispatch({ type: ADD_TASK, payload: task });
            const taskInput = document.getElementById('task-input');
            taskInput.value = '';
            taskInput.focus();
            setTask((prevState) => ({ id: prevState.id, name: '' }));
        }
    };

    const removeTask = (task) => {
        dispatch({ type: REMOVE_TASK, payload: task });
    };

    const updateTaskName = (event) => {
        setTask((prevState) => ({
            id: prevState.id,
            name: event.target.value
        }));
    };

    return (
        <div className="app">
            <h1 className="title">Todo</h1>
            <div className="action toolbar">
                <input
                    className="input"
                    id="task-input"
                    type="text"
                    onChange={(event) => updateTaskName(event)}
                />
                &emsp;
                <button className="btn btn-add" onClick={addTask}>
                    Add task
                </button>
            </div>
            <ul className="list-task">
                {tasks.map((task) => (
                    <li className="task" key={task.id}>
                        <button
                            onClick={() => {
                                console.log(task);
                                removeTask({
                                    id: task.id,
                                    name: task.name
                                });
                            }}
                            id="remove-task"
                            className="remove-task"
                        >
                            &#10006;
                        </button>
                        &emsp;
                        {task.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
