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

export function startSprint(sprint: any) {
  return {
    type: actions.START_SPRINT,
    payload: sprint,
  };
}

export function startSprintSuccess(sprint: any) {
  return {
    type: actions.START_SPRINT_SUCCESS,
    payload: sprint,
  };
}

export function startSprintFailure(error: any) {
  return {
    type: actions.START_SPRINT_FAILURE,
    payload: error,
  };
}

export function endSprint(sprint: (id: any) => any) {
  return {
    type: actions.END_SPRINT,
    payload: sprint,
  };
}

export function endSprintSuccess(sprint: any) {
  return {
    type: actions.END_SPRINT_SUCCESS,
    payload: sprint,
  };
}

export function endSprintFailure(error: any) {
  return {
    type: actions.END_SPRINT_FAILURE,
    payload: error,
  };
}
