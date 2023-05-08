import React, { useEffect, useMemo, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessDays, setDaysOfWeek, updateTaskAssign, updateShowNotification, updateMembers } from '../../redux/NewSprint/NewSprintActions';
import { RootState } from '../../redux/store';


export default function PlanTable() {
  const dispatch = useDispatch();
  const sprint = useSelector((state: RootState) => state.newSprint.sprint);
  
  //const [sprint, setSprint] = useState<Sprint>(initialSprint);
  const handleClearNotification = () => {
    dispatch(updateShowNotification(false));
  };
  const totalWorkDays = 0;

  /*const planTableState = useSelector((state: any)=>state);
  console.log(planTableState);*/
  const handleTaskChange = (
    person: string,
    day: string | null,
    value: number,
  ) => {
    console.log(person, day, value);
    dispatch(updateTaskAssign(person, day, value));
    //setSprint(task);
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

  
  // const workingDays = useMemo(() => {
  //   const days: string[] = [];
  //   const daysOfWeek: string[] = [];
  
  //   if (sprint.endDate && sprint.startDate) {
  //     const startDate = new Date(sprint.startDate);
  //     const endDate = new Date(sprint.endDate);
  
  //     for (
  //       let date = startDate;
  //       date <= endDate;
  //       date.setDate(date.getDate() + 1)
  //     ) {
  //       if (date.getDay() !== 0 && date.getDay() !== 6) {
  //         const day = date.toLocaleDateString();
  //         days.push(day);
  //         daysOfWeek.push(format(date, 'EEE'));               
  //       }
  //     }
  
  //     const updatedMembers = sprint.members.map(member => {
  //       const updatedWorkingDays = days.map(day => ({ day, task: sprint.tasks[0] }));
  //       return { ...member, workingDays: updatedWorkingDays };
  //     });
  //     //console.log(updatedMembers);
  //     return { days, daysOfWeek, members: updatedMembers };
  //   }
    
  //   return { days: [], daysOfWeek: [], members: [] };
  // }, [sprint]);
  // dispatch(updateBusinessDays(workingDays.days, workingDays.daysOfWeek));
  useEffect(() => {
    if (sprint.endDate && sprint.startDate) {
      const startDate = new Date(sprint.startDate);
      //console.log(startDate);
      const endDate = new Date(sprint.endDate);
      //console.log(endDate);
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
        }
      }
      const updatedMembers = sprint.members.map(member => {
        const updatedWorkingDays = days.map(day => ({ day, task: null }));
        return { ...member, workingDays: updatedWorkingDays };
      });
      console.log(days);
      console.log(daysOfWeek);
      dispatch(setBusinessDays(days));
      dispatch(updateMembers(updatedMembers))
      dispatch(setDaysOfWeek(daysOfWeek));
    }
  }, [sprint.startDate, sprint.endDate]);
  return (
    <>
      {sprint.showNotification && (
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
            <TableCell colSpan={sprint.businessDays.length + 1}>
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
            {Array.from({ length: sprint.businessDays.length + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center', color: '#7C7D7C' }}>
                {i === 0 ? '' : sprint.businessDays[i - 1]}
              </TableCell>
            ))}
            <TableCell align="center">Total work days</TableCell>
          </TableRow>
          <TableRow sx={{ backgroundColor: '#F9FAFA', height: '48px' }}>
            {Array.from({ length: sprint.businessDays.length + 1 }, (_, i) => (
              <TableCell key={i} sx={{ textAlign: 'center' }}>
                {i === 0 ? '' : `${i}. ` + sprint.daysOfWeek[i - 1]}
              </TableCell>
            ))}
            <TableCell align="center">{totalWorkDays}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sprint.members.map((member) => (
            <TableRow key={member.memberId} sx={{ height: '48px' }}>
              <TableCell
                sx={{
                  borderRight: '1px solid #e0e0e0',
                  minWidth: '200px',
                }}
              >
                {member.firstName} {member.lastName}
              </TableCell>
              {
              member.workingDays.map((day) => (
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
                        day?.task?.id
                          ?? ''
                      }
                      onChange={(event) =>
                        handleTaskChange(
                          member.memberId,
                          day.day,
                          Number(event.target.value),
                        )
                      }
                      label="Task"
                    >
                      {sprint.tasks.map((task) => (
                        <MenuItem value={task.id} key={task.id}>
                          <TaskKey
                            taskKey={task.keyValue}
                            keyColor="#FFFFFF"
                            keyBackgroundColor={task.keyColor}
                          />
                        </MenuItem>
                      ))}
                      {/* <MenuItem value="Education">
                          {sprint.members[member.memberId]?.[day] === 'Education' ? (
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
                      </MenuItem> */}
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
                  Object.values(sprint.members[Number(member.memberId)] || {}).filter(
                    (value) =>
                      value === 'Task' ||
                      value === 'Technical' ||
                      value === 'Goal',
                  ).length
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </>
  );
}
