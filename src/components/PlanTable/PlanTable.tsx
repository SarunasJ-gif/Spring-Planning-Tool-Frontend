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
import { Info } from '@mui/icons-material';
import TaskKey from '../TaskKey/TaskKey';
import { format } from 'date-fns';
import produce, { Draft } from 'immer';
import { Member, MemberWorkingDay, Sprint } from '../../types/NewSprintTypes';

const initialSprint: Sprint = {
  title: '',
  startDate: '2023-04-24',
  endDate: '2023-05-05',
  tasks: [],
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
        {
          day: '2023-04-25',
          task: {
            keyValue: 'QWERTY!456',
            keyColor: '#0000FF',
            description: 'Task 2',
            type: 'Task',
            oldPoints: 3,
            remainingPoints: 2,
            newPoints: 1,
          },
        },
      ],
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      memberId: '2',
      workingDays: [
        {
          day: '2023-04-24',
          task: {
            keyValue: 'ZXCVB!789',
            keyColor: '#00FF00',
            description: 'Task 3',
            type: 'Bug',
            oldPoints: 2,
            remainingPoints: 1,
            newPoints: 0,
          },
        },
        {
          day: '2023-04-26',
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
  isHistorial: null,
  isActive: null,
};

export default function PlanTable() {
  const [sprint, setSprint] = useState<Sprint>(initialSprint);
  const [showNotification, setShowNotification] = useState<boolean>(true);
  const totalWorkDays = 0;

  const handleTaskChange = (
    person: string,
    day: number,
    value: string,
    id: string,
  ) => {
    const task = produce(sprint, (sprintDraft: Draft<Sprint>) => {
      const memberIndex = sprintDraft.members.findIndex(
        (o: Member) => o.memberId === id,
      );
      const tasksIndex = sprintDraft[memberIndex].workingDays.findIndex(
        (o: MemberWorkingDay) => o.day === day.toString(),
      );
      sprintDraft[memberIndex].workingDays[tasksIndex].task = task;
    });
    setSprint(task);
  };
  const handleClearNotification = () => {
    setShowNotification(false);
  };

  // useEffect(() => {
  //   setSprint(
  //     produce(sprint, (draft) => {
  //       draft.members = member.map((memberObject) => ({
  //         firstName: memberObject.firstName,
  //         lastName: memberObject.lastName,
  //         memberId: memberObject.memberId,
  //         workingDays: [],
  //       }));
  //       draft.tasks = planTableTasks.map((task) => ({
  //         keyValue: task.keyValue,
  //         keyColor: task.keyColor,
  //         description: task.description,
  //         type: task.type,
  //         oldPoints: task.oldPoints,
  //         remainingPoints: task.remainingPoints,
  //         newPoints: task.newPoints,
  //       }));
  //     }),
  //   );
  // }, [setSprint, planTableTasks, member, sprint]);

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
  }, [
    setBusinessDays,
    setDaysOfWeek,
    sprint.endDate,
    sprint.members,
    sprint.startDate,
    sprint.tasks,
  ]);
  return (
    <>
      {showNotification && (
        <Typography
          sx={{
            display: 'flex',
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
          border: '1px solid #e0e0e0',
          bgcolor: '#fff',
          marginBottom: 20,
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
          {!sprint.tasks ? (
            <TableRow>
              <TableCell
                colSpan={businessDays.length + 1}
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
                        value={
                          sprint[member.memberId]?.workingDays[day]?.task
                            ?.type ?? ''
                        }
                        onChange={(event) =>
                          handleTaskChange(
                            member.memberId,
                            day,
                            event.target.value,
                            member.memberId,
                          )
                        }
                        label="Task"
                      >
                        {sprint.tasks.map((task) => (
                          <MenuItem value={task.keyValue} key={task.keyValue}>
                            <TaskKey
                              taskKey={task.keyValue}
                              keyColor="#FFFFFF"
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
