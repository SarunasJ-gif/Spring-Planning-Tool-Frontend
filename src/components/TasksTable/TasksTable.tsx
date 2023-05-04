import React, { useState } from 'react';
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
  Grid,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PopUp from './PopUp';
import { GoalType } from '../../enums/enums';
import produce, { Draft } from 'immer';
import { StyledTableCell } from '../../style/TableCellStyle';
import { useDispatch } from 'react-redux';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { addTask, removeTask } from '../../redux/NewSprint/NewSprintActions';
import { TaskData } from '../../types/NewSprintTypes';

interface TasksProps {
  tasks: TaskData[];
  setTasks: (tasks: TaskData[]) => void;
}

export default function TasksTable(props: TasksProps): JSX.Element {
  const { tasks, setTasks } = props;

  //   const reduxStateTasks = useSelector<NewSprint>(
  //     (state) => state?.sprint?.tasks,
  //   );

  const handleKeyChange = (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft[index].keyValue = event.target.value;
      }),
    );
  };

  const handleDescriptionChange = (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft[index].description = event.target.value;
      }),
    );
  };

  const handleOldPointsChange = (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft[index].oldPoints = event.target.value
          ? parseInt(event.target.value)
          : 0;
      }),
    );
  };

  const handleRemainingPointsChange = (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft[index].remainingPoints = event.target.value
          ? parseInt(event.target.value)
          : 0;
      }),
    );
  };

  const handleNewPointsChange = (
    value: string,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft[index].newPoints = event.target.value
          ? parseInt(event.target.value)
          : 0;
      }),
    );
  };

  const handleDeleteTask = (value: string) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        const index = draft.findIndex((point) => point.keyValue === value);
        draft.splice(index, 1);
      }),
    );
    dispatch(removeTask(value));
  };

  const handleTypeChange = (index: number, value: GoalType) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        draft[index].type = value;
      }),
    );
  };

  const handleAddTask = () => {
    const newTaskObject: TaskData = {
      keyValue: '',
      keyColor: '#EC4226',
      description: '',
      type: '',
      oldPoints: 0,
      remainingPoints: 0,
      newPoints: 0,
    };

    dispatch(addTask(newTaskObject));
    setTasks([...tasks, newTaskObject]);
    setExpanded(false);
  };

  const calculateTotalOldPoints = (totals: TaskData[]) => {
    return totals.reduce(
      (acc: number, point: { oldPoints: number }) => acc + point.oldPoints,
      0,
    );
  };

  const calculateTotalRemainingAndNewPoints = (totals: TaskData[]) => {
    return totals.reduce(
      (acc: number, point: { remainingPoints: number; newPoints: number }) =>
        acc + point.remainingPoints + point.newPoints,
      0,
    );
  };

  const [expanded, setExpanded] = useState(false);

  const handleAccordionToggle = () => {
    setExpanded(!expanded);
  };
  const dispatch = useDispatch();

  return (
    <Box sx={{ ml: 10 }}>
      <Accordion expanded={!expanded}>
        <AccordionSummary
          sx={{
            flexDirection: 'row-reverse',
            display: 'flex',
            justifyContent: 'left',
            height: 5,
            minHeight: 60,
          }}
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
                <Button
                  color="primary"
                  size="small"
                  onClick={handleAccordionToggle}
                  sx={{
                    ml: 2,
                  }}
                >
                  <ArrowDropUpIcon
                    sx={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
                  />
                </Button>
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
                <TableCell
                  size="medium"
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
                      <TableRow key={index}>
                        <TableCell
                          component="th"
                          scope="rowsTop"
                          sx={{ border: '1px solid #ddd', width: 170 }}
                        >
                          <Box
                            style={{ display: 'flex', alignItems: 'justify' }}
                          >
                            <TextField
                              id="keyValue"
                              variant="standard"
                              sx={{ minWidth: 70 }}
                              value={point.keyValue}
                              onChange={(event) =>
                                handleKeyChange(point.keyValue, event)
                              }
                            />
                            <PopUp initialColor={point.keyColor} />
                          </Box>
                        </TableCell>
                        <TableCell sx={{ minWidth: 400 }}>
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            sx={{ width: 600 }}
                            value={point.description}
                            onChange={(event) =>
                              handleDescriptionChange(point.keyValue, event)
                            }
                          />
                        </TableCell>
                        <StyledTableCell>
                          <FormControl variant="standard">
                            <Select
                              id={`point-type-select-${point.keyValue}`}
                              value={point.type}
                              displayEmpty
                              onChange={(event) =>
                                handleTypeChange(
                                  index,
                                  event.target.value as GoalType,
                                )
                              }
                            >
                              <MenuItem value={GoalType.GOAL_TYPE}>
                                Goal
                              </MenuItem>
                              <MenuItem value={GoalType.TECHNICAL_TYPE}>
                                Technical
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`oldPoints${point.keyValue}`}
                            variant="standard"
                            value={point.oldPoints}
                            onChange={(event) =>
                              handleOldPointsChange(point.keyValue, event)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`remainingPoints${point.keyValue}`}
                            variant="standard"
                            value={point.remainingPoints}
                            onChange={(event) =>
                              handleRemainingPointsChange(point.keyValue, event)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`newPoints${point.keyValue}`}
                            variant="standard"
                            value={point.newPoints}
                            onChange={(event) =>
                              handleNewPointsChange(point.keyValue, event)
                            }
                          />
                        </StyledTableCell>
                        <TableCell sx={{ border: '1px solid #ddd', Width: 80 }}>
                          <IconButton
                            onClick={() => handleDeleteTask(point.keyValue)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow sx={{ bgcolor: 'grey.50' }}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: '1px solid #ddd' }}
                      >
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
