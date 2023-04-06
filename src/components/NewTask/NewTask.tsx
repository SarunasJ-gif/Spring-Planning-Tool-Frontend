import * as React from 'react';
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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import PopUp from './PopUp';

function createData(
  key: number,
  description: string,
  type: string,
  oldPts: number,
  remPts: number,
  newPts: number,
) {
  return { key, description, oldPts, remPts, newPts };
}

const rows = [createData(0, '', '', 1, 1, 1), createData(1, '', '', 3, 5, 7)];

export default function TopTable() {
  const [goal, setGoal] = React.useState('');

  const handleChange2 = (event: SelectChangeEvent) => {
    setGoal(event.target.value);
  };
  const [saveClicked] = React.useState(false);
  const totalMembers = rows.reduce((total, row) => total + row.oldPts, 0);
  const totalProjects = rows.reduce((total, row) => total + row.remPts, 0);
  const totalTasks = rows.reduce((total, row) => total + row.newPts, 0);

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
              mb: 0,
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
        <TableHead>
          <TableRow>
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
          {rows.map((rows) => (
            <TableRow key={rows.description}>
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
                  sx={{ mt: 2, minWidth: 120 }}
                />
              </TableCell>
              <TableCell>
                <FormControl variant="standard" sx={{ mt: 0, width: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Goal
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={goal}
                    onChange={handleChange2}
                    label="goal"
                    sx={{ mt: 2, Width: 80 }}
                  >
                    <MenuItem value={10}>Goal</MenuItem>
                    <MenuItem value={20}>Goal2</MenuItem>
                    <MenuItem value={30}>Goal3</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <TextField
                  id="standard-basic1"
                  label=""
                  variant="standard"
                  value={rows.oldPts}
                  sx={{ mt: 2, Width: 80 }}
                />
              </TableCell>
              <TableCell sx={{ mt: 2, Width: 80 }}>
                <TextField
                  id="standard-basic2"
                  label=""
                  variant="standard"
                  value={rows.remPts}
                  sx={{ mt: 2, Width: 80 }}
                />
              </TableCell>
              <TableCell sx={{ mt: 2, Width: 80 }}>
                <TextField
                  id="standard-basic3"
                  label=""
                  variant="standard"
                  value={rows.newPts}
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
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>Total</TableCell>
            <TableCell>{totalMembers}</TableCell>
            <TableCell>{totalProjects}</TableCell>
            <TableCell>{totalTasks}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
