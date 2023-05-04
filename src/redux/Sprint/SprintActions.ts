import * as actions from './SprintActionType';
import { TaskData } from '../../types/NewSprintTypes';

export const addTask = (task: TaskData) => ({
  type: actions.ADD_TASK,
  payload: task,
});
