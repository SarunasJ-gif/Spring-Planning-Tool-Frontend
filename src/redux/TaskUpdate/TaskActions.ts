import * as actions from './TaskActionType';
import { TaskData } from '../../types/NewSprintTypes';

export const updateTaskKeyValue = (keyValue: string) => ({
    type: actions.UPDATE_TASK_KEY_VALUE,
    payload: keyValue,
});


export const updateTaskDescription = (description: string) => ({
    type: actions.UPDATE_TASK_DESCRIPTION,
    payload: description,
});

export const updateTaskType = (type: string) => ({
    type: actions.UPDATE_TASK_TYPE,
    payload: type,
});

export const updateTaskOldPoints = (oldPoints: number) => ({
    type: actions.UPDATE_TASK_OLD_POINTS,
    payload: oldPoints,
});

export const updateTaskRemainingPoints = (remainingPoints: number) => ({
    type: actions.UPDATE_TASK_REMAINING_POINTS,
    payload: remainingPoints,
});

export const updateTaskNewPoints = (newPoints: number) => ({
    type: actions.UPDATE_TASK_OLD_POINTS,
    payload: newPoints,
});