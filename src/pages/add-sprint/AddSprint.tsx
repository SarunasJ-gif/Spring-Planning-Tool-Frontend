import React from 'react';
import { Box } from "@mui/material";
import { useState } from 'react';

import { TitleAndDate } from './Title-and-date';
import NewTask, {TaskData} from "../../components/NewTask/NewTask";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import PlanTable from '../../components/PlanTable/PlanTable';
import mocktasks from '../../components/NewTask/mock_task.json';

function AddSprint() {
  const [tasks, setTasks] = useState<TaskData[]>(mocktasks);
  return (
    <>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <PlanTable planTableTasks={tasks} />
    <TitleAndDate />
    <Box 
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "65vh",
      }}
    >
      <BottomMenu />
    </Box>
    </>
  );
}

export default AddSprint;
