import * as React from 'react';
import {
  TableCell,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Team } from '../../types/TeamTypes';

const LeftAlignedTableCell = styled(TableCell)(() => ({
  textAlign: 'left',
}));

function createData(
  name: string,
  members: number,
  projects: number,
  tasks: number,
) {
  return { name, members, projects, tasks };
}
const rowsTop = [createData('Main Team', 5, 12, 847)];


export default function TopTable() {
  const teams = useSelector((state: {manageTeam: Team}) => state.manageTeam);
  
console.log(teams);

  return (
    <TableContainer component={Paper} sx={{ overflowX: 'hidden' }}>
      <Table size="medium" aria-label="a dense table" sx={{ marginLeft: 8 }}>
        <TableHead>
          <TableRow>
            <LeftAlignedTableCell>
              <b>Team Name</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Members</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Projetcs completed</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Task completed</b>
            </LeftAlignedTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {rowsTop.map((row) => (
  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
 <LeftAlignedTableCell>{row.name}</LeftAlignedTableCell>
    <LeftAlignedTableCell>{row.members}</LeftAlignedTableCell>
    <LeftAlignedTableCell>{row.projects}</LeftAlignedTableCell>
    <LeftAlignedTableCell>{row.tasks}</LeftAlignedTableCell> 

  </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

