import React from 'react';
import { Box } from '@mui/material';
import NewSprintInformation from '../../components/NewSprintInformation/NewSprintInformation';
import TasksTable from '../../components/TasksTable/TasksTable';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import PlanTable from '../../components/PlanTable/PlanTable';

function AddSprint() {
  return (
    <>
      <NewSprintInformation />
      <TasksTable isEditMode={true} />
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
