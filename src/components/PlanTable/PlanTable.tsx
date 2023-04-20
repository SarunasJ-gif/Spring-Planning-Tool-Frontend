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
import { format, addDays, differenceInBusinessDays } from 'date-fns';
import produce from 'immer';

interface Sprint {
  [id: string]: any;
  title: string;
  startDate: string;
  endDate: string;
  tasks: Task[];
  members: Member[];
}

type Task = {
  key: string;
  keyColor: string;
  keyBackgroundColor: string;
  description: string;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
};

type MemberWorkingDay = {
  day: string;
  task: Task;
};

type Member = {
  firstName: string;
  lastName: string;
  memberId: string;
  workingDays: MemberWorkingDay[];
};

const PEOPLE: string[] = [
  'Laura Sunshine',
  'Matt Brook',
  'Conel McLane',
  'John Smith',
];

const DAYS_PER_SPRINT = 10;

const today = new Date();
const amountOfDaysArray = Array.from({ length: DAYS_PER_SPRINT }, (_, i) =>
  addDays(today, i),
);

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const PlanTable: React.FC = () => {
  const [tasks, setTasks] = useState<Sprint>({
    title: 'Sprint',
    startDate: '2023-04-19',
    endDate: '2023-04-25',
    tasks: [
      {
        key: 'SFD-170',
        keyColor: '#FFFFFF',
        keyBackgroundColor: '#83dc9c',
        description: 'Update role handling',
        type: 'Technical',
        oldPoints: 5,
        remainingPoints: 4,
        newPoints: 2,
      },
      {
        key: 'SFD-171',
        keyColor: '#000000',
        keyBackgroundColor: '#6fa0e9',
        description: 'Update role handling',
        type: 'Technical',
        oldPoints: 5,
        remainingPoints: 4,
        newPoints: 2,
      },
    ],
    members: [
      {
        firstName: 'Laura',
        lastName: 'Sunshine',
        memberId: '1',
        workingDays: [
          {
            day: '2023-04-19',
            task: {
              key: 'SFD-171',
              keyColor: '#000000',
              keyBackgroundColor: '#FF0000',
              description: 'Update role handling',
              type: 'Technical',
              oldPoints: 5,
              remainingPoints: 4,
              newPoints: 2,
            },
          },
          {
            day: '2023-04-21',
            task: {
              key: 'SFD-171',
              keyColor: '#0000FF',
              keyBackgroundColor: '#FF0000',
              description: 'Update role handling',
              type: 'Technical',
              oldPoints: 5,
              remainingPoints: 4,
              newPoints: 2,
            },
          },
        ],
      },
      {
        firstName: 'Test',
        lastName: 'Member',
        memberId: '2',
        workingDays: [
          {
            day: '2021-12-01',
            task: {
              key: 'SFD-171',
              keyColor: '#000000',
              keyBackgroundColor: '#FF0000',
              description: 'Update role handling',
              type: 'Technical',
              oldPoints: 5,
              remainingPoints: 4,
              newPoints: 2,
            },
          },
          {
            day: '2021-12-02',
            task: {
              key: 'SFD-171',
              keyColor: '#0000FF',
              keyBackgroundColor: '#FF0000',
              description: 'Update role handling',
              type: 'Technical',
              oldPoints: 5,
              remainingPoints: 4,
              newPoints: 2,
            },
          },
        ],
      },
    ],
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
            <TableCell colSpan={DAYS_PER_SPRINT + 1}>
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
            {Array.from({ length: DAYS_PER_SPRINT + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center', color: '#7C7D7C' }}>
                {i === 0
                  ? ''
                  : format(new Date(amountOfDaysArray[i - 1]), 'dd/MM/yyyy')}
              </TableCell>
            ))}
            <TableCell align="center">Total work days</TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#F9FAFA', height: '48px' }}>
            {Array.from({ length: DAYS_PER_SPRINT + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center' }}>
                {i === 0 ? '' : `${i}. ` + daysOfWeek[i % 5]}
              </TableCell>
            ))}
            <TableCell align="center">{totalWorkDays}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.tasks.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={DAYS_PER_SPRINT + 1}
                sx={{ textAlign: 'center' }}
              >
                No tasks created
              </TableCell>
            </TableRow>
          ) : (
            tasks.members.map((member) => (
              <TableRow key={member.memberId} sx={{ height: '48px' }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    minWidth: '200px',
                  }}
                >
                  {member.firstName} {member.lastName}
                </TableCell>
                {Array.from({ length: DAYS_PER_SPRINT }, (_, i) => i + 1).map(
                  (day) => (
                    <TableCell
                      key={`${member}-${day}`}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#F0F1F3',
                        },
                        padding: '0px',
                      }}
                    >
                      <FormControl variant="standard" fullWidth>
                        <Select
                          disableUnderline
                          inputProps={{ IconComponent: () => null }}
                          sx={{
                            margin: 'auto',
                            width: '85%',
                          }}
                          value={tasks[member.memberId]?.[day] ?? ''}
                          onChange={(e) =>
                            handleTaskChange(
                              member.memberId,
                              day,
                              e.target.value as string,
                            )
                          }
                          label="Task"
                        >
                          {tasks.tasks.map((task) => (
                            <MenuItem value="Task" key={task.key}>
                              <TaskKey
                                taskKey={task.key}
                                keyColor={task.keyColor}
                                keyBackgroundColor={task.keyBackgroundColor}
                              />
                            </MenuItem>
                          ))}
                          <MenuItem value="Education">
                            {tasks[member.memberId]?.[day] === 'Education' ? (
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
                            {tasks[member.memberId]?.[day] === 'Vacation' ? (
                              <TaskKey
                                taskKey={'Vacation'}
                                keyColor={'#FFFFFF'}
                                keyBackgroundColor={'#878787'}
                              />
                            ) : (
                              'Vacation'
                            )}
                          </MenuItem>
                          <MenuItem value="">None</MenuItem>
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
                    Object.values(tasks[member.memberId] || {}).filter(
                      (value) =>
                        value === 'Task' ||
                        value === 'Technical' ||
                        value === 'Goal',
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
