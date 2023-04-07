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
  Grid,
} from '@mui/material';

import TaskKey from './../TaskKey/TaskKey';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import PopUp from './PopUp';

interface PointData {
  id: number;
  aPoints: number;
  bPoints: number;
  cPoints: number;
  goal: string;
}
enum Goal {
  Goal1 = 'A Goal',
  Goal2 = 'B Goal',
  Goal3 = 'C Goal',
}

const initialPointData: PointData[] = [
  { id: 1, aPoints: 0, bPoints: 20, cPoints: 5, goal: Goal.Goal1 },
  { id: 2, aPoints: 0, bPoints: 15, cPoints: 2, goal: Goal.Goal2 },
  { id: 3, aPoints: 0, bPoints: 25, cPoints: 7, goal: Goal.Goal3 },
];

export default function TopTable() {
  const [pointData, setPointData] = useState<PointData[]>(initialPointData);
  const handleAPointsChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPointData((prevPointData) => {
        return prevPointData.map((point) => {
          if (point.id === id) {
            return {
              ...point,
              aPoints: parseInt(event.target.value),
            };
          }
          return point;
        });
      });
    };

  const handleBPointsChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPointData((prevPointData) => {
        return prevPointData.map((point) => {
          if (point.id === id) {
            return {
              ...point,
              bPoints: parseInt(event.target.value),
            };
          }
          return point;
        });
      });
    };

  const handleCPointsChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setPointData((prevPointData) => {
        return prevPointData.map((point) => {
          if (point.id === id) {
            return {
              ...point,
              cPoints: parseInt(event.target.value),
            };
          }
          return point;
        });
      });
    };

  const handlePointDataChange = (
    index: number,
    field: keyof PointData,
    value: number,
  ) => {
    setPointData((prevPointData) =>
      prevPointData.map((point, i) =>
        i === index ? { ...point, [field]: value } : point,
      ),
    );
  };

  const [saveClicked] = React.useState(false);

  return (
    <TableContainer component={Paper}>
      <Grid container alignItems="left" justifyContent="space-between">
        <Grid></Grid>
        <Grid>
          <Button
            variant={saveClicked ? 'contained' : 'outlined'}
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
        <TableHead sx={{ bgcolor: 'grey.50', color: 'grey' }}>
          <TableRow sx={{ color: 'grey.500' }}>
            <TableCell>Key</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Old pts.</TableCell>
            <TableCell>Remaining pts.</TableCell>
            <TableCell>New pts.</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointData.map((point, index) => (
            <TableRow key={point.id}>
              <TableCell component="th" scope="rowsTop" sx={{ mt: 0 }}>
                <div style={{ display: 'flex', alignItems: 'justify' }}>
                  <TaskKey
                    taskKey={'SFD-173'}
                    keyColor={''}
                    keyBackgroundColor={''}
                  />
                  <PopUp />
                </div>
              </TableCell>
              <TableCell>
                <TextField
                  id="standard-basic"
                  label=""
                  variant="standard"
                  sx={{ mt: 2, width: '500px' }}
                />
              </TableCell>
              <TableCell>
                <FormControl variant="standard" sx={{ mt: 0, width: 100 }}>
                  <InputLabel id={`point-goal-label-${point.id}`}>
                    Goal
                  </InputLabel>
                  <Select
                    labelId={`point-goal-label-${point.id}`}
                    id={`point-goal-select-${point.id}`}
                    value={point.goal}
                    onChange={(event) =>
                      handlePointDataChange(
                        index,
                        'goal',
                        event.target.value as string,
                      )
                    }
                    label="goal"
                    sx={{ mt: 2, Width: 80 }}
                  >
                    <MenuItem value={Goal.Goal1}>Goal A</MenuItem>
                    <MenuItem value={Goal.Goal2}>Goal B</MenuItem>
                    <MenuItem value={Goal.Goal3}>Goal C</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <TextField
                  id={`aPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.aPoints}
                  onChange={handleAPointsChange(point.id)}
                  sx={{ mt: 2, Width: 80 }}
                />
              </TableCell>
              <TableCell sx={{ mt: 2, Width: 80 }}>
                <TextField
                  id={`bPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.bPoints}
                  onChange={handleBPointsChange(point.id)}
                  sx={{ mt: 2, Width: 80 }}
                />
              </TableCell>
              <TableCell sx={{ mt: 2, Width: 80 }}>
                <TextField
                  id={`cPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.cPoints}
                  onChange={handleCPointsChange(point.id)}
                  sx={{ mt: 2, Width: 80 }}
                />
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="delete"
                  color="default"
                  sx={{ mt: 2, Width: 80 }}
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
            <TableCell align="center">
              {` ${pointData.reduce((acc, point) => acc + point.aPoints, 0)}`}
            </TableCell>
            <TableCell align="center">
              {` ${pointData.reduce((acc, point) => acc + point.bPoints, 0)}`}
            </TableCell>
            <TableCell align="center">
              {`${pointData.reduce((acc, point) => acc + point.cPoints, 0)}`}
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
