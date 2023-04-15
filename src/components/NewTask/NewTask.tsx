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
import produce from 'immer';
import { StyledTableCell } from './styles.js';

interface PointData {
  id: number;
  type: string;
  oldPoints: number;
  remainingPoints: number;
  newPoints: number;
}

const initialPointData: PointData[] = [
  { id: 1, oldPoints: 0, remainingPoints: 0, newPoints: 5, type: goalType.Goal },
  { id: 2, oldPoints: 3, remainingPoints: 1, newPoints: 0, type: goalType.Technical },
  { id: 3, oldPoints: 5, remainingPoints: 2, newPoints: 0, type: goalType.Null },
  { id: 4, oldPoints: 0, remainingPoints: 0, newPoints: 5, type: goalType.Goal },
  { id: 5, oldPoints: 0, remainingPoints: 0, newPoints: 5, type: goalType.Null },
];

export default function TopTable() {
  const [pointData, setPointData] = useState<PointData[]>(initialPointData);
  const handleOldPointsChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointData(produce((draft) => {
      const point = draft.find((point) => point.id === id);
      if (point) {
        point.oldPoints = parseInt(event.target.value);
      }
    }));
  };

  const handleRemainingPointsChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointData(produce((draft) => {
      const point = draft.find((point) => point.id === id);
      if (point) {
        point.remainingPoints = parseInt(event.target.value);
      }
    }));
  };
  
  const handleNewPointsChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setPointData(produce((draft) => {
      const point = draft.find((point) => point.id === id);
      if (point) {
        point.newPoints = parseInt(event.target.value);
      }
    }));
  };

  const handleGoalTypeChange = (
    index: number,
    field: keyof PointData,
    value: string,
  ) => {
    setPointData((prevPointData) =>
      prevPointData.map((point, i) =>
        i === index ? { ...point, [field]: value } : point,
      ),
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
      {pointData.length === 0 ? (
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
            {pointData.map((point, index) => (
              <TableRow key={point.id}>
                <TableCell
                  component="th"
                  scope="rowsTop"
                  sx={{ border: '1px solid #ddd', width: 170 }}
                >
                  <Box style={{ display: 'flex', alignItems: 'justify' }}>
                    <TextField
                      id="key"
                      label=""
                      variant="standard"
                      sx={{ minWidth: 70 }}
                    />
                    <PopUp />
                  </Box>
                </TableCell>
                <TableCell sx={{ minWidth: 400 }}>
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    sx={{ width: 600 }}
                  />
                </TableCell>
                <StyledTableCell>
                  <FormControl variant="standard">
                    <Select
                      id={`point-type-select-${point.id}`}
                      value={point.type}
                      displayEmpty
                      onChange={(event) =>
                        handleGoalTypeChange(
                          index,
                          'type',
                          event.target.value as string,
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
                    id={`oldPoints${point.id}`}
                    variant="standard"
                    value={point.oldPoints}
                    onChange={handleOldPointsChange(point.id)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    id={`remainingPoints${point.id}`}
                    variant="standard"
                    value={point.remainingPoints}
                    onChange={handleRemainingPointsChange(point.id)}
                  />
                </StyledTableCell>
                <StyledTableCell>
                  <TextField
                    id={`newPoints${point.id}`}
                    variant="standard"
                    value={point.newPoints}
                    onChange={handleNewPointsChange(point.id)}
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
    {` ${calculateTotalOldPoints(pointData)}`}
  </TableCell>
  <TableCell align="right">
    <Box style={{ marginRight: '-22px' }}>
      {` ${calculateTotalRemainingAndNewPoints(pointData)}`}
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
