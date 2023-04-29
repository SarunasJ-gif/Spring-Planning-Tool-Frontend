import * as actions from './NewSprintActionType';
import { TaskData } from '../../types/NewSprintTypes';
import { Dayjs } from 'dayjs';

export const addTask = (task: TaskData) => ({
  type: actions.ADD_TASK,
  payload: task,
});

export const removeTask = (keyValue: string) => ({
  type: actions.REMOVE_TASK,
  payload: keyValue,
});

export const updateStartDate = (startDate: Dayjs | null) => ({
  type: actions.UPDATE_START_DATE,
  payload: startDate ? startDate.toISOString() : null,
});

export const updateEndDate = (endDate: Dayjs | null) => ({
  type: actions.UPDATE_END_DATE,
  payload: endDate ? endDate.toISOString() : null,
});

export const updateTitle = (title: string) => ({
  type: actions.UPDATE_TITLE,
  payload: title,
});

export const updateTaskKeyValue = (keyValue: string) => ({
  type: actions.UPDATE_TASK_KEY_VALUE,
  payload: keyValue,
});

export const updateTaskKeyColor = (keyColor: string) => ({
  type: actions.UPDATE_TASK_KEY_COLOR,
  payload: keyColor,
});

export const updateTaskDescription = (description: string) => ({
  type: actions.UPDATE_TASK_DESCRIPTION,
  payload: description,
});

export const updateTaskType = (type: string) => ({
  type: actions.UPDATE_TASK_TYPE,
  payload: type,
});

export const updateTaskOldPoints = (oldPoints: string) => ({
  type: actions.UPDATE_TASK_OLD_POINTS,
  payload: oldPoints,
});

export const updateTaskRemainingPoints = (remainingPoints: string) => ({
  type: actions.UPDATE_TASK_REMAINING_POINTS,
  payload: remainingPoints,
});

export const updateTaskNewPoints = (newPoints: string) => ({
  type: actions.UPDATE_TASK_OLD_POINTS,
  payload: newPoints,
});



