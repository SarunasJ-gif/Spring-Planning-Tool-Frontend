import { Sprint } from '../../types/NewSprintTypes';
import * as actions from './SprintsActionType';

export type SprintState = { sprints: Sprint[] };
export const initialState = { sprints: [] };

const reducer = (state = initialState, { type, payload }: { type: string, payload: Sprint[] }) => {
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


