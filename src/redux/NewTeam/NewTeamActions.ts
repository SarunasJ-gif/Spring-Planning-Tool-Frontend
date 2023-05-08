import { Role } from '../../enums/enums';
import * as actions from './NewTeamActionType';

export const createNewTeam = (teamData: any) => ({
  type: actions.CREATE_NEW_TEAM,
  payload: teamData,
});

export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});

export const addTeamMember = (name: string, role: Role) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { name, role  },
});

export const updateMemberRole = (memberId: number, role: Role) => ({
  type: actions.UPDATE_MEMBER_ROLE,
  payload: {
    memberId,
    role
  },
});

export const removeTeamMember = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER,
  payload: memberId,
});
