import { Member, Team } from '../../types/TeamTypes';
import * as actions from './ManageTeamActionType';

export const getTeamData = () => ({  type: actions.GET_TEAM_DATA_REQUEST 
});
export const getTeamDataSuccess = (teams: Team[]) => ({
  type: actions.GET_TEAM_DATA_SUCCESS,
  payload: teams,
});
export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});
export const addTeamMember = (memberId: number) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { memberId },
});
export const removeTeamMember = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER,
  payload: { memberId },
});
export const removeTeamMemberSuccess = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER_SUCCESS,
  payload: { memberId },
});
export const getAllTeamMembers = () => ({
  type: actions.GET_ALL_TEAM_MEMBERS,
});
export const getAllTeamMembersSuccess = (members : Member[]) => ({
  type: actions.GET_ALL_TEAM_MEMBERS_SUCCESS,
  payload: members,
});

