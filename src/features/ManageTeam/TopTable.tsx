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
import { RootState } from '../../redux/store';

const LeftAlignedTableCell = styled(TableCell)(() => ({
  textAlign: 'left',
}));

export default function TopTable() {
  const teams = useSelector((state: RootState) => state.manageTeam.team);
  const rowsTop = teams ? [createData(teams.name, teams.members.length, teams.completedProjects, teams.completedTasks)] : [];

  function createData(
    name: string,
    members: number,
    projects: number | null,
    tasks: number | null,
  ) {
    return { name, members, projects, tasks };
  }

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
              <b>Projects completed</b>
            </LeftAlignedTableCell>
            <LeftAlignedTableCell>
              <b>Tasks completed</b>
            </LeftAlignedTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTop.map((row) => (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row.name}>
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
