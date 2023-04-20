import React, { useEffect, useState } from 'react';
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
import { TaskData } from '../NewTask/NewTask';

interface Sprint {
  [id: string]: any;
  title: string;
  startDate: string;
  endDate: string;
  tasks: Task[];
  members: Member[];
}

type Task = {
  keyValue: string;
  keyColor: string;
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

interface PlanTableProps {
  taskss: TaskData[];
}

const DAYS_PER_SPRINT = 10;

const today = new Date();
const amountOfDaysArray = Array.from({ length: DAYS_PER_SPRINT }, (_, i) =>
  addDays(today, i),
);

const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const Sprint: Sprint = {
  title: '',
  startDate: '2023-04-20',
  endDate: '2023-04-23',
  tasks: [],
  members: [],
};

export default function PlanTable(props: PlanTableProps) {
  const [member, setMember] = useState<Member[]>([]);
  const { taskss } = props;
  const [sprint, setSprint] = useState<Sprint>(Sprint);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [totalWorkDays, setTotalWorkDays] = useState<number>(0);

  const handleTaskChange = (person: string, day: number, value: string) => {
    //immer
  };

  const handleClearNotification = () => {
    setShowNotification(false);
  };

  useEffect(() => {
    setSprint(
      produce(sprint, (draft) => {
        draft.members = member.map((memberObject) => ({
          firstName: memberObject.firstName,
          lastName: memberObject.lastName,
          memberId: memberObject.memberId,
          workingDays: [],
        }));
        draft.tasks = taskss.map((task) => ({
          keyValue: task.keyValue,
          keyColor: task.keyColor,
          description: task.description,
          type: task.type,
          oldPoints: task.oldPoints,
          remainingPoints: task.remainingPoints,
          newPoints: task.newPoints,
        }));
      }),
    );
  }, [setSprint]);

  useEffect(() => {
    if (sprint.endDate && sprint.startDate) {
    }
  }, [totalWorkDays]);

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
          {sprint.tasks.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={DAYS_PER_SPRINT + 1}
                sx={{ textAlign: 'center' }}
              >
                No tasks created
              </TableCell>
            </TableRow>
          ) : (
            sprint.members.map((member) => (
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
                          value={sprint[member.memberId]?.[day] ?? ''}
                          onChange={(e) =>
                            handleTaskChange(
                              member.memberId,
                              day,
                              e.target.value as string,
                            )
                          }
                          label="Task"
                        >
                          {sprint.tasks.map((task) => (
                            <MenuItem value="Task" key={task.keyValue}>
                              <TaskKey
                                taskKey={task.keyValue}
                                keyColor={task.keyColor}
                                keyBackgroundColor={task.keyColor}
                              />
                            </MenuItem>
                          ))}
                          <MenuItem value="Education">
                            {sprint[member.memberId]?.[day] === 'Education' ? (
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
                            {sprint[member.memberId]?.[day] === 'Vacation' ? (
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
                    Object.values(sprint[member.memberId] || {}).filter(
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
}
