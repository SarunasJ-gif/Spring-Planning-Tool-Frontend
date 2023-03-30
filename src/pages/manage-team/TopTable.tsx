import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  name: string,
  members: number,
  projects: number,
  tasks: number,
) {
  return { name, members, projects, tasks };
}
const rowsTop = [createData('JustasTeam', 5, 12, 847)];

export default function ManageTeam() {
  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Team Name</b>
            </TableCell>
            <TableCell align="left">
              <b>Members</b>
            </TableCell>
            <TableCell align="left">
              <b>Projetcs completed</b>
            </TableCell>
            <TableCell align="left">
              <b>Task completed</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTop.map((rowsTop) => (
            <TableRow
              key={rowsTop.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="rowsTop"
                style={{ width: '350px' }}
              >
                {rowsTop.name}
              </TableCell>
              <TableCell align="left">{rowsTop.members}</TableCell>
              <TableCell align="left">{rowsTop.projects}</TableCell>
              <TableCell align="left">{rowsTop.tasks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
