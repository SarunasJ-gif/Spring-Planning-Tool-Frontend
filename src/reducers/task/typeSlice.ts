import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    GoalType: "",
}

const typeSlice = createSlice({ name: 'type', initialState, reducers: {
    Technical(state) { state.GoalType = "Technical"},
    Goal(state) { state.GoalType = "Goal"},
    Empty(state) { state.GoalType = ""}  
}})

export const { Technical, Goal, Empty } = typeSlice.actions
export default typeSlice.reducer;



