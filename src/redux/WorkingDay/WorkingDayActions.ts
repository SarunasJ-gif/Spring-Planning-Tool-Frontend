import * as actions from './WorkingDayActionType';
import { WorkingDay } from '../../types/NewSprintTypes';

export const updateWorkingDay = (id: number, taskKeyValue: string) => ({
    type: actions.UPDATE_WORKING_DAY,
    payload: { id, taskKeyValue },
  });