import React from 'react';
import { Box } from '@mui/material';
import NewSprintInformation from '../../components/NewSprintInformation/NewSprintInformation';
import TasksTable from '../../components/TasksTable/TasksTable';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import PlanTable from '../../components/PlanTable/PlanTable';

function AddSprint() {
  return (
    <>
      <Box sx={{ maxWidth: '85%', margin: 'auto', mt: 15 }}>
        <NewSprintInformation />
        <TasksTable isEditMode={true} />
        <PlanTable />
      </Box>
      <BottomMenu />
    </>
  );
}

export default AddSprint;
