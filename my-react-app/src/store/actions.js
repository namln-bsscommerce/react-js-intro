import { SET_TASK, ADD_TASK, REMOVE_TASK } from './constants';

export const setTask = (task) => {
    return {
        type: SET_TASK,
        payload: task
    };
};

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export const removeTask = (taskId) => {
    return {
        type: REMOVE_TASK,
        payload: taskId
    };
};
