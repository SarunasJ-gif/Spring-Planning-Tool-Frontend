import * as actions from "./NewSprintActionType";
import { TaskData } from "../../types/NewSprintTypes";

export const addTask = (task: TaskData) => ({
    type: actions.ADD_TASK,
    payload: task
});

export const removeTask = (keyValue: string) => ({
    type: actions.REMOVE_TASK,
    payload: keyValue
});