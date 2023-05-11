import produce from 'immer';
import * as actions from './ManageTeamActionType';
import { Member } from '../../types/NewSprintTypes';


export type TeamState = {
  team: {
    name: string;
    completedProjects: number| null;
    completedTasks: number| null;
    members: Member[];
}
};
export const initialState: TeamState = {
  team: {
    name: '',
    completedProjects: null,
    completedTasks: null,
    members: [],
  },
};

// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.UPDATE_TEAM_NAME:
      return produce (state, (draftState) => { draftState.team.name = payload;  });
    case actions.REMOVE_TEAM_MEMBER:
      return {...state};
    case actions.GET_TEAM_DATA_SUCCESS:
      return produce(state, (draftState) => {
        draftState.team.members = payload;
      });
    default:
      return state;
  }
};
export default reducer;





