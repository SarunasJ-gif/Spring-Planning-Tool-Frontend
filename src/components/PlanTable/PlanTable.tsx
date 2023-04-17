import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  FormControl,
  Select,
  MenuItem,
  Button,
  Typography,
} from '@mui/material';
import { Info, Task } from '@mui/icons-material';
import TaskKey from '../TaskKey/TaskKey';
import { format, addDays } from 'date-fns';

interface Task {
  [day: number]: string | undefined;
}

interface Tasks {
  [person: string]: Task | undefined;
}

const PEOPLE: string[] = [
  'Laura Sunshine',
  'Matt Brook',
  'Conel McLane',
  'John Smith',
];

// You can change this to change the size of the sprint and the number of days in the table
const DAYS_PER_WEEK = 10;

const today = new Date();
const amountOfDaysArray = Array.from({ length: DAYS_PER_WEEK }, (_, i) =>
  addDays(today, i),
);

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const PlanTable: React.FC = () => {
  const [tasks, setTasks] = useState<Tasks>({
    'Laura Sunshine': {
      1: 'Task',
      2: 'Vacation',
    },
    'Matt Brook': {
      3: 'Task',
      6: 'Task',
      7: 'Education',
    },
  });
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [totalWorkDays, setTotalWorkDays] = useState<number>(0);

  const handleTaskChange = (person: string, day: number, value: string) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [person]: {
        ...prevTasks[person],
        [day]: value,
      },
    }));
  };

  const handleClearNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      {showNotification && (
        <Typography
          sx={{
            display: 'flex',
            margin: 'auto',
            maxWidth: '85%',
            py: 3,
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#656565',
            }}
          >
            <Info sx={{ mr: 1 }} />
            After&nbsp;<strong>adding tasks</strong>&nbsp;to Initial Plan,&nbsp;
            <strong>sprint dates cannot be changed</strong>. Please remove the
            tasks from the dates you want to update.
          </Typography>
          <Typography variant="subtitle1">
            <Button
              onClick={handleClearNotification}
              style={{
                color: 'primary',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              GOT IT
            </Button>
          </Typography>
        </Typography>
      )}
      <Table
        sx={{
          maxWidth: '85%',
          margin: 'auto',
          border: '1px solid #e0e0e0',
          bgcolor: '#fff',
        }}
      >
        <TableHead>
          <TableRow sx={{ height: '60px' }}>
            <TableCell colSpan={DAYS_PER_WEEK + 1}>
              <Typography variant="h5" fontWeight={500}>
                Initial Plan
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              backgroundColor: '#F9FAFA',
              height: '48px',
              color: '#878787',
            }}
          >
            {Array.from({ length: DAYS_PER_WEEK + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center', color: '#7C7D7C' }}>
                {i === 0
                  ? ''
                  : format(new Date(amountOfDaysArray[i - 1]), 'dd/MM/yyyy')}
              </TableCell>
            ))}
            <TableCell align="center">Total work days</TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#F9FAFA', height: '48px' }}>
            {Array.from({ length: DAYS_PER_WEEK + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center' }}>
                {i === 0 ? '' : `${i}. ` + daysOfWeek[i % 5]}
              </TableCell>
            ))}
            <TableCell align="center">{totalWorkDays}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(tasks).length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={DAYS_PER_WEEK + 1}
                sx={{ textAlign: 'center' }}
              >
                No tasks created
              </TableCell>
            </TableRow>
          ) : (
            PEOPLE.map((person) => (
              <TableRow key={person} sx={{ height: '48px' }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    minWidth: '200px',
                  }}
                >
                  {person}
                </TableCell>
                {Array.from({ length: DAYS_PER_WEEK }, (_, i) => i + 1).map(
                  (day) => (
                    <TableCell
                      key={`${person}-${day}`}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#F0F1F3',
                        },
                        padding: '0px',
                      }}
                    >
                      <FormControl variant="standard" fullWidth>
                        <Select
                          sx={{
                            margin: 'auto',
                            width: '85%',
                          }}
                          value={tasks[person]?.[day] ?? ''}
                          onChange={(e) =>
                            handleTaskChange(
                              person,
                              day,
                              e.target.value as string,
                            )
                          }
                          label="Task"
                        >
                          <MenuItem value="">None</MenuItem>
                          <MenuItem value="Task">
                            {tasks[person]?.[day] === 'Task' ? (
                              <TaskKey
                                taskKey={'SFD-182'}
                                keyColor={'#FFFFFF'}
                                keyBackgroundColor={'#1AC889'}
                              />
                            ) : (
                              // Will need to be changed to be dynamic based on the task using template strings
                              'SFD-182'
                            )}
                          </MenuItem>
                          <MenuItem value="Education">
                            {tasks[person]?.[day] === 'Education' ? (
                              <TaskKey
                                taskKey={'Education'}
                                keyColor={'#FFFFFF'}
                                keyBackgroundColor={'#878787'}
                              />
                            ) : (
                              'Education'
                            )}
                          </MenuItem>
                          <MenuItem value="Vacation">
                            {tasks[person]?.[day] === 'Vacation' ? (
                              <TaskKey
                                taskKey={'Vacation'}
                                keyColor={'#FFFFFF'}
                                keyBackgroundColor={'#878787'}
                              />
                            ) : (
                              'Vacation'
                            )}
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  ),
                )}
                <TableCell
                  sx={{
                    textAlign: 'center',
                    minWidth: '150px',
                    borderLeft: '1px solid #e0e0e0',
                  }}
                >
                  {
                    Object.values(tasks[person] || {}).filter(
                      (value) => value === 'Task',
                    ).length
                  }
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default PlanTable;
