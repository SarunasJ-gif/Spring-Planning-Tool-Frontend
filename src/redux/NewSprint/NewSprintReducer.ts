import produce from 'immer';
import * as actions from './NewSprintActionType';
import { Member, TaskData } from '../../types/NewSprintTypes';

export type NewSprint = {
  sprint: {
    title: string;
    startDate: string | null;
    endDate: string | null;
    tasks: TaskData[];
    memberTeamId: string | null;
    members: Member[];
  };
};
const initialState: NewSprint = {
  sprint: {
    title: '',
    startDate: null,
    endDate: null,
    tasks: [],
    memberTeamId: null,
    members: [],
  },
};

// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.ADD_TASK:
      return produce(state, (draftState) => {
        draftState.sprint.tasks.push(payload);
      });
    case actions.REMOVE_TASK:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.keyValue === payload,
        );
        draftState.sprint.tasks.splice(index, 1);
      });
    case actions.UPDATE_START_DATE:
      return produce(state, (draftState) => {
        draftState.sprint.startDate = payload;
      });
    case actions.UPDATE_END_DATE:
      return produce(state, (draftState) => {
        draftState.sprint.endDate = payload;
      });
    case actions.UPDATE_TITLE:
      return produce(state, (draftState) => {
        draftState.sprint.title = payload.title;
      });
    default:
      return state;
  }
};

export default reducer;
