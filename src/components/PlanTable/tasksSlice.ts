import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
  tasks: {
    [person: string]: {
      [day: string]: string;
    };
  };
}

const initialState: TasksState = {
  tasks: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTask: (
      state,
      action: PayloadAction<{ person: string; day: string; task: string }>,
    ) => {
      const { person, day, task } = action.payload;
      if (!state.tasks[person]) {
        state.tasks[person] = {};
      }
      state.tasks[person][day] = task;
    },
  },
});

export const { setTask } = tasksSlice.actions;

export default tasksSlice.reducer;
