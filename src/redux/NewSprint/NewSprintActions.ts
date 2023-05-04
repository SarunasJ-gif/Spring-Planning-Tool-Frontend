import * as actions from './NewSprintActionType';
import { Member, Task, TaskData, MemberWorkingDay } from '../../types/NewSprintTypes';
import { Dayjs } from 'dayjs';

export const addTask = (task: TaskData) => ({
  type: actions.ADD_TASK,
  payload: task,
});

export const removeTask = (id: number) => ({
    type: actions.REMOVE_TASK,
    payload: id,
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

export const updateTaskKeyValue = (id: number, value: string) => ({
  type: actions.UPDATE_TASK_KEY_VALUE,
  payload: { id, value },
});

export const updateTaskDescription = (id: number, value: string) => ({
  type: actions.UPDATE_TASK_DESCRIPTION,
  payload: { id, value },
});

export const updateTaskType = (id: number, value: string) => ({
  type: actions.UPDATE_TASK_TYPE,
  payload: { id, value },
});

export const updateTaskOldPoints = (id: number, value: number) => ({
  type: actions.UPDATE_TASK_OLD_POINTS,
  payload: { id, value },
});

export const updateTaskRemainingPoints = (id: number, value: number) => ({
  type: actions.UPDATE_TASK_REMAINING_POINTS,
  payload: { id, value },
});

export const updateTaskNewPoints = (id: number, value: number) => ({
  type: actions.UPDATE_TASK_NEW_POINTS,
  payload: { id, value },
});

export const createNewSprint = (sprintData: any) => ({
  type: actions.CREATE_NEW_SPRINT,
  payload: sprintData,
});


export const updateTaskAssign = (person: string, day: number, value: string, id: string) => ({
  type: actions.UPDATE_TASK_ASSIGN,
  payload: { person, day, value, id },
});

export const updateBusinessDays = (businessDays: string[], daysOfWeek: string[]) => ({
  type: actions.UPDATE_BUSINESS_DAYS,
  payload: { businessDays, daysOfWeek }
});
export const updateShowNotification = (showNotification: boolean) => ({
  type: actions.UPDATE_SHOW_NOTIFICATION,
  payload: showNotification,
});
