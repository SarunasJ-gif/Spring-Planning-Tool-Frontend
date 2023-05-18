import { Sprint } from '../../types/NewSprintTypes';
import * as actions from './SprintsActionType';


export const getSprintsRequest = () => ({
    type: actions.GET_SPRINTS_REQUEST,
});

export const getSprintsSuccess = (sprints: Sprint[]) => ({
    type: actions.GET_SPRINTS_SUCCESS,
    payload: sprints,
});


export const getSelectedSprint = (id: number) => ({
    type: actions.GET_SELECTED_SPRINT,
    payload: id,
});

export const getSelectedSprintSuccess = (sprint: Sprint) => ({
    type: actions.GET_SELECTED_SPRINT_SUCCESS,
    payload: sprint,
});