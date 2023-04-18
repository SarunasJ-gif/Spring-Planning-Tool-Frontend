import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  TableCell,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  MenuItem,
  FormControl,
  Select,
  Box,
  Button,
  Typography,
  Grid, Accordion, AccordionDetails, AccordionSummary
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PopUp from './PopUp';
import { GoalType } from '../../enums/enums'; 
import produce, { Draft } from 'immer';
import { StyledTableCell } from '../../style/TableCellStyle';
import MockedData from './mock_task.json';
import { useDispatch } from 'react-redux'
import { Technical, Goal } from '../../reducers/task/typeSlice'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

interface TaskData {
  key: string;
  color: string;
  description: string;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
}

export default function NewTask(): JSX.Element {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        key: '',
        color: '#EC4226',
        description: '',
        type: '',
        oldPoints: 0,
        remainingPoints: 0,
        newPoints: 0,
      },
    ]);
     setExpanded('panel1');
  };

  useEffect(() => {
    setTasks(MockedData);
  }, []);
 
  const handleKeyChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.key === key);
        if (index !== -1) {
          draft[index].key = event.target.value;
        }
      })
    );
  };

  const handleDescriptionChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.key === key);
        if (index !== -1) {
          draft[index].description = event.target.value;
        }
      })
    );
  };

  const handleOldPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.key === key);
        if (index !== -1) {
          draft[index].oldPoints = parseInt(event.target.value);
        }
      })
    );
  };
  
  const handleRemainingPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.key === key);
        if (index !== -1) {
          draft[index].remainingPoints = parseInt(event.target.value);
        }
      })
    );
  };

  const handleNewPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.key === key);
        if (index !== -1) {
          draft[index].newPoints = parseInt(event.target.value);
        }
      })
    );
  };
  
  const handleGoalTypeChange = (index: number, field: keyof TaskData, value: GoalType) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        draft[index].type = value;
      })
    );
  };
    
const calculateTotalOldPoints = (totals: TaskData[]) => {
  return totals.reduce((acc: number, point: { oldPoints: number; }) => acc + point.oldPoints, 0);
};

const calculateTotalRemainingAndNewPoints = (totals: TaskData[]) => {
  return totals.reduce(
    (acc: number, point: { remainingPoints: number; newPoints: number; }) => acc + point.remainingPoints + point.newPoints,
    0
  );
};

const handleDeleteTask = (key: string) => {
  setTasks(tasks.filter((task) => task.key !== key));
};

const [expanded, setExpanded] = React.useState<string | false>('panel1');

const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  if (
    event.target &&
    (event.target as HTMLElement).nodeName !== 'BUTTON' &&
    (event.target as HTMLElement).nodeName !== 'svg'
  ) {
    setExpanded(isExpanded ? panel : false);
  } else {
    setExpanded(false);
  }
};

const dispatch = useDispatch();

  return (
        <Box sx={{ ml: 10 }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          sx={{ flexDirection: 'row-reverse', display: 'flex', justifyContent: 'left', height: 5, minHeight: 60}}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                sx={{
                  ml: 2,
                }}
              >
                <h3>
                  <b>Tasks</b>
                </h3>
              </Typography>
              {expanded && (
                <Button
                  color="primary"
                  size="small"
                  sx={{
                    ml: 2,
                  }}
                >
                  <ArrowDropUpIcon />
                </Button>
              )}
              </Box>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={handleAddTask}
                sx={{
                  fontFamily: 'Poppins',
                  '&:hover': {
                    backgroundColor: 'blue',
                    color: 'white',
                  },
                }}
              >
                + ADD A TASK
              </Button>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails   
          sx={{
          padding: '8px 16px', // reduce top and bottom padding
          marginTop: -8, // reduce top margin
              }}
              >
              <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
      {tasks.length === 0 ? (
        <TableCell size="medium" 
           sx={{ 
           border: '1px solid #ddd',
           width: 1670,
           textAlign: 'center',
           height: '80px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           }}
           >
           No task created.
         </TableCell>
      ) : (
        <Table size="medium" aria-label="a dense table">
          <TableHead sx={{ bgcolor: 'grey.50' }}>
            <TableRow>
              <TableCell>Key</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Type</TableCell>
              <TableCell align="center">Old pts.</TableCell>
              <TableCell align="center">Remaining pts.</TableCell>
              <TableCell align="center">New pts.</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((point, index) => (
              <TableRow key={point.key}>
                <TableCell
                  component="th"
                  scope="rowsTop"
                  sx={{ border: '1px solid #ddd', width: 170 }}
                >
                  <Box style={{ display: 'flex', alignItems: 'justify' }}>
                  <TextField
                     id="key"
                     variant="standard"
                     sx={{ minWidth: 70 }}
                     value={point.key}
                     onChange={handleKeyChange(point.key)}
                    />
                    <PopUp initialColor={point.color} />
                  </Box>
                </TableCell>
                <TableCell sx={{ minWidth: 400 }}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: 600 }}
                    value={point.description}
                    onChange={handleDescriptionChange(point.key)}
                  />
                  
                </TableCell>
                <StyledTableCell>
                  <FormControl variant="standard">
                    <Select
                      id={`point-type-select-${point.key}`}
                      value={point.type}
                      displayEmpty
                      onChange={(event) =>
                        handleGoalTypeChange(
                          index,
                          'type',
                          event.target.value as GoalType,
                        )
                      }
                    >
                      <MenuItem value={GoalType.GOAL_TYPE} onClick={() => dispatch(Goal())}>Goal</MenuItem>
                      <MenuItem value={GoalType.TECHNICAL_TYPE} onClick={() => dispatch(Technical())}>Technical</MenuItem>
                    </Select>
                  </FormControl>
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    id={`oldPoints${point.key}`}
                    variant="standard"
                    value={point.oldPoints}
                    onChange={handleOldPointsChange(point.key)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    id={`remainingPoints${point.key}`}
                    variant="standard"
                    value={point.remainingPoints}
                    onChange={handleRemainingPointsChange(point.key)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    id={`newPoints${point.key}`}
                    variant="standard"
                    value={point.newPoints}
                    onChange={handleNewPointsChange(point.key)}
                  />
                </StyledTableCell>
                <TableCell sx={{ border: '1px solid #ddd', Width: 80 }}>
                 <IconButton onClick={() => handleDeleteTask(point.key)}>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
<TableRow sx={{ bgcolor: 'grey.50' }}>
  <TableCell></TableCell>
  <TableCell></TableCell>
  <TableCell>Total</TableCell>
  <TableCell align="center" sx={{ border: '1px solid #ddd' }}>
    {` ${calculateTotalOldPoints(tasks)}`}
  </TableCell>
  <TableCell align="right">
    <Box style={{ marginRight: '-22px' }}>
      {` ${calculateTotalRemainingAndNewPoints(tasks)}`}
    </Box>
  </TableCell>
  <TableCell></TableCell>
  <TableCell sx={{ border: '1px solid #ddd' }}></TableCell>
</TableRow>
          </TableBody>
        </Table>
      )}
        </Table>
    </TableContainer>
        </AccordionDetails>
      </Accordion>
    </Box>

  );
}
