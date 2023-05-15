import * as actions from './SprintsActionType';

export type Sprints = {
    sprint: {
        id: number,
        title: string;
        startDate: string | null;
        endDate: string | null;
        isHistorical: boolean | null;
        isActive: boolean | null;
    }
};

const initialState = {
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
