import produce from 'immer';
import * as actions from './NewSprintActionType';
import { Member, TaskData } from '../../types/NewSprintTypes';
import mock_task from '../../components/TasksTable/mock_task.json';

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
    tasks: mock_task,
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
        const index = state.sprint.tasks.findIndex((o) => o.id === payload);
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
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].keyValue = payload.value;
      });

    case actions.UPDATE_TASK_DESCRIPTION:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].description = payload.value;
      });
    case actions.UPDATE_TASK_TYPE:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].type = payload.value;
      });
    case actions.UPDATE_TASK_OLD_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].oldPoints = payload.value;
      });
    case actions.UPDATE_TASK_REMAINING_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].remainingPoints = payload.value;
      });
    case actions.UPDATE_TASK_NEW_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex((o) => o.id === payload.id);
        draftState.sprint.tasks[index].newPoints = payload.value;
      });
    default:
      return state;
  }
};
export default reducer;
