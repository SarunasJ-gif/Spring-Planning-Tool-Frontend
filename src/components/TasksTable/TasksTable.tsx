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
import { StyledTableCell } from '../../style/TableCellStyle';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { addTask, removeTask, updateTaskDescription, updateTaskKeyValue, updateTaskNewPoints, updateTaskOldPoints, updateTaskRemainingPoints, updateTaskType } from '../../redux/NewSprint/NewSprintActions';
import { Sprint, TaskData } from '../../types/NewSprintTypes';


export default function TasksTable(): JSX.Element {
  const { tasks } = useSelector(
    (state: { newSprint: Sprint }) => state.newSprint.sprint,
  );

  const dispatch = useDispatch();

  const handleKeyChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateTaskKeyValue(id, event.target.value));
  };

  const handleDescriptionChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateTaskDescription(id, event.target.value));
  };

  const handleOldPointsChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateTaskOldPoints(id, Number(event.target.value)));
  };

  const handleRemainingPointsChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateTaskRemainingPoints(id, Number(event.target.value)));
  };

  const handleNewPointsChange = (
    id: number,
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    dispatch(updateTaskNewPoints(id, Number(event.target.value)));
  };

  const handleDeleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const handleTypeChange = (id: number, event: GoalType) => {
    dispatch(updateTaskType(id, event));
  };

  const getRandomId = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min) * Date.now();
  };

  const handleAddTask = () => {
    const newTaskObject: TaskData = {
      id: getRandomId(1, 1000),
      keyValue: '',
      keyColor: '#EC4226',
      description: '',
      type: '',
      oldPoints: 0,
      remainingPoints: 0,
      newPoints: 0,
    };

    dispatch(addTask(newTaskObject));
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
                    {tasks.map((point: TaskData, index: number) => (
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
                                handleKeyChange(point.id, event)
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
                              handleDescriptionChange(point.id, event)
                            }
                          />
                        </TableCell>
                        <StyledTableCell>
                          <FormControl variant="standard">
                            <Select
                              id={`point-type-select-${point.id}`}
                              value={point.type}
                              displayEmpty
                              onChange={(event) =>
                                handleTypeChange(
                                  point.id,
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
                            id={`oldPoints${point.id}`}
                            variant="standard"
                            value={point.oldPoints}
                            onChange={(event) =>
                              handleOldPointsChange(point.id, event)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`remainingPoints${point.id}`}
                            variant="standard"
                            value={point.remainingPoints}
                            onChange={(event) =>
                              handleRemainingPointsChange(point.id, event)
                            }
                          />
                        </StyledTableCell>
                        <StyledTableCell>
                          <TextField
                            id={`newPoints${point.id}`}
                            variant="standard"
                            value={point.newPoints}
                            onChange={(event) =>
                              handleNewPointsChange(point.id, event)
                            }
                          />
                        </StyledTableCell>
                        <TableCell sx={{ border: '1px solid #ddd', Width: 80 }}>
                          <IconButton
                            onClick={() => handleDeleteTask(point.id)}
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
