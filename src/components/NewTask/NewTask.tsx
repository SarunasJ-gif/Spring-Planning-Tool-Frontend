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

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import PopUp from './PopUp';

interface PointData {
  id: number;
  type: string;
  aPoints: number;
  bPoints: number;
  cPoints: number;
}
enum gType {
  Goal = 'Goal',
  Technical = 'Technical',
  Null = '',
}

const initialPointData: PointData[] = [
  { id: 1, aPoints: 0, bPoints: 0, cPoints: 5, type: gType.Goal },
  { id: 2, aPoints: 3, bPoints: 1, cPoints: 0, type: gType.Technical },
  { id: 3, aPoints: 5, bPoints: 2, cPoints: 0, type: gType.Null },
  { id: 4, aPoints: 0, bPoints: 0, cPoints: 5, type: gType.Goal },
  { id: 5, aPoints: 0, bPoints: 0, cPoints: 5, type: gType.Null },
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
    value: string,
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
      <Grid container alignItems="left" justifyContent="right">
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
                <div style={{ display: 'flex', alignItems: 'justify' }}>
                  <TextField
                    id="key"
                    label=""
                    variant="standard"
                    sx={{ minWidth: 70 }}
                  />
                  <PopUp />
                </div>
              </TableCell>
              <TableCell sx={{ minWidth: 400 }}>
                <TextField
                  id="standard-basic"
                  label=""
                  variant="standard"
                  sx={{ width: 600 }}
                />
              </TableCell>
              <TableCell sx={{ border: '1px solid #ddd', width: 170 }}>
                <FormControl variant="standard">
                  <Select
                    id={`point-type-select-${point.id}`}
                    value={point.type}
                    displayEmpty
                    onChange={(event) =>
                      handlePointDataChange(
                        index,
                        'type',
                        event.target.value as string,
                      )
                    }
                  >
                    <MenuItem value={gType.Goal}>Goal</MenuItem>
                    <MenuItem value={gType.Technical}>Technical</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell sx={{ border: '1px solid #ddd', width: 170 }}>
                <TextField
                  id={`aPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.aPoints}
                  onChange={handleAPointsChange(point.id)}
                />
              </TableCell>
              <TableCell sx={{ border: '1px solid #ddd', width: 170 }}>
                <TextField
                  id={`bPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.bPoints}
                  onChange={handleBPointsChange(point.id)}
                />
              </TableCell>
              <TableCell sx={{ border: '1px solid #ddd', width: 170 }}>
                <TextField
                  id={`cPoints${point.id}`}
                  label=""
                  variant="standard"
                  value={point.cPoints}
                  onChange={handleCPointsChange(point.id)}
                />
              </TableCell>
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
              {` ${pointData.reduce((acc, point) => acc + point.aPoints, 0)}`}
            </TableCell>
            <TableCell align="right">
              <div style={{ marginRight: '-22px' }}>
                {' '}
                {` ${pointData.reduce(
                  (acc, point) => acc + point.bPoints + point.cPoints,
                  0,
                )}`}
              </div>
            </TableCell>
            <TableCell></TableCell>
            <TableCell sx={{ border: '1px solid #ddd' }}></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
