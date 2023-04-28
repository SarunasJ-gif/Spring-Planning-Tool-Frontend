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
