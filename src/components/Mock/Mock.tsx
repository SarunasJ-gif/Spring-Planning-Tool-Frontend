//THIS IS AN EXAMPLE FETCH AND DISPLAY COMPONENT FOR EXPRESS MOCK DATA.
//You can use npm run startmock to start both the express and the react server at the same time
/*import React from 'react';
import { useState, useEffect } from 'react';
interface Task {
  key: string;
  description: string;
  type: string;
  old_points: number;
  remaining_points: number;
  new_points: number;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch('/task')
      .then((response) => response.json())
      .then((mockdata: Task[]) => setTasks(mockdata));
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      {tasks.map((task) => (
        <div key={task.key}>
          <h2>{task.key}</h2>
          <p>{task.description}</p>
          <p>{task.type}</p>
          <p>{task.old_points}</p>
          <p>{task.remaining_points}</p>
          <p>{task.new_points}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;*/
export {}; // delete this if trying the example
