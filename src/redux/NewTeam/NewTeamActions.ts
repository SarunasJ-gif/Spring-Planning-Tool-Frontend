import * as actions from './NewTeamActionType';

export const createNewTeam = (teamData: any) => ({
  type: actions.CREATE_NEW_TEAM,
  payload: teamData,
});
export const getTeamData = () => ({ type: actions.GET_TEAM_DATA});

export const updateTeamName = (id:number, name: string) => ({
  type: actions.UPDATE_TEAM_NAME,
  payload: { id, name },
});