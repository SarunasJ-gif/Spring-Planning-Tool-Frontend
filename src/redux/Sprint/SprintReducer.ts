import { Member, TaskData } from '../../types/NewSprintTypes';
import * as actions from './SprintActionType';

export type Sprint = {
  title: string;
  startDate: string | null;
  endDate: string | null;
  tasks: TaskData[];
  memberTeamId: string | null;
  members: Member[];
  isHistorial: boolean | undefined;
  isActive: boolean | undefined;
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
        sprint: {
          title: action.payload.title,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          tasks: action.payload.tasks,
          memberTeamId: action.payload.memberTeamId,
          members: action.payload.members,
          isHistorial: action.payload.isHistorial,
          isActive: action.payload.isActive,
        },
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
