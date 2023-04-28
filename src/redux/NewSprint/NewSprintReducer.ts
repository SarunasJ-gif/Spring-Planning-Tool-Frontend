import produce from "immer";
import * as actions from "./NewSprintActionType";
import { Member, TaskData } from "../../types/NewSprintTypes";

export type NewSprint = {
    sprint: {
        title: string,
        startDate: string | null,
        endDate: string | null,
        tasks: TaskData[],
        memberTeamId: string | null
        members: Member[]
    }
}
const initialState: NewSprint = {
    sprint: {
        title: "",
        startDate: null,
        endDate: null,
        tasks: [],
        memberTeamId: null,
        members: [],
    }
};

// @ts-ignore
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.ADD_TASK:
            return produce(state, draftState => {
                draftState.sprint.tasks.push(payload);
            });
        case actions.REMOVE_TASK:
            return produce(state, draftState => {
                const index = state.sprint.tasks.findIndex(o => o.keyValue === payload);
                draftState.sprint.tasks.splice(index, 1);
            });
        case actions.CREATE_SPRINT_REQUEST:
            return produce(state, draftState => {
                draftState.sprint.title = payload.title;
                draftState.sprint.startDate = payload.startDate;
                draftState.sprint.endDate = payload.endDate;
                draftState.sprint.tasks = payload.tasks;
                draftState.sprint.memberTeamId = payload.memberTeamId;
                draftState.sprint.members = payload.members;
});
        default:
            return state;
    }
};

export default reducer;