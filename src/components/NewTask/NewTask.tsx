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
  Grid,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PopUp from './PopUp';
import { GoalType } from '../../enums/enums';
import produce, { Draft } from 'immer';
import { StyledTableCell } from '../../style/TableCellStyle';
import { useDispatch } from 'react-redux';
import { Technical, Goal } from '../../reducers/task/typeSlice';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export interface TaskData {
  keyValue: string;
  keyColor: string;
  description: string;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
}

interface TasksProps {
  tasks: TaskData[];
  setTasks: (tasks: TaskData[]) => void;
}

export default function NewTask(props: TasksProps): JSX.Element {
  const { tasks, setTasks } = props;

  const handleKeyChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks(
        produce(tasks, (draft: Draft<TaskData[]>) => {
          const index = draft.findIndex((point) => point.keyValue === key);
          draft[index].keyValue = event.target.value;
        }),
      );
    };

  const handleDescriptionChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks(
        produce(tasks, (draft: Draft<TaskData[]>) => {
          const index = draft.findIndex((point) => point.keyValue === key);
          draft[index].description = event.target.value;
        }),
      );
    };

  const handleOldPointsChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks(
        produce(tasks, (draft: Draft<TaskData[]>) => {
          const index = draft.findIndex((point) => point.keyValue === key);
          draft[index].oldPoints = parseInt(event.target.value);
        }),
      );
    };

  const handleRemainingPointsChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks(
        produce(tasks, (draft: Draft<TaskData[]>) => {
          const index = draft.findIndex((point) => point.keyValue === key);
          draft[index].remainingPoints = parseInt(event.target.value);
        }),
      );
    };

  const handleNewPointsChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setTasks(
        produce(tasks, (draft: Draft<TaskData[]>) => {
          const index = draft.findIndex((point) => point.keyValue === key);
          draft[index].newPoints = parseInt(event.target.value);
        }),
      );
    };

  const handleDeleteTask = (key: string) => {
    setTasks(tasks.filter((task) => task.keyValue !== key));
  };

  const handleTypeChange = (index: number, value: GoalType) => {
    setTasks(
      produce(tasks, (draft: Draft<TaskData[]>) => {
        draft[index].type = value;
      }),
    );
  };

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        keyValue: '',
        keyColor: '#EC4226',
        description: '',
        type: '',
        oldPoints: 0,
        remainingPoints: 0,
        newPoints: 0,
      },
    ]);
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
                              onChange={() => handleKeyChange(point.keyValue)}
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
                            onChange={() =>
                              handleDescriptionChange(point.keyValue)
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
                              <MenuItem
                                value={GoalType.GOAL_TYPE}
                                onClick={() => dispatch(Goal())}
                              >
                                Goal
                              </MenuItem>
                              <MenuItem
                                value={GoalType.TECHNICAL_TYPE}
                                onClick={() => dispatch(Technical())}
                              >
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
                            onChange={() =>
                              handleOldPointsChange(point.keyValue)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`remainingPoints${point.keyValue}`}
                            variant="standard"
                            value={point.remainingPoints}
                            onChange={() =>
                              handleRemainingPointsChange(point.keyValue)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`newPoints${point.keyValue}`}
                            variant="standard"
                            value={point.newPoints}
                            onChange={() =>
                              handleNewPointsChange(point.keyValue)
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
