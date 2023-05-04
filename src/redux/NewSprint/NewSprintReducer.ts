import produce, { Draft } from 'immer';
import * as actions from './NewSprintActionType';
import { Member, MemberWorkingDay, Sprint, TaskData } from '../../types/NewSprintTypes';


export type NewSprint = {
  sprint: {
    title: string;
    startDate: string | null;
    endDate: string | null;
    tasks: TaskData[];
    memberTeamId: string | null;
    members: Member[];
    businessDays: string[];
    daysOfWeek: string[];
    showNotification: boolean;
  };
};
export const initialState: NewSprint = {
  sprint: {
    title: '',
    startDate: null,
    endDate: null,
    tasks: [],
    memberTeamId: null,
    members: [{
      firstName: 'John',
      lastName: 'Doe',
      memberId: '1',
      workingDays: [
        {
          day: '2023-04-24',
          task: {
            keyValue: 'ASDF!123',
            keyColor: '#FF0000',
            description: 'Task 1',
            type: 'Goal',
            oldPoints: 0,
            remainingPoints: 0,
            newPoints: 0,
          },
        },
        {
          day: '2023-04-25',
          task: {
            keyValue: 'QWERTY!456',
            keyColor: '#0000FF',
            description: 'Task 2',
            type: 'Task',
            oldPoints: 3,
            remainingPoints: 2,
            newPoints: 1,
          },
        },
      ],
    },{
      firstName: 'Jane',
      lastName: 'Smith',
      memberId: '2',
      workingDays: [
        {
          day: '2023-04-24',
          task: {
            keyValue: 'ZXCVB!789',
            keyColor: '#00FF00',
            description: 'Task 3',
            type: 'Bug',
            oldPoints: 2,
            remainingPoints: 1,
            newPoints: 0,
          },
        },
        {
          day: '2023-04-26',
          task: {
            keyValue: 'ASDF!123',
            keyColor: '#FF0000',
            description: 'Task 1',
            type: 'Goal',
            oldPoints: 0,
            remainingPoints: 0,
            newPoints: 0,
          },
        },
      ],
    }],
    businessDays: [],
    daysOfWeek: [],
    showNotification: true,
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
          (o) => o.id === payload,
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
          (o) => o.id === payload.id
        );
        draftState.sprint.tasks[index].keyValue = payload.value;
      });

    case actions.UPDATE_TASK_DESCRIPTION:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.id === payload.id,
        );
        draftState.sprint.tasks[index].description = payload.value;
      });
    case actions.UPDATE_TASK_TYPE:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.id === payload.id,
        );
        draftState.sprint.tasks[index].type = payload.value;
      });
    case actions.UPDATE_TASK_OLD_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.id === payload.id,
        );
        draftState.sprint.tasks[index].oldPoints = payload.value;
      });
    case actions.UPDATE_TASK_REMAINING_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.id === payload.id,
        );
        draftState.sprint.tasks[index].remainingPoints = payload.value;
      });
    case actions.UPDATE_TASK_NEW_POINTS:
      return produce(state, (draftState) => {
        const index = state.sprint.tasks.findIndex(
          (o) => o.id === payload.id,
        );
        draftState.sprint.tasks[index].newPoints = payload.value;
      });
    case actions.UPDATE_TASK_ASSIGN:
      return produce(state, (draftState) => {
      const memberIndex = draftState.sprint.members.findIndex(
          (o: Member) => o.memberId === payload.id,
      );
      const tasksIndex = draftState.sprint.members[memberIndex].workingDays.findIndex(
          (o: MemberWorkingDay) => o.day === payload.day.toString(),
      );
      draftState.sprint.members[memberIndex].workingDays[tasksIndex].task = payload.task;
    });
    case actions.UPDATE_BUSINESS_DAYS: {
      const { businessDays, daysOfWeek } = payload;
      return produce(state, (draftState) => {
        draftState.sprint.businessDays = businessDays;
        draftState.sprint.daysOfWeek = daysOfWeek;
      });
    }
    case actions.UPDATE_SHOW_NOTIFICATION: {
      return produce(state, (draftState) => {
        draftState.sprint.showNotification = payload;
      });
    }
    
    default:
      return state;
  }
};
export default reducer;



