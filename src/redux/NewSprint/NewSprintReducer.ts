import produce from "immer";
import * as actions from "./NewSprintActionType";
import { TaskData } from "../../components/NewTask/NewTask";
import { Member } from "../../components/PlanTable/PlanTable";

const initialState: {
    sprint: {
        title: string,
        startDate: string | null,
        endDate: string | null,
        tasks: TaskData[],
        memberTeamId: string | null
        members: Member[]
    }
} = {
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
export default (state = initialState, { type, payload }) => {
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
        default:
            return state;
    }
};