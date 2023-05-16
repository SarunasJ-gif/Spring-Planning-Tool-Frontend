import * as actions from './SprintsActionType';

export type sprint = {
    id: number;
    title: string;
    startDate: string | null;
    endDate: string | null;
    isHistorical: boolean | null;
    isActive: boolean | null;
};

export type Sprints = {
    sprint: {
        id: number;
        title: string;
        startDate: string | null;
        endDate: string | null;
        isHistorical: boolean | null;
        isActive: boolean | null;
    }
};

const initialState = {
    sprint: {
        id: 0,
        title: "",
        startDate: "",
        endDate: "",
        isHistorical: false,
        isActive: false,
    }
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
