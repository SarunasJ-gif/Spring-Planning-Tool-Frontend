import * as actions from './SprintsActionType';

export const getSprints = (payload: any) => ({
    type: actions.GET_SPRINTS,
    payload,
});

export const getSprintsSuccess = (sprints: any[]) => ({
    type: actions.GET_SPRINTS_SUCCESS,
    payload: sprints,
});

export const getSprintsFailure = (error: string) => ({
    type: actions.GET_SPRINTS_FAILURE,
    payload: error,
});
