import { Role } from '../../enums/enums';
import * as actions from './NewTeamActionType';

export const createNewTeam = (teamData: any) => ({
  type: actions.CREATE_NEW_TEAM,
  payload: teamData,
});
export const getTeamData = (memberId: number) => ({
  type: actions.GET_TEAM_DATA,
  payload: memberId,
});

export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});

export const addTeamMember = (memberId: number, name: string, role: Role) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { memberId, name, role  },
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
