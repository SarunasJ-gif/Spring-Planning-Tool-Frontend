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
const initialState: TeamState = {
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
      return produce (state, (draftState) => { draftState.team.name = payload; });
    case actions.GET_ALL_TEAM_MEMBERS_SUCCESS:
        return produce(state, (draftState) => {draftState.team.members = payload; });
    case actions.ADD_TEAM_MEMBER:
      return produce(state, (draftState) => { draftState.team.members.push(payload); });   
    case actions.REMOVE_TEAM_MEMBER:
       return produce(state, (draftState) => {
         const index = draftState.team.members.findIndex( (member) => member.id === payload);
       draftState.team.members.splice(index, 1);});     
    case actions.UPDATE_TEAM_MEMBER_ROLE:
          return produce(state, (draftState) => {
            const { memberId, role  } = payload;
            const member = draftState.team.members.find(
              (member) => member.id === memberId
            );
            if (member) {
              member.role = role ;
            }
          });
   default:
      return state;
  }
};
export default reducer;





