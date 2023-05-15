import * as actions from './SprintsActionType';

export type Sprint = {
    title: string;
    startDate: string | null;
    endDate: string | null;
    isHistorial: boolean | null;
    isActive: boolean | null;
};

const initialState = {
    sprints: null,
    loading: false,
    error: null,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.GET_SPRINTS:
            return {
                ...state,
                loading: true,
            };
        case actions.GET_SPRINTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sprint: action.payload,
            };
        case actions.GET_SPRINTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
export default reducer;
