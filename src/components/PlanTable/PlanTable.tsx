import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setBusinessDays, setDaysOfWeek, updateTaskAssign, updateShowNotification, updateMembers } from '../../redux/NewSprint/NewSprintActions';
import { RootState } from '../../redux/store';

export default function PlanTable() {
  const dispatch = useDispatch();
  const sprint = useSelector((state: RootState) => state.newSprint.sprint);
  
  const handleClearNotification = () => {
    dispatch(updateShowNotification(false));
  };
  const totalWorkDays = 0;

  const handleTaskChange = (
    person: string,
    day: string | null,
    value: number,
  ) => {
    dispatch(updateTaskAssign(person, day, value));
  };
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
        }
      }
      const updatedMembers = sprint.members.map(member => {
        const updatedWorkingDays = days.map(day => ({ day, task: null }));
        return { ...member, workingDays: updatedWorkingDays };
      });
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
                    textAlign: 'center',
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
                      <MenuItem value='-1'>
                          {day.task?.keyValue === 'Education' ? (
                            <TaskKey
                              taskKey={'Education'}
                              keyColor={'#FFFFFF'}
                              keyBackgroundColor={'#878787'}
                            />
                          ) : (
                            'Education'
                          )}
                      </MenuItem>
                      <MenuItem value='-2'>
                        {day.task?.keyValue === 'Vacation' ? (
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
                  Object.values(sprint.members[Number(member.memberId)-1].workingDays || {}).filter(
                    (day) =>
                      day.task?.type === 'Task' ||
                      day.task?.type=== 'Technical' ||
                      day.task?.type === 'Goal',
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
