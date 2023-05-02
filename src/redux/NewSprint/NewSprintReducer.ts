import produce from 'immer';
import * as actions from './NewSprintActionType';
import { Member, Sprint, TaskData } from '../../types/NewSprintTypes';
import { set } from 'immer/dist/internal';

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
        draftState.sprint.title = payload;
      });


    case actions.UPDATE_TASK_KEY_VALUE:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o: TaskData) => o.keyValue === payload
        );
        draftState.sprint.tasks[index].keyValue = payload;

      });

    case actions.UPDATE_TASK_DESCRIPTION:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.description === payload,
        );
        draftState.sprint.tasks[index].description = payload;
      });
    case actions.UPDATE_TASK_TYPE:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.type === payload,
        );
        draftState.sprint.tasks[index].type = payload;
      });
    case actions.UPDATE_TASK_OLD_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.oldPoints === payload,
        );
        draftState.sprint.tasks[index].oldPoints = payload;
      });
    case actions.UPDATE_TASK_REMAINING_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.remainingPoints === payload,
        );
        draftState.sprint.tasks[index].remainingPoints = payload;
      });
    case actions.UPDATE_TASK_NEW_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.newPoints === payload,
        );
        draftState.sprint.tasks[index].newPoints = payload;
      });
    default:
      return state;
  }
};
export default reducer;



