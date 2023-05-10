import { Role } from '../../enums/enums';
import * as actions from './ManageTeamActionType';

export const getTeamData = () => ({ type: actions.GET_TEAM_DATA});

export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});

export const updateTeamMemberRole = (memberId: number, role: Role) => ({
  type: actions.UPDATE_MEMBER_ROLE,
  payload: { memberId, role },
});

export const addTeamMember = (memberId: number, name: string, role: Role) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { memberId, name, role  },
});

export const removeTeamMemberRequest = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER_REQUEST,
  payload: { memberId },
});

export const removeTeamMemberSuccess = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER_SUCCESS,
  payload: { memberId },
});
