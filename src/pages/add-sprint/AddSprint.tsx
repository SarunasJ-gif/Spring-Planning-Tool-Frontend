import { useState } from 'react';
import NewTask, { TaskData } from '../../components/NewTask/NewTask';
import PlanTable from '../../components/PlanTable/PlanTable';
import mocktasks from '../../components/NewTask/mock_task.json';

function AddSprint() {
  const [tasks, setTasks] = useState<TaskData[]>(mocktasks);
  return (
    <>
      <NewTask tasks={tasks} setTasks={setTasks} />
      <PlanTable planTableTasks={tasks} />
    </>
  );
}
export default AddSprint;
