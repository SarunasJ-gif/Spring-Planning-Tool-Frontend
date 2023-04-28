import React from 'react';
import { Box } from '@mui/material';
import { useState } from 'react';

import NewSprintInformation from '../../components/NewSprintInformation/NewSprintInformation';
import TasksTable from '../../components/TasksTable/TasksTable';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import PlanTable from '../../components/PlanTable/PlanTable';
import { TaskData } from '../../types/NewSprintTypes';

function AddSprint() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  return (
    <>
      <NewSprintInformation />
      <TasksTable tasks={tasks} setTasks={setTasks} />
      <PlanTable />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '65vh',
        }}
      >
        <BottomMenu />
      </Box>
    </>
  );
}

export default AddSprint;

