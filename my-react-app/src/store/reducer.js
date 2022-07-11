const initialState = {
    task: '',
    tasks: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_TASK':
            return {
                ...state,
                task: action.payload
            };
        case 'ADD_TASK':
            const newTask = {
                name: action.payload
            };

            if (state.tasks.length === 0) {
                newTask.id = 0;
            } else {
                newTask.id = state.tasks[state.tasks.length - 1].id + 1;
            }

            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case 'REMOVE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export { initialState };
export default reducer;
