import React from 'react';
import { Box } from "@mui/material";
import { useState } from 'react';

import { TitleAndDate } from './Title-and-date';
import NewTask, {TaskData} from "../../components/NewTask/NewTask";
import BottomMenu from "../../components/BottomMenu/BottomMenu";
import PlanTable from '../../components/PlanTable/PlanTable';

function AddSprint() {
  const [tasks, setTasks] = useState<TaskData[]>([]);
  return (
    <>
        <TitleAndDate />
      <NewTask tasks={tasks} setTasks={setTasks} />
      <PlanTable planTableTasks={tasks} />
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
