import produce from 'immer';
import * as actions from './TaskActionType';



export type NewTask = {
    keyValue: string;
    keyColor: string;
    description: string;
    type: string;
    oldPoints: number;
    remainingPoints: number;
    newPoints: number;
};
const initialState: NewTask = {
    keyValue: "",
    keyColor: "",
    description: "",
    type: "",
    oldPoints: 0,
    remainingPoints: 0,
    newPoints: 0,
};



// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.UPDATE_TASK_KEY_VALUE:
            return produce(state, (draftState) => {
                draftState.keyValue = payload;

            });

        case actions.UPDATE_TASK_DESCRIPTION:
            return produce(state, (draftState) => {
                draftState.description = payload;
            });
        case actions.UPDATE_TASK_TYPE:
            return produce(state, (draftState) => {
                draftState.type = payload;
            });
        case actions.UPDATE_TASK_OLD_POINTS:
            return produce(state, (draftState) => {
                draftState.oldPoints = payload;
            });
        case actions.UPDATE_TASK_REMAINING_POINTS:
            return produce(state, (draftState) => {
                draftState.remainingPoints = payload;
            });
        case actions.UPDATE_TASK_NEW_POINTS:
            return produce(state, (draftState) => {
                draftState.newPoints = payload;
            });
        default:
            return state;
    }
};
export default reducer;