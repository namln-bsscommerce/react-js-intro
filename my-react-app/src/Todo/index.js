import { useReducer, useRef } from 'react';

import './index.css';

const Todo = () => {
    /**
     * Initial state
     * task: the value of the input <=> the task name to be added
     * tasks: the list of tasks already added and will be displayed
     */
    const initState = { task: '', tasks: [] };

    /**
     * Actions
     */
    const SET_TASK = 'SET_TASK';
    const ADD_TASK = 'ADD_TASK';
    const REMOVE_TASK = 'REMOVE_TASK';

    const inputElement = useRef();

    const addTask = () => {
        if (!state.task) return;

        const newTask = {
            name: state.task
        };

        if (state.tasks.length === 0) {
            newTask.id = 0;
        } else {
            newTask.id = state.tasks[state.tasks.length - 1].id + 1;
        }

        dispatch({ type: ADD_TASK, payload: newTask });

        // Clear the input and have it focused
        dispatch({ type: SET_TASK, payload: '' });
        inputElement.current.focus();
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case SET_TASK:
                return { ...state, task: action.payload };
            case ADD_TASK:
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload]
                };
            case REMOVE_TASK:
                return {
                    ...state,
                    tasks: state.tasks.filter(
                        (task) => task.id !== action.payload
                    )
                };
            default:
                throw new Error('Unknown action');
        }
    };

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div className="app">
            <h1 className="title">Todo</h1>
            <div className="action toolbar">
                <input
                    className="input"
                    ref={inputElement}
                    value={state.task}
                    type="text"
                    onChange={(event) =>
                        dispatch({
                            type: SET_TASK,
                            payload: event.target.value
                        })
                    }
                />
                &emsp;
                <button className="btn btn-add" onClick={addTask}>
                    Add task
                </button>
            </div>
            <ul className="list-task">
                {state.tasks.map((task) => (
                    <li className="task" key={task.id}>
                        <button
                            onClick={() => {
                                dispatch({
                                    type: REMOVE_TASK,
                                    payload: task.id
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
