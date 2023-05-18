import { Member, TaskData } from '../../types/NewSprintTypes';
import * as actions from './SprintActionType';

export type Sprint = {
  number(number: any): { type: string; payload: (id: any) => any; };
  id: number;
  title: string;
  startDate: string | null;
  endDate: string | null;
  tasks: TaskData[];
  memberTeamId: string | null;
  members: Member[];
  isHistorical: boolean | null;
  isActive: boolean | null;
};

const initialState = {
  sprint: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actions.GET_SPRINT:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SPRINT_SUCCESS:
      return {
        ...state,
        loading: false,
        sprint: action.payload,
      };
    case actions.GET_SPRINT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
