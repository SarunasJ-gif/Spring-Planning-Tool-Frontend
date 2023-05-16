import * as actions from './SprintsActionType';

interface Sprints {
    sprints: any[];
    loading: boolean;
    error: string | null;
}

const initialState: Sprints = {
    sprints: [],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.GET_SPRINTS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actions.GET_SPRINTS_SUCCESS:
            return {
                ...state,
                loading: false,
                sprints: action.payload,
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
