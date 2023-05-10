import { Role } from '../../enums/enums';
import { Member } from '../../types/TeamTypes';
import * as actions from './ManageMemberActionType';

export const getMembers = () => ({
  type: actions.GET_MEMBER_REQUEST
});

export const getMembersOk = (members: Member[]) => ({
  type: actions.GET_MEMBER_SUCCESS,
  payload: members,
});

export const addTeamMember = (memberId: number, name: string, role: Role) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { memberId, name, role  },
});

export const updateTeamMemberRole = (memberId: number, role: Role) => ({
  type: actions.UPDATE_MEMBER_ROLE,
  payload: { memberId, role },
});

export const removeTeamMember = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER,
  payload: { memberId },
});

export const removeTeamMemberSuccess = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER_SUCCESS,
  payload: { memberId },
});

