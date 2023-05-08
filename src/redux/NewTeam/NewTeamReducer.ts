import produce from 'immer';
import * as actions from './NewTeamActionType';
import { Member } from '../../types/NewSprintTypes';


export type NewTeam = {
  team: {
    name: string;
    completedProjects: number| null;
    completedTasks: number| null;
    members: Member[];
}
};
const initialState: NewTeam = {
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
      return produce (state, (draftState) => {
        draftState.team.name = payload;
        });
    case actions.ADD_TEAM_MEMBER:
      return produce (state, (draftState) => {
        draftState.team.members.push(payload);
          });
          case actions.UPDATE_MEMBER_ROLE:
            return produce(state, (draftState) => {
              draftState.team.members.findIndex((member) => member.memberId === payload.memberId
              );
            });
    default:
      return state;
  }
};
export default reducer;





