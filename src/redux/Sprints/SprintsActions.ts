import * as actions from './SprintsActionType';

export const getSprint = (payload: any) => ({
    type: actions.GET_SPRINTS,
    payload,
});

export const getSprintSuccess = (payload: any) => ({
    type: actions.GET_SPRINTS_SUCCESS,
    payload,
});

export const getSprintFailure = (payload: any) => ({
    type: actions.GET_SPRINTS_FAILURE,
    payload,
});
