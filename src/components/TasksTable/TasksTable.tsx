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
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { ArrowDropDown, DeleteForever } from '@mui/icons-material';
import PopUp from './PopUp';
import { GoalType } from '../../enums/enums';
import produce, { Draft } from 'immer';
import { StyledTableCell } from '../../style/TableCellStyle';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/NewSprint/NewSprintActions';
import { TaskData } from '../../types/NewSprintTypes';
import TaskKey from '../TaskKey/TaskKey';

interface TasksProps {
  tasks: TaskData[];
  setTasks: (tasks: TaskData[]) => void;
  isEditMode: boolean;
}

export default function TasksTable(props: TasksProps): JSX.Element {
  const { tasks, setTasks, isEditMode } = props;

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
    <Box sx={isEditMode ? { ml: 10 } : undefined}>
      <Accordion expanded={!expanded}>
        <AccordionSummary
          sx={{
            flexDirection: 'row-reverse',
            display: 'flex',
            justifyContent: 'left',
            height: 5,
            minHeight: 60,
            ...(!isEditMode ? { display: 'none' } : undefined),
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h4" fontWeight={500}>
                  Tasks
                </Typography>
                <Button
                  color="primary"
                  size="small"
                  onClick={handleAccordionToggle}
                  sx={{
                    ml: 2,
                  }}
                >
                  <ArrowDropDown
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
            marginTop: -8,
          }}
        >
          <TableContainer component={Paper} sx={{ overflowY: 'hidden' }}>
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
                      <TableCell color="#7C7D7C">Key</TableCell>
                      <TableCell color="#7C7D7C">Description</TableCell>
                      <TableCell color="#7C7D7C">Type</TableCell>
                      <TableCell align="center" color="#7C7D7C">
                        Old pts.
                      </TableCell>
                      <TableCell align="center" color="#7C7D7C">
                        Remaining pts.
                      </TableCell>
                      <TableCell align="center" color="#7C7D7C">
                        New pts.
                      </TableCell>
                      {isEditMode && <TableCell>Delete</TableCell>}
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
                            {isEditMode ? (
                              <>
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
                              </>
                            ) : (
                              <TaskKey
                                taskKey={point.keyValue}
                                keyColor={point.keyColor}
                              />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell sx={{ minWidth: 400 }}>
                          {isEditMode ? (
                            <TextField
                              id="standard-basic"
                              variant="standard"
                              sx={{ width: 600 }}
                              value={point.description}
                              onChange={(event) =>
                                handleDescriptionChange(point.keyValue, event)
                              }
                            />
                          ) : (
                            <Typography>{point.description}</Typography>
                          )}
                        </TableCell>
                        <StyledTableCell>
                          {isEditMode ? (
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
                          ) : (
                            <Typography>{point.type}</Typography>
                          )}
                        </StyledTableCell>
                        <StyledTableCell sx={{ textAlign: 'center' }}>
                          {isEditMode ? (
                            <TextField
                              id={`oldPoints${point.keyValue}`}
                              variant="standard"
                              value={point.oldPoints}
                              onChange={(event) =>
                                handleOldPointsChange(point.keyValue, event)
                              }
                            />
                          ) : (
                            <Typography textAlign="center">
                              {point.oldPoints}
                            </Typography>
                          )}
                        </StyledTableCell>
                        <StyledTableCell>
                          {isEditMode ? (
                            <TextField
                              id={`remainingPoints${point.keyValue}`}
                              variant="standard"
                              value={point.remainingPoints}
                              onChange={(event) =>
                                handleRemainingPointsChange(
                                  point.keyValue,
                                  event,
                                )
                              }
                            />
                          ) : (
                            <Typography textAlign="center">
                              {point.remainingPoints}
                            </Typography>
                          )}
                        </StyledTableCell>
                        <StyledTableCell>
                          {isEditMode ? (
                            <TextField
                              id={`newPoints${point.keyValue}`}
                              variant="standard"
                              value={point.newPoints}
                              onChange={(event) =>
                                handleNewPointsChange(point.keyValue, event)
                              }
                            />
                          ) : (
                            <Typography textAlign="center">
                              {point.newPoints}
                            </Typography>
                          )}
                        </StyledTableCell>
                        {isEditMode && (
                          <TableCell
                            sx={{ border: '1px solid #ddd', Width: 80 }}
                          >
                            <IconButton
                              onClick={() => handleDeleteTask(point.keyValue)}
                            >
                              <DeleteForever />
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                    <TableRow sx={{ bgcolor: 'grey.50' }}>
                      <TableCell></TableCell>
                      {isEditMode && <TableCell></TableCell>}
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
