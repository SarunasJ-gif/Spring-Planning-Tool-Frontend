import { Sprint } from '../../types/NewSprintTypes';
import * as actions from './SprintsActionType';

export type SprintState = {
    sprints: Sprint[];
    getSelectedSprint: Sprint | null;
};
export const initialState = {
    sprints: [],
    getSelectedSprint: null,
};

const reducer = (state = initialState, { type, payload }: { type: string, payload: Sprint[] | Sprint }) => {
    switch (type) {
        case actions.GET_SPRINTS_REQUEST:
            return { ...state };
        case actions.GET_SPRINTS_SUCCESS:
            return { ...state, sprints: payload };
        default:
            return state;
    }
};

export default reducer;


