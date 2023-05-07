import { Role } from '../../enums/enums';
import * as actions from './NewTeamActionType';

export const createNewTeam = (teamData: any) => ({
  type: actions.CREATE_NEW_TEAM,
  payload: teamData,
});

export const deleteTeamMemberRequest = (id: number) => ({
  type: actions.DELETE_TEAM_MEMBER,
  payload: { id },
});

export const updateTeamName = (name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { name },
});

export const addMember = (name: string, role: Role) => ({
  type: actions.ADD_MEMBER,
  payload: { name, role,  },
});

export const updateMemberRole = (memberId: number, role: Role) => ({
  type: actions.UPDATE_MEMBER_ROLE,
  payload: {
    memberId,
    role,
  },
});

export const removeMember = (memberId: number) => ({
  type: actions.REMOVE_MEMBER,
  payload: memberId,
});
