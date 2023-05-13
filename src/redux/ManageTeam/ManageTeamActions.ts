import { Role } from '../../enums/enums';
import { Member } from '../../types/NewSprintTypes';
import { Team } from '../../types/TeamTypes';
import * as actions from './ManageTeamActionType';

export const getAllTeamData = () => ({
  type: actions.GET_ALL_TEAM_DATA,
});
export const getAllTeamDataSuccess = (teams : Team) => ({
  type: actions.GET_ALL_TEAM_DATA_SUCCESS,
  payload: teams,
});
export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});
export const addTeamMember = (memberId: number, email: string, role: Role) => {
  return {
    type: actions.ADD_TEAM_MEMBER,
    payload: { memberId, email, role },
  };
};
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
export const updateTeamMemberRole = (memberId: number, role: string) => ({
  type: actions.UPDATE_TEAM_MEMBER_ROLE,
  payload: { memberId, role },
});


