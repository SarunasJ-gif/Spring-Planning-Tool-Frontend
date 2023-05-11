import { Role } from '../../enums/enums';
import { Team } from '../../types/TeamTypes';
import * as actions from './ManageTeamActionType';

export const getTeamData = () => ({ 
  type: actions.GET_TEAM_DATA_REQUEST
});
export const getTeamDataSuccess = (teams: Team[]) => ({
  type: actions.GET_TEAM_DATA_SUCCESS,
  payload: teams,
});

export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});

export const updateTeamMemberRole = (memberId: number, role: Role) => ({
  type: actions.UPDATE_MEMBER_ROLE,
  payload: { memberId, role },
});

export const addTeamMember = (memberId: number, role: Role) => ({
  type: actions.ADD_TEAM_MEMBER,
  payload: { memberId, role  },
});

export const removeTeamMember = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER,
  payload: { memberId },
});

export const removeTeamMemberSuccess = (memberId: number) => ({
  type: actions.REMOVE_TEAM_MEMBER_SUCCESS,
  payload: { memberId },
});
