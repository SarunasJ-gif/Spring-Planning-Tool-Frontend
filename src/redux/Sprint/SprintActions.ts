import * as actions from './SprintActionType';

export const getSprint = (payload: any) => ({
  type: actions.GET_SPRINT,
  payload,
});

export const getSprintSuccess = (payload: any) => ({
  type: actions.GET_SPRINT_SUCCESS,
  payload,
});

export const getSprintFailure = (payload: any) => ({
  type: actions.GET_SPRINT_FAILURE,
  payload,
});
