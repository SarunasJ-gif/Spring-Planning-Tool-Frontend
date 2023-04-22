import * as actions from "./NewSprintActionType";

export const addTask = () => ({
    type: actions.ADD_TASK
});

export const removeTask = (key: string) => ({
    type: actions.REMOVE_TASK,
    payload: key
});