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
  planTableTasks: TaskData[];
}

const Sprint: Sprint = {
  title: '',
  startDate: '2023-04-24',
  endDate: '2023-05-05',
  tasks: [
    {
      keyValue: 'ASDF!123',
      keyColor: '#FF0000',
      description: 'Task 1',
      type: 'Goal',
      oldPoints: 0,
      remainingPoints: 0,
      newPoints: 0,
    },
  ],
  members: [
    {
      firstName: 'John',
      lastName: 'Doe',
      memberId: '1',
      workingDays: [
        {
          day: '2023-04-24',
          task: {
            keyValue: 'ASDF!123',
            keyColor: '#FF0000',
            description: 'Task 1',
            type: 'Goal',
            oldPoints: 0,
            remainingPoints: 0,
            newPoints: 0,
          },
        },
      ],
    },
  ],
};

export default function PlanTable(props: PlanTableProps) {
  const { planTableTasks } = props;
  const [member, setMember] = useState<Member[]>(Sprint.members);
  const [sprint, setSprint] = useState<Sprint>(Sprint);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const [totalWorkDays, setTotalWorkDays] = useState<number>(0);

  const handleTaskChange = (
    person: Member,
    dayIndex: number,
    value: string,
  ) => {
    setSprint((prevState) =>
      produce(prevState, (draft) => {
        const memberIndex = draft.members.findIndex(
          (m) => m.memberId === person.memberId,
        );
        const workingDayIndex = draft.members[
          memberIndex
        ].workingDays.findIndex((w) => w.day === businessDays[dayIndex]);

        draft.members[memberIndex].workingDays[workingDayIndex].task.keyValue =
          value;
      }),
    );
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
        draft.tasks = planTableTasks.map((task) => ({
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
  }, [setSprint, member]);

  const [businessDays, setBusinessDays] = useState<string[]>([]);
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>([]);

  useEffect(() => {
    if (sprint.endDate && sprint.startDate) {
      const startDate = new Date(sprint.startDate);
      const endDate = new Date(sprint.endDate);
      const days: string[] = [];
      const daysOfWeek: string[] = [];

      for (
        let date = startDate;
        date <= endDate;
        date.setDate(date.getDate() + 1)
      ) {
        if (date.getDay() !== 0 && date.getDay() !== 6) {
          const day = date.toLocaleDateString();
          days.push(day);
          daysOfWeek.push(format(date, 'EEE'));

          sprint.members.forEach((member) => {
            const task = sprint.tasks[0];
            member.workingDays.push({ day: day, task: task });
          });
        }
      }

      setBusinessDays(days);
      setDaysOfWeek(daysOfWeek);
    }
  }, [sprint.endDate, sprint.startDate]);
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
            <TableCell colSpan={businessDays.length + 1}>
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
            {Array.from({ length: businessDays.length + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center', color: '#7C7D7C' }}>
                {i === 0 ? '' : businessDays[i - 1]}
              </TableCell>
            ))}
            <TableCell align="center">Total work days</TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#F9FAFA', height: '48px' }}>
            {Array.from({ length: businessDays.length + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center' }}>
                {i === 0 ? '' : `${i}. ` + daysOfWeek[i - 1]}
              </TableCell>
            ))}
            <TableCell align="center">{totalWorkDays}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sprint.tasks.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={businessDays.length + 1}
                sx={{ textAlign: 'center' }}
              >
                No tasks created
              </TableCell>
            </TableRow>
          ) : (
            Sprint.members.map((member) => (
              <TableRow key={member.memberId} sx={{ height: '48px' }}>
                <TableCell
                  sx={{
                    borderRight: '1px solid #e0e0e0',
                    minWidth: '200px',
                  }}
                >
                  {member.firstName} {member.lastName}
                </TableCell>
                {Array.from(
                  { length: businessDays.length },
                  (_, i) => i + 1,
                ).map((day) => (
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
                          maSelectrgin: 'auto',
                          width: '85%',
                        }}
                        value={sprint[member.memberId]?.[day] ?? ''}
                        onChange={(event) =>
                          handleTaskChange(member, day, event.target.value)
                        }
                        label="Task"
                      >
                        {sprint.tasks.map((task) => (
                          <MenuItem value={task.keyValue} key={task.keyValue}>
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
                ))}
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
