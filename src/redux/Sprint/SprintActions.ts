import { Sprint } from '../../types/NewSprintTypes';
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

export function startSprint(id:number) {
  return {
    type: actions.START_SPRINT,
    payload: id,
  };
}

export function startSprintSuccess() {
  return {
    type: actions.START_SPRINT_SUCCESS,
  };
}

export function startSprintFailure() {
  return {
    type: actions.START_SPRINT_FAILURE,
  };
}

export function endSprint(id:number) {
  return {
    type: actions.END_SPRINT,
    payload: id,
  };
}

export function endSprintSuccess() {
  return {
    type: actions.END_SPRINT_SUCCESS,
  };
}

export function endSprintFailure() {
  return {
    type: actions.END_SPRINT_FAILURE,
  };
}
