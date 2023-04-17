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
  Grid,
  Typography,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PopUp from './PopUp';
import { goalType } from './../../enums/enums'; 
import produce, { Draft } from 'immer';
import { StyledTableCell } from '../../style/TableCellStyle.js';
import MockedData from './mock_task.json';

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
  useEffect(() => {
    setTasks(MockedData);
  }, []);

  const handleOldPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce((draft: Draft<TaskData[]>) => {
        const point = draft.find((point) => point.key === key);
        if (point) {
          point.oldPoints = parseInt(event.target.value);
        }
      })
    );
  };

  const handleRemainingPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce((draft: Draft<TaskData[]>) => {
        const point = draft.find((point) => point.key === key);
        if (point) {
          point.remainingPoints = parseInt(event.target.value);
        }
      })
    );
  };

  const handleNewPointsChange = (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setTasks(
      produce((draft: Draft<TaskData[]>) => {
        const point = draft.find((point) => point.key === key);
        if (point) {
          point.newPoints = parseInt(event.target.value);
        }
      })
    );
  };

  const handleGoalTypeChange = (index: number, field: keyof TaskData, value: goalType) => {
    setTasks((prevPointData) =>
      prevPointData.map((point, i) => (i === index ? { ...point, [field]: value } : point))
    );
  };

const calculateTotalOldPoints = (pointData: any[]) => {
  return pointData.reduce((acc: any, point: { oldPoints: any; }) => acc + point.oldPoints, 0);
};

const calculateTotalRemainingAndNewPoints = (pointData: any[]) => {
  return pointData.reduce(
    (acc: any, point: { remainingPoints: any; newPoints: any; }) => acc + point.remainingPoints + point.newPoints,
    0
  );
};

  return (
    <TableContainer component={Paper}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography
            sx={{
              ml: 2,
            }}
          >
            <h3>
              <b>Tasks</b>
            </h3>
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              mt: 1,
              mr: 2,
              mb: 1,
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
                          event.target.value as goalType,
                        )
                      }
                    >
                      <MenuItem value={goalType.Goal}>Goal</MenuItem>
                      <MenuItem value={goalType.Technical}>Technical</MenuItem>
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
                  <IconButton aria-label="delete" color="default">
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
  );
}
