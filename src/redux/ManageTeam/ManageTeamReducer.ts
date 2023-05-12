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
      return produce (state, (draftState) => { draftState.team.name = payload; });
    case actions.GET_ALL_TEAM_MEMBERS_SUCCESS:
        return produce(state, (draftState) => {draftState.team.members = payload; });
    case actions.ADD_TEAM_MEMBER:
      return produce(state, (draftState) => { draftState.team.members.push(payload); });   
 case actions.REMOVE_TEAM_MEMBER:
       return produce(state, (draftState) => {
         const index = draftState.team.members.findIndex( (member) => member.id === payload);
         if (index !== -1) { draftState.team.members.splice(index, 1);}});                                          
      default:
      return state;
  }
};
export default reducer;





