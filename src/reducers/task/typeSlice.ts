import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    GoalType: "",
}

const typeSlice = createSlice({ name: 'type', initialState, reducers: {
    Technical(state) { state.GoalType = "Technical"},
    Goal(state) { state.GoalType = "Goal"},
    Null(state) { state.GoalType = ""}  
}})

export const { Technical, Goal, Null } = typeSlice.actions
export default typeSlice.reducer;



