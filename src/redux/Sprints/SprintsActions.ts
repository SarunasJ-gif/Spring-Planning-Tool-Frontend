import * as actions from './SprintsActionType';

interface Sprints {
    sprint: {
        id: number;
        title: string;
        startDate: string | null;
        endDate: string | null;
        isHistorical: boolean | null;
        isActive: boolean | null;
    }
}

export const getSprints = (sprints: Sprints) => ({
    type: actions.GET_SPRINTS,
    payload: sprints,
});

export const getSprintsSuccess = (sprints: any[]) => ({
    type: actions.GET_SPRINTS_SUCCESS,
    payload: sprints,
});

export const getSprintsFailure = (error: string) => ({
    type: actions.GET_SPRINTS_FAILURE,
    payload: error,
});

